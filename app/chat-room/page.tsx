import { auth } from '@clerk/nextjs/server'



const ChatRoom = async () => {

await auth.protect()

  return (
    <main className="relative flex-1 overflow-hidden bg-[#f6f8f7] text-slate-900">
      <div className="pointer-events-none absolute -right-40 -top-48 h-[34rem] w-[34rem] rounded-full bg-emerald-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-56 -left-40 h-[32rem] w-[32rem] rounded-full bg-cyan-100/60 blur-3xl" />

      <section className="relative mx-auto flex min-h-full w-full max-w-5xl flex-col px-6 pb-16 pt-12 sm:px-10 lg:px-12 lg:pt-20">
        <div className="mb-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/70 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Engineering intelligence
          </div>
          <h1 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-6xl">
            Ask a question about your{" "}
            <span className="text-emerald-600">calculations.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Describe what you want to understand in plain language. The agent
            will use your connected engineering data to help trace the answer.
          </p>
        </div>

        <div className="relative mt-auto">
          <div className="absolute -inset-4 rounded-[2rem] bg-emerald-200/40 blur-2xl" />
          <div className="relative rounded-[1.75rem] border border-white bg-slate-950 p-2 shadow-2xl shadow-slate-900/20">
            <div className="rounded-[1.25rem] bg-[#10211e] p-6 sm:p-8">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
                    New conversation
                  </p>
                  <p className="mt-1 text-sm text-slate-400">
                    Ask about a process, input, or result
                  </p>
                </div>
                <span className="flex items-center gap-2 rounded-full bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Ready
                </span>
              </div>

              <form className="pt-8" method="post">
                <label
                  htmlFor="engineering-question"
                  className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500"
                >
                  Your question
                </label>
                <textarea
                  id="engineering-question"
                  name="question"
                  rows={5}
                  required
                  placeholder="For example: If we change the inlet temperature from 50°F to 90°F, what will happen to the outlet temperature?"
                  className="mt-3 w-full resize-y rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-base leading-7 text-white outline-none transition placeholder:text-slate-500 focus:border-emerald-300/70 focus:ring-2 focus:ring-emerald-300/20"
                />
                <div className="mt-5 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                  <p className="text-sm leading-6 text-slate-500">
                    Ask one question at a time for the clearest answer.
                  </p>
                  <button
                    type="submit"
                    className="rounded-full bg-emerald-500 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-950/20 transition hover:bg-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2 focus:ring-offset-[#10211e]"
                  >
                    Ask the agent
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ChatRoom;