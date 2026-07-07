export default function TableOfContents({ steps, hasFaq }) {
  return (
    <nav aria-label="On this page" className="rounded-card border border-line bg-white p-5">
      <p className="font-display text-sm font-bold uppercase tracking-wide text-forest">On this page</p>
      <ol className="mt-3 space-y-1.5 text-sm">
        <li>
          <a href="#requirements" className="text-ink/70 hover:text-forest-bright hover:underline">
            What you'll need
          </a>
        </li>
        {steps.map((step, i) => (
          <li key={i}>
            <a href={`#step-${i + 1}`} className="text-ink/70 hover:text-forest-bright hover:underline">
              {i + 1}. {step.title}
            </a>
          </li>
        ))}
        {hasFaq && (
          <li>
            <a href="#faq" className="text-ink/70 hover:text-forest-bright hover:underline">
              FAQs
            </a>
          </li>
        )}
      </ol>
    </nav>
  );
}
