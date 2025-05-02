import React from "react";
import { BgPattern } from "./bg-pattern";

export function AppContainer({
  children,
  footer,
}: {
  children: React.ReactNode;
  footer: React.ReactNode;
}) {
  return (
    <>
      <main className="relative w-full min-h-screen px-6 sm:px-8 md:px-10">
        <div className="w-full max-w-7xl mx-auto">
          <div className="relative z-20">{children} </div>
        </div>
        <>
          <BgPattern />
        </>
      </main>
      {footer}
    </>
  );
}
