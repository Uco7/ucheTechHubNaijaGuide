export default function StepList({ steps }) {
  return (
    <ol className="mt-8 space-y-4">
      {steps.map((step, i) => (
        <li
          key={i}
          id={`step-${i + 1}`}
          className="slip-edge relative overflow-hidden rounded-card border border-line bg-slip pl-16 pr-5 py-5 shadow-sm scroll-mt-24"
        >
          <span
            aria-hidden="true"
            className="absolute left-0 top-0 grid h-full w-14 place-items-center border-r border-dashed border-line font-mono text-lg font-bold text-forest/70"
          >
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="font-display text-base font-semibold text-forest md:text-lg">{step.title}</h3>
          <p className="mt-1.5 text-[0.95rem] leading-relaxed text-ink/80">{step.body}</p>
        </li>
      ))}
    </ol>
  );
}
