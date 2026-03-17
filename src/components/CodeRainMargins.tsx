export function CodeRainMargins() {
  return (
    <>
      {/* Left Margin - Static Noise Background */}
      <div className="fixed left-0 top-0 w-[60px] h-screen bg-black z-0 pointer-events-none opacity-80"></div>
      
      {/* Right Margin - Static Noise Background */}
      <div className="fixed right-0 top-0 w-[60px] h-screen bg-black z-0 pointer-events-none opacity-80"></div>
    </>
  );
}
