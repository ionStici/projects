import { Panel } from "../panel";

export function ProjectsWrapper({ children }: { children: React.ReactNode }) {
  return (
    <section className="w-full max-w-[1200px] mx-auto">
      <Panel />
      <div>{children}</div>
    </section>
  );
}
