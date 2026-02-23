import React from "react";
import {
  DOMAINS,
  TIMELINES,
  PROJECT_TYPES,
  BUDGET_OPTIONS,
  ENGAGEMENT_OPTIONS,
  TYPE_ICONS,
} from "./constants";

interface StepProjectSetupProps {
  clientName: string;
  projectName: string;
  domain: string;
  projectType: string;
  budget: string;
  timeline: string;
  engagement: string;
  priority: string;
  brief: string;
  errors: { client?: boolean; project?: boolean; type?: boolean };
  onClientNameChange: (v: string) => void;
  onProjectNameChange: (v: string) => void;
  onDomainChange: (v: string) => void;
  onProjectTypeChange: (v: string) => void;
  onBudgetChange: (v: string) => void;
  onTimelineChange: (v: string) => void;
  onEngagementChange: (v: string) => void;
  onPriorityChange: (v: string) => void;
  onBriefChange: (v: string) => void;
  onBack: () => void;
  onNext: () => void;
  projectError?: string | null;
  isCreatingProject?: boolean;
}

const inputBase =
  "w-full rounded-lg border-2 bg-[#f5fefe] px-3.5 py-2.5 pl-10 text-[13.5px] text-[#081212] outline-none transition-[border-color,box-shadow,background] focus:border-teal-400 focus:bg-white focus:shadow-[0_0_0_4px_rgba(15,118,110,.09)]";
const inputError = "border-red-500 bg-red-50/80";
const selectBase =
  "w-full cursor-pointer rounded-lg border-2 border-[#dceaea] bg-[#f5fefe] bg-[length:10px_6px] bg-[right_13px_center] bg-no-repeat py-2.5 pl-10 pr-9 text-[13.5px] outline-none focus:border-teal-400 focus:bg-white focus:shadow-[0_0_0_4px_rgba(15,118,110,.09)] [background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' fill='none'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%230f766e' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\")]";

