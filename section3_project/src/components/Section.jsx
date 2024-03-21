export default function Section({ children, title, className, ...aaa }) {
  return (
    <section className={className} {...aaa}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
