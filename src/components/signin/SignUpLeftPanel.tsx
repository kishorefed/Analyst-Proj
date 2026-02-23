import React from 'react';

export const SignUpLeftPanel: React.FC = () => (
  <div className="flex flex-col overflow-hidden">
    <div className="mb-14 flex items-center gap-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-teal-400 to-teal-200 text-xl shadow-[0_0_26px_rgba(94,234,212,.35),0_4px_12px_rgba(15,118,110,.3)]">
        ✨
      </div>
      <span className="font-['Syne',sans-serif] text-xl font-extrabold tracking-tight text-white">
        AnalystAI
      </span>
    </div>

    <div className="flex flex-1 flex-col justify-center">
      <div>
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-200/20 bg-teal-400/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-teal-200">
          🚀 Intelligent BA Platform
        </div>
        <h1 className="mb-4 font-['Syne',sans-serif] text-[46px] font-extrabold leading-[1.07] tracking-tight text-white">
          Start capturing
          <br />
          requirements
          <br />
          <mark className="bg-transparent bg-linear-to-r from-teal-300 to-teal-400 bg-clip-text font-['Syne',sans-serif] text-[46px] font-extrabold text-transparent">
            in 3 hours.
          </mark>
        </h1>
        <p className="mb-9 max-w-[355px] text-[14.5px] leading-relaxed text-white/46">
          Join hundreds of Business Analysts who are replacing 4-week requirement sessions with 3-hour AI-powered conversations.
        </p>
      </div>

      <div className="mb-8 grid grid-cols-3 gap-2.5">
        {[
          { val: '3h', lbl: 'vs 4 weeks traditional' },
          { val: '127', lbl: 'avg requirements captured' },
          { val: '96%', lbl: 'cost reduction' },
        ].map((stat, i) => (
          <div
            key={i}
            className="rounded-[13px] border border-white/10 bg-white/5 p-3.5 backdrop-blur-sm transition-colors hover:bg-white/10"
          >
            <div className="font-['Syne',sans-serif] text-2xl font-extrabold leading-none text-teal-200">
              {stat.val}
            </div>
            <div className="text-[10px] font-medium leading-snug text-white/36">
              {stat.lbl}
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-white/8 bg-white/5 p-5 backdrop-blur-xl">
        <p className="mb-3 text-[13px] italic leading-snug text-white/60">
          &ldquo;We cut our requirements phase from 3 weeks to half a day. The documents AnalystAI generates are better than what our senior BAs wrote manually.&rdquo;
        </p>
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-teal-700 to-teal-400 text-[11px] font-extrabold text-white">
            KK
          </div>
          <div>
            <div className="text-xs font-bold text-white/78">Kishorekumar</div>
            <div className="text-[10.5px] text-white/36">
              Software Developer Intern · Spritle Software
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