export const StepProjectSetup: React.FC<StepProjectSetupProps> = (props) => {
  const {
    clientName,
    projectName,
    domain,
    projectType,
    budget,
    timeline,
    engagement,
    priority,
    brief,
    errors,
    onClientNameChange,
    onProjectNameChange,
    onDomainChange,
    onProjectTypeChange,
    onBudgetChange,
    onTimelineChange,
    onEngagementChange,
    onPriorityChange,
    onBriefChange,
    onBack,
    onNext,
    projectError = null,
    isCreatingProject = false,
  } = props;

  return (
    <div className="flex flex-1 flex-col">
      <div className="mb-6">
        <h2 className="mb-1 font-['Syne',sans-serif] text-[26px] font-extrabold leading-tight text-[#081212]">
          Project Setup 📋
          <br />
          <em className="not-italic bg-linear-to-r from-teal-700 to-teal-400 bg-clip-text text-[26px] font-extrabold text-transparent">
            Tell us about the client
          </em>
        </h2>
        <p className="text-[13px] leading-relaxed text-[#4d6b6b]">
          Helps the AI tailor its questions to the right industry and context.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3.5">
        <div className="flex flex-col gap-1.5">
          <label className="flex items-center gap-1.5 text-[11.5px] font-bold text-[#0f2525]">
            <span className="text-red-600">*</span> Client / Company Name
          </label>
          <div className="relative">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[15px]">
              🏢
            </span>
            <input
              type="text"
              value={clientName}
              onChange={(e) => onClientNameChange(e.target.value)}
              placeholder="e.g. ABC Hospital Group"
              className={`${inputBase} ${
                errors.client ? inputError : "border-[#dceaea]"
              }`}
            />
          </div>
          {errors.client && (
            <div className="text-[11px] text-red-600">
              ⚠ Client name is required
            </div>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="flex items-center gap-1.5 text-[11.5px] font-bold text-[#0f2525]">
            <span className="text-red-600">*</span> Project Name
          </label>
          <div className="relative">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[15px]">
              📁
            </span>
            <input
              type="text"
              value={projectName}
              onChange={(e) => onProjectNameChange(e.target.value)}
              placeholder="e.g. Patient Booking App"
              className={`${inputBase} ${
                errors.project ? inputError : "border-[#dceaea]"
              }`}
            />
          </div>
          {errors.project && (
            <div className="text-[11px] text-red-600">
              ⚠ Project name is required
            </div>
          )}
        </div>

        <div className="col-span-2 flex flex-col gap-1.5">
          <label className="flex items-center gap-1.5 text-[11.5px] font-bold text-[#0f2525]">
            <span className="text-red-600">*</span> Industry / Domain
          </label>
          <div className="grid grid-cols-4 gap-2.5">
            {DOMAINS.map((d) => (
              <button
                key={d.value}
                type="button"
                onClick={() => onDomainChange(d.value)}
                className={`rounded-xl border-2 p-3 text-center transition-all hover:-translate-y-0.5 hover:border-teal-400 hover:bg-teal-50/50 ${
                  domain === d.value
                    ? "border-teal-700 bg-linear-to-br from-teal-50 to-teal-100/80 text-teal-700 shadow-[0_0_0_3px_rgba(15,118,110,.1)]"
                    : "border-[#dceaea] bg-[#f5fefe] text-[#1e3535]"
                }`}
              >
                <div className="text-[21px] leading-none">{d.icon}</div>
                <div className="mt-1 text-[11px] font-bold leading-tight">
                  {d.value}
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="flex items-center gap-1.5 text-[11.5px] font-bold text-[#0f2525]">
            <span className="text-red-600">*</span> Project Type
          </label>
          <div className="relative">
            <span className="absolute left-3.5 top-1/2 z-10 -translate-y-1/2 text-[15px]">
              {TYPE_ICONS[projectType] ?? "📱"}
            </span>
            <select
              value={projectType}
              onChange={(e) => onProjectTypeChange(e.target.value)}
              className={`${selectBase} ${errors.type ? inputError : ""}`}
            >
              {PROJECT_TYPES.map((opt) => (
                <option key={opt.value || "empty"} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
          {errors.type && (
            <div className="text-[11px] text-red-600">
              ⚠ Please select a project type
            </div>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="flex items-center gap-1.5 text-[11.5px] font-bold text-[#0f2525]">
            Budget Range{" "}
            <span className="rounded bg-[#f0f7f7] px-2 py-0.5 text-[9.5px] font-semibold text-[#9bb8b8]">
              optional
            </span>
          </label>
          <div className="relative">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[15px]">
              💵
            </span>
            <select
              value={budget}
              onChange={(e) => onBudgetChange(e.target.value)}
              className={selectBase}
            >
              {BUDGET_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="col-span-2 flex flex-col gap-1.5">
          <label className="flex items-center gap-1.5 text-[11.5px] font-bold text-[#0f2525]">
            <span className="text-red-600">*</span> Expected Timeline
          </label>
          <div className="flex flex-wrap gap-2">
            {TIMELINES.map((tl) => (
              <button
                key={tl}
                type="button"
                onClick={() => onTimelineChange(tl)}
                className={`rounded-full border-2 px-4 py-2 text-[12.5px] font-semibold transition-all ${
                  timeline === tl
                    ? "border-teal-700 bg-teal-700 text-white shadow-[0_4px_14px_rgba(15,118,110,.3)]"
                    : "border-[#dceaea] bg-[#f5fefe] text-[#4d6b6b] hover:border-teal-400 hover:text-teal-700"
                }`}
              >
                {tl}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="flex items-center gap-1.5 text-[11.5px] font-bold text-[#0f2525]">
            Engagement Type{" "}
            <span className="rounded bg-[#f0f7f7] px-2 py-0.5 text-[9.5px] font-semibold text-[#9bb8b8]">
              optional
            </span>
          </label>
          <div className="relative">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[15px]">
              📝
            </span>
            <select
              value={engagement}
              onChange={(e) => onEngagementChange(e.target.value)}
              className={selectBase}
            >
              {ENGAGEMENT_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="flex items-center gap-1.5 text-[11.5px] font-bold text-[#0f2525]">
            Priority Level{" "}
            <span className="rounded bg-[#f0f7f7] px-2 py-0.5 text-[9.5px] font-semibold text-[#9bb8b8]">
              optional
            </span>
          </label>
          <div className="relative">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[15px]">
              🎯
            </span>
            <select
              value={priority}
              onChange={(e) => onPriorityChange(e.target.value)}
              className={selectBase}
            >
              <option value="high">🔴 High — Critical delivery</option>
              <option value="medium">🟡 Medium — Standard</option>
              <option value="low">🟢 Low — Flexible</option>
            </select>
          </div>
        </div>

        <div className="col-span-2 flex flex-col gap-1.5">
          <label className="flex items-center gap-1.5 text-[11.5px] font-bold text-[#0f2525]">
            Project Brief{" "}
            <span className="rounded bg-[#f0f7f7] px-2 py-0.5 text-[9.5px] font-semibold text-[#9bb8b8]">
              optional
            </span>
          </label>
          <textarea
            value={brief}
            onChange={(e) => onBriefChange(e.target.value)}
            placeholder="Briefly describe what the client wants to build and the core business problem it solves (2–3 sentences). The AI will uncover the details through conversation."
            className="min-h-[78px] w-full resize-y rounded-lg border-2 border-[#dceaea] bg-[#f5fefe] px-3.5 py-2.5 text-[13.5px] leading-relaxed text-[#081212] outline-none focus:border-teal-400 focus:bg-white focus:shadow-[0_0_0_4px_rgba(15,118,110,.09)]"
          />
          <div className="text-[11px] text-[#9ab8b8]">
            💡 Used by the AI when crafting its very first question
          </div>
        </div>
      </div>

      {projectError && (
        <div className="flex items-center gap-2 rounded-lg border-2 border-red-500/30 bg-red-50/90 px-3.5 py-2.5 text-[12px] text-red-700">
          ⚠ {projectError}
        </div>
      )}

      <div className="mt-auto flex items-center justify-between border-t border-[#eef4f4] pt-6">
        <button
          type="button"
          onClick={onBack}
          disabled={isCreatingProject}
          className="flex items-center gap-2 rounded-lg border-2 border-[#dceaea] bg-white px-5 py-2.5 font-['DM_Sans',sans-serif] text-[13px] font-semibold text-[#4d6b6b] transition-colors hover:border-teal-400 hover:bg-teal-50 hover:text-teal-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          ← Back
        </button>
        <button
          type="button"
          onClick={onNext}
          disabled={isCreatingProject}
          className="flex items-center gap-2 rounded-xl bg-linear-to-br from-teal-700 to-teal-400 px-6 py-3 font-['Syne',sans-serif] text-sm font-bold text-white shadow-[0_6px_22px_rgba(15,118,110,.3)] transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(15,118,110,.42)] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          {isCreatingProject ? "Creating project..." : "Next: Stakeholders"}{" "}
          <span>→</span>
        </button>
      </div>
    </div>
  );
};
