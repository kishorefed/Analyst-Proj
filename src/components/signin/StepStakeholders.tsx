import React from 'react';
import { ROLES } from './constants';
import type { StakeholderRow } from './types';
import { PROJECT_TYPES } from './constants';

interface StepStakeholdersProps {
  stakeholders: StakeholderRow[];
  leadBaName: string;
  leadBaEmail: string;
  sessionLanguage: string;
  aiStyle: string;
  preSessionNotes: string;
  clientName: string;
  projectName: string;
  domain: string;
  timeline: string;
  projectType: string;
  errors: { leadBa?: boolean };
  onAddStakeholder: () => void;
  onRemoveStakeholder: (id: number) => void;
  onStakeholderChange: (id: number, field: keyof StakeholderRow, value: string) => void;
  onLeadBaNameChange: (v: string) => void;
  onLeadBaEmailChange: (v: string) => void;
  onSessionLanguageChange: (v: string) => void;
  onAiStyleChange: (v: string) => void;
  onPreSessionNotesChange: (v: string) => void;
  onBack: () => void;
  onLaunch: () => void;
  launchError?: string | null;
  isLaunching?: boolean;
}

const inputSm =
  'rounded-lg border-2 border-[#dde8e8] bg-white px-2.5 py-2 text-[12.5px] outline-none focus:border-teal-400 focus:shadow-[0_0_0_3px_rgba(15,118,110,.07)]';
const selectSm =
  'cursor-pointer rounded-lg border-2 border-[#dde8e8] bg-white bg-[length:10px_6px] bg-[right_9px_center] bg-no-repeat py-2 pr-7 pl-2.5 text-[12.5px] outline-none focus:border-teal-400 [background-image:url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'10\' height=\'6\' fill=\'none\'%3E%3Cpath d=\'M1 1l4 4 4-4\' stroke=\'%230f766e\' stroke-width=\'1.8\' stroke-linecap=\'round\' stroke-linejoin=\'round\'/%3E%3C/svg%3E")]';

