const steps = [
  {
    number: "01",
    title: "Ask naturally",
    description:
      "Speak with the engineering AI agent and describe the change you want to understand.",
  },
  {
    number: "02",
    title: "Connect the calculation",
    description:
      "The agent reads the relevant calculation and identifies the inputs, relationships, and data behind it.",
  },
  {
    number: "03",
    title: "Get a clear answer",
    description:
      "Receive a practical explanation of what changes, why it changes, and what to expect next.",
  },
];

export default function Home() {
  return (
    <main className="relative flex-1 overflow-hidden bg-[#f6f8f7] text-slate-900">
      <div className="pointer-events-none absolute -right-40 -top-48 h-[34rem] w-[34rem] rounded-full bg-emerald-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-56 -left-40 h-[32rem] w-[32rem] rounded-full bg-cyan-100/60 blur-3xl" />

      <section className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 pb-24 pt-16 sm:px-10 lg:grid-cols-[1.05fr_.95fr] lg:px-12 lg:pb-32 lg:pt-24">
        <div>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/70 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Engineering intelligence
          </div>
          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.05] tracking-[-0.04em] text-slate-950 sm:text-6xl lg:text-7xl">
            Ask your calculations{" "}
            <span className="text-emerald-600">what happens next.</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600 sm:text-xl">
            Talk to an AI agent that understands your engineering calculations.
            Ask a question in plain language and get an answer grounded in the
            data that drives your process.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#how-it-works"
              className="rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-950/15 transition hover:bg-emerald-700"
            >
              See how it works
            </a>
            <a
              href="#example"
              className="rounded-full border border-slate-300 bg-white/70 px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-emerald-400 hover:text-emerald-700"
            >
              View an example
            </a>
          </div>
        </div>

        <div id="example" className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-emerald-200/40 blur-2xl" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white bg-slate-950 p-2 shadow-2xl shadow-slate-900/20">
            <div className="rounded-[1.25rem] bg-[#10211e] p-6 sm:p-8">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
                    Live analysis
                  </p>
                  <p className="mt-1 text-sm text-slate-400">
                    Thermal process calculation
                  </p>
                </div>
                <span className="flex items-center gap-2 rounded-full bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Ready
                </span>
              </div>
              <div className="py-8">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
                  Your question
                </p>
                <p className="mt-3 text-xl leading-8 text-white">
                  “If we change the inlet temperature from{" "}
                  <span className="text-amber-300">50°F</span> to{" "}
                  <span className="text-amber-300">90°F</span>, what will
                  happen to the outlet temperature?”
                </p>
              </div>
              <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-5">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-emerald-300">
                  Agent response
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-200">
                  Reading the connected calculation and tracing the temperature
                  relationship...
                </p>
                <div className="mt-5 flex items-center gap-3 text-sm font-semibold text-emerald-300">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-300" />
                  Calculation-aware answers
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="relative border-t border-slate-200/80 bg-white/60">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
              How it works
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-4xl">
              From a question to an engineering answer.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              No hunting through spreadsheets or reverse-engineering formulas.
              The agent follows the calculation so you can focus on the
              decision.
            </p>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {steps.map((step) => (
              <article
                key={step.number}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <p className="text-sm font-bold text-emerald-600">
                  {step.number}
                </p>
                <h3 className="mt-8 text-xl font-semibold text-slate-950">
                  {step.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
