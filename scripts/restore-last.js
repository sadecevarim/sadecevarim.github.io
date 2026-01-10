const fs = require('fs');
const path = require('path');

const backupRoot = path.resolve(__dirname, '..', '.backups');
const srcDir = path.resolve(__dirname, '..', 'src');

async function restore() {
  try {
    const entries = await fs.promises.readdir(backupRoot, { withFileTypes: true });
    const dirs = entries.filter(e => e.isDirectory()).map(d => d.name).sort();
    if (dirs.length === 0) {
      console.error('No backups found in', backupRoot);
      process.exit(1);
    }
    const latest = dirs[dirs.length - 1];
    const latestPath = path.join(backupRoot, latest);
    console.log('Restoring from', latestPath);

    async function copyDir(src, dest) {
      const items = await fs.promises.readdir(src, { withFileTypes: true });
      for (const item of items) {
        const srcPath = path.join(src, item.name);
        const destPath = path.join(dest, item.name.replace(/\.deleted$/, ''));
        if (item.isDirectory()) {
          await fs.promises.mkdir(destPath, { recursive: true });
          await copyDir(srcPath, destPath);
        } else if (item.isFile()) {
          if (item.name.endsWith('.deleted')) {
            const target = destPath.replace(/\.deleted$/, '');
            if (fs.existsSync(target)) {
              await fs.promises.unlink(target);
              console.log('Deleted file:', target);
            }
          } else {
            await fs.promises.mkdir(path.dirname(destPath), { recursive: true });
            await fs.promises.copyFile(srcPath, destPath);
            console.log('Restored:', destPath);
          }
        }
      }
    }

    await copyDir(latestPath, srcDir);
    console.log('Restore complete.');
  } catch (err) {
    console.error('Restore failed:', err);
    process.exit(1);
  }
}

restore();