export const StepStakeholders: React.FC<StepStakeholdersProps> = (props) => {
  const {
    stakeholders,
    leadBaName,
    leadBaEmail,
    sessionLanguage,
    aiStyle,
    preSessionNotes,
    clientName,
    projectName,
    domain,
    timeline,
    projectType,
    errors,
    onAddStakeholder,
    onRemoveStakeholder,
    onStakeholderChange,
    onLeadBaNameChange,
    onLeadBaEmailChange,
    onSessionLanguageChange,
    onAiStyleChange,
    onPreSessionNotesChange,
    onBack,
    onLaunch,
    launchError = null,
    isLaunching = false,
  } = props;

  const projectTypeLabel =
    PROJECT_TYPES.find((p) => p.value === projectType)?.label ?? '—';
  const summaryStakeholders = leadBaName
    ? `${leadBaName} + ${stakeholders.length} stakeholder${stakeholders.length !== 1 ? 's' : ''}`
    : `${stakeholders.length} stakeholder${stakeholders.length !== 1 ? 's' : ''}`;

  return (
    <div className="flex flex-1 flex-col">
      <div className="mb-6">
        <h2 className="mb-1 font-['Syne',sans-serif] text-[26px] font-extrabold leading-tight text-[#081212]">
          Stakeholders &amp; Team 👥
          <br />
          <em className="not-italic bg-linear-to-r from-teal-700 to-teal-400 bg-clip-text text-[26px] font-extrabold text-transparent">
            Who&apos;s in this session?
          </em>
        </h2>
        <p className="text-[13px] leading-relaxed text-[#4d6b6b]">
          The AI addresses requirements to the right person and tailors follow-up questions based on roles.
        </p>
      </div>

      <div className="mb-2 flex flex-col gap-2">
        {stakeholders.map((sh) => (
          <div
            key={sh.id}
            className="grid grid-cols-[1fr_150px_150px_30px] items-center gap-2 rounded-xl border-2 border-[#dceaea] bg-[#f5fefe] p-3 transition-colors hover:border-teal-200"
          >
            <input
              type="text"
              placeholder="Full name"
              value={sh.name}
              onChange={(e) => onStakeholderChange(sh.id, 'name', e.target.value)}
              className={inputSm}
            />
            <select
              value={sh.role}
              onChange={(e) => onStakeholderChange(sh.id, 'role', e.target.value)}
              className={selectSm}
            >
              {ROLES.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
            <input
              type="email"
              placeholder="Email (opt.)"
              value={sh.email}
              onChange={(e) => onStakeholderChange(sh.id, 'email', e.target.value)}
              className={inputSm}
            />
            <button
              type="button"
              onClick={() => onRemoveStakeholder(sh.id)}
              title="Remove"
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border-[1.5px] border-red-200 bg-red-50 text-[13px] text-red-500 transition-colors hover:bg-red-200"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={onAddStakeholder}
        className="flex w-full items-center justify-center gap-2 rounded-lg border-2 border-dashed border-teal-700/30 bg-teal-50 py-2.5 text-[13px] font-bold text-teal-700 transition-colors hover:border-teal-700 hover:bg-teal-100"
      >
        <span className="text-[17px] leading-none">＋</span> Add Stakeholder
      </button>

      <div className="mt-4 grid grid-cols-2 gap-3.5">
        <div className="flex flex-col gap-1.5">
          <label className="flex items-center gap-1.5 text-[11.5px] font-bold text-[#0f2525]">
            <span className="text-red-600">*</span> Your Name (Lead BA)
          </label>
          <div className="relative">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[15px]">🧑‍💼</span>
            <input
              type="text"
              value={leadBaName}
              onChange={(e) => onLeadBaNameChange(e.target.value)}
              placeholder="Your full name"
              className={`w-full rounded-lg border-2 bg-[#f5fefe] py-2.5 pl-10 pr-3.5 text-[13.5px] outline-none focus:border-teal-400 focus:bg-white ${
                errors.leadBa ? 'border-red-500 bg-red-50/80' : 'border-[#dceaea]'
              }`}
            />
          </div>
          {errors.leadBa && (
            <div className="text-[11px] text-red-600">⚠ Your name is required</div>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="flex items-center gap-1.5 text-[11.5px] font-bold text-[#0f2525]">
            Your Email{' '}
            <span className="rounded bg-[#f0f7f7] px-2 py-0.5 text-[9.5px] font-semibold text-[#9bb8b8]">
              optional
            </span>
          </label>
          <div className="relative">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[15px]">📧</span>
            <input
              type="email"
              value={leadBaEmail}
              onChange={(e) => onLeadBaEmailChange(e.target.value)}
              placeholder="your@company.com"
              className="w-full rounded-lg border-2 border-[#dceaea] bg-[#f5fefe] py-2.5 pl-10 pr-3.5 text-[13.5px] outline-none focus:border-teal-400 focus:bg-white"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="flex items-center gap-1.5 text-[11.5px] font-bold text-[#0f2525]">
            Session Language{' '}
            <span className="rounded bg-[#f0f7f7] px-2 py-0.5 text-[9.5px] font-semibold text-[#9bb8b8]">
              optional
            </span>
          </label>
          <div className="relative">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[15px]">🌐</span>
            <select
              value={sessionLanguage}
              onChange={(e) => onSessionLanguageChange(e.target.value)}
              className="w-full cursor-pointer rounded-lg border-2 border-[#dceaea] bg-[#f5fefe] bg-size-[10px_6px] bg-position-[right_13px_center] bg-no-repeat py-2.5 pl-10 pr-9 text-[13.5px] outline-none focus:border-teal-400 [background-image:url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'10\' height=\'6\' fill=\'none\'%3E%3Cpath d=\'M1 1l4 4 4-4\' stroke=\'%230f766e\' stroke-width=\'1.8\' stroke-linecap=\'round\' stroke-linejoin=\'round\'/%3E%3C/svg%3E')]"
            >
              <option>English</option>
              <option>Tamil</option>
              <option>Hindi</option>
              <option>Telugu</option>
              <option>Kannada</option>
              <option>Malayalam</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="flex items-center gap-1.5 text-[11.5px] font-bold text-[#0f2525]">
            AI Analyst Style{' '}
            <span className="rounded bg-[#f0f7f7] px-2 py-0.5 text-[9.5px] font-semibold text-[#9bb8b8]">
              optional
            </span>
          </label>
          <div className="relative">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[15px]">🤖</span>
            <select
              value={aiStyle}
              onChange={(e) => onAiStyleChange(e.target.value)}
              className="w-full cursor-pointer rounded-lg border-2 border-[#dceaea] bg-[#f5fefe] bg-size-[10px_6px] bg-position-[right_13px_center] bg-no-repeat py-2.5 pl-10 pr-9 text-[13.5px] outline-none focus:border-teal-400 [background-image:url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'10\' height=\'6\' fill=\'none\'%3E%3Cpath d=\'M1 1l4 4 4-4\' stroke=\'%230f766e\' stroke-width=\'1.8\' stroke-linecap=\'round\' stroke-linejoin=\'round\'/%3E%3C/svg%3E')]"
            >
              <option>Professional &amp; Formal</option>
              <option>Friendly &amp; Conversational</option>
              <option>Technical &amp; Detailed</option>
              <option>Concise &amp; Fast-paced</option>
            </select>
          </div>
        </div>

        <div className="col-span-2 flex flex-col gap-1.5">
          <label className="flex items-center gap-1.5 text-[11.5px] font-bold text-[#0f2525]">
            Pre-session Notes{' '}
            <span className="rounded bg-[#f0f7f7] px-2 py-0.5 text-[9.5px] font-semibold text-[#9bb8b8]">
              optional
            </span>
          </label>
          <textarea
            value={preSessionNotes}
            onChange={(e) => onPreSessionNotesChange(e.target.value)}
            placeholder="Anything the AI should know before starting? e.g. 'Client had a failed attempt 2 years ago due to scope creep' or 'Key concern is HIPAA compliance and data privacy'."
            className="min-h-16.5 w-full resize-y rounded-lg border-2 border-[#dceaea] bg-[#f5fefe] px-3.5 py-2.5 text-[13.5px] outline-none focus:border-teal-400 focus:bg-white"
          />
        </div>
      </div>

      <div className="mt-4 rounded-2xl border-2 border-teal-700/10 bg-linear-to-br from-teal-50 to-teal-100/30 p-5">
        <div className="mb-3 text-[10px] font-extrabold uppercase tracking-widest text-teal-700">
          📋 Session Summary
        </div>
        <div className="grid grid-cols-2 gap-2.5">
          <div>
            <div className="text-[9.5px] font-bold uppercase tracking-wide text-[#4d6b6b]">
              Client
            </div>
            <div className="truncate text-[13px] font-bold text-[#0f2525]">
              {clientName || '—'}
            </div>
          </div>
          <div>
            <div className="text-[9.5px] font-bold uppercase tracking-wide text-[#4d6b6b]">
              Project
            </div>
            <div className="truncate text-[13px] font-bold text-[#0f2525]">
              {projectName || '—'}
            </div>
          </div>
          <div>
            <div className="text-[9.5px] font-bold uppercase tracking-wide text-[#4d6b6b]">
              Domain
            </div>
            <div className="truncate text-[13px] font-bold text-[#0f2525]">
              {domain || '—'}
            </div>
          </div>
          <div>
            <div className="text-[9.5px] font-bold uppercase tracking-wide text-[#4d6b6b]">
              Timeline
            </div>
            <div className="truncate text-[13px] font-bold text-[#0f2525]">
              {timeline || '—'}
            </div>
          </div>
          <div>
            <div className="text-[9.5px] font-bold uppercase tracking-wide text-[#4d6b6b]">
              Type
            </div>
            <div className="truncate text-[13px] font-bold text-[#0f2525]">
              {projectTypeLabel}
            </div>
          </div>
          <div>
            <div className="text-[9.5px] font-bold uppercase tracking-wide text-[#4d6b6b]">
              Stakeholders
            </div>
            <div className="truncate text-[13px] font-bold text-[#0f2525]">
              {summaryStakeholders}
            </div>
          </div>
        </div>
      </div>

      {launchError && (
        <div className="flex items-center gap-2 rounded-lg border-2 border-red-500/30 bg-red-50/90 px-3.5 py-2.5 text-[12px] text-red-700">
          ⚠ {launchError}
        </div>
      )}

      <div className="mt-auto flex items-center justify-between border-t border-[#eef4f4] pt-6">
        <button
          type="button"
          onClick={onBack}
          disabled={isLaunching}
          className="flex items-center gap-2 rounded-lg border-2 border-[#dceaea] bg-white px-5 py-2.5 text-[13px] font-semibold text-[#4d6b6b] transition-colors hover:border-teal-400 hover:bg-teal-50 hover:text-teal-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          ← Back
        </button>
        <button
          type="button"
          onClick={onLaunch}
          disabled={isLaunching}
          className="flex items-center gap-2 rounded-xl bg-linear-to-br from-[#061414] to-teal-700 px-6 py-3 font-['Syne',sans-serif] text-sm font-bold text-white shadow-[0_6px_22px_rgba(6,20,20,.4)] transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(6,20,20,.55)] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          {isLaunching ? 'Launching...' : '✨ Launch AI Session'}
        </button>
      </div>
    </div>
  );
};
