export function BgPattern() {
  return (
    <div className="absolute inset-0">
      {/* First pattern for viewport height */}
      <div
        className="relative h-[100dvh] w-full bg-red z-10
        [&>div]:absolute [&>div]:h-full [&>div]:w-full 
        [&>div]:bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] 
        [&>div]:[background-size:16px_16px] 
        [&>div]:[mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"
      >
        <div></div>
      </div>

      {/* Second pattern for remaining content */}
      <div
        className="relative h-[calc(100%-100dvh)] w-full bg-red z-10
        [&>div]:absolute [&>div]:h-full [&>div]:w-full 
        [&>div]:bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] 
        [&>div]:[background-size:16px_16px] 
        [&>div]:[mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"
      >
        <div></div>
      </div>
    </div>
  );
}
