interface DataDripScrollerProps {
  bottomOffset?: string;
}

export function DataDripScroller({ bottomOffset = 'bottom-8' }: DataDripScrollerProps) {
  return (
    <div className={`data-drip-scroller absolute ${bottomOffset} left-1/2 -translate-x-1/2 z-10`}>
      <div className="drip-pixel" style={{ animationDelay: '0s' }}></div>
      <div className="drip-pixel" style={{ animationDelay: '0.3s' }}></div>
      <div className="drip-pixel" style={{ animationDelay: '0.6s' }}></div>
    </div>
  );
}
