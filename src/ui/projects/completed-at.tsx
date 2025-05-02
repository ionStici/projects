export function CompletedAt({ completedAt }: { completedAt: string }) {
  const completedAtDate = new Date(completedAt);
  const completedAtMonth = completedAtDate.toLocaleString("default", { month: "long" });
  const completedAtYear = completedAtDate.getFullYear();

  return (
    <p className="text-sm text-blue-500 font-medium text-center">
      {completedAtMonth} {completedAtYear}
    </p>
  );
}
