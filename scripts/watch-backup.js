const chokidar = require('chokidar');
const fs = require('fs');
const path = require('path');

const srcDir = path.resolve(__dirname, '..', 'src');
const backupRoot = path.resolve(__dirname, '..', '.backups');

function ensureDir(dir) {
  return fs.promises.mkdir(dir, { recursive: true });
}

function copyFile(src, dest) {
  return ensureDir(path.dirname(dest)).then(() => fs.promises.copyFile(src, dest));
}

function getTimestampFolder() {
  const ts = new Date().toISOString().replace(/[:.]/g, '-');
  return path.join(backupRoot, ts);
}

(async function () {
  await ensureDir(backupRoot);
  const currentBackup = getTimestampFolder();
  await ensureDir(currentBackup);

  console.log('Backup watcher started. Backups will be written to', currentBackup);

  const watcher = chokidar.watch(srcDir, { ignored: /(^|[\\])\\.git|node_modules/, persistent: true, ignoreInitial: true });

  watcher.on('all', async (event, filePath) => {
    try {
      const rel = path.relative(srcDir, filePath);
      const dest = path.join(currentBackup, rel);
      if (event === 'unlink' || event === 'unlinkDir') {
        // record deletion by writing a tombstone
        await ensureDir(path.dirname(dest));
        await fs.promises.writeFile(dest + '.deleted', `deleted:${new Date().toISOString()}`);
        console.log('Deleted:', rel);
      } else if (event === 'add' || event === 'change' || event === 'addDir') {
        const stat = await fs.promises.stat(filePath);
        if (stat.isFile()) {
          await copyFile(filePath, dest);
          console.log(`${event}: ${rel}`);
        }
      }
    } catch (err) {
      console.error('Backup error for', filePath, err);
    }
  });

  process.on('SIGINT', () => {
    console.log('Backup watcher stopping...');
    watcher.close();
    process.exit();
  });
})();
