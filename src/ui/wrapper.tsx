import { BgPattern } from "./bg-pattern";

export function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-full relative min-h-screen bg-blue-500 px-6 sm:px-8 md:px-10">
      <div className="w-full max-w-7xl mx-auto">
        <div className="relative z-20">{children} </div>
        <BgPattern />
      </div>
    </main>
  );
}
