export default function TodoLayout({
  children
}: { children: React.ReactNode }) {
  return (
    <section>
      <nav></nav>
      {children}
    </section>
  );
}