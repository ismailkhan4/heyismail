interface ProblemColumn {
  icon: React.ReactNode;
  heading: string;
  description: string;
}

interface ProblemValueProps {
  className?: string;
}

export default function ProblemValue({ className }: ProblemValueProps) {
  return (
    <section className={className}>
      {/* ProblemValue component will be implemented in task 5 */}
    </section>
  );
}