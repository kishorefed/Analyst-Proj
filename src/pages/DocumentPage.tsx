// import React from 'react'
import Sidebar from "../components/Sidebar";

const DocumentPage = () => {
  return (
    <>
      <div className="bg-animation">
        <div
          className="particle"
          style={{ left: '10%', width: 60, height: 60, animationDelay: '0s' }}
        ></div>
        <div
          className="particle"
          style={{ left: '30%', width: 40, height: 40, animationDelay: '2s' }}
        ></div>
        <div
          className="particle"
          style={{ left: '50%', width: 80, height: 80, animationDelay: '4s' }}
        ></div>
        <div
          className="particle"
          style={{ left: '70%', width: 50, height: 50, animationDelay: '6s' }}
        ></div>
        <div
          className="particle"
          style={{ left: '90%', width: 70, height: 70, animationDelay: '8s' }}
        ></div>
      </div>

      <div className="relative z-10 flex min-h-screen w-full items-center justify-center p-6">
        <div className="flex h-[900px] w-full max-w-[1600px] overflow-hidden rounded-3xl bg-white/95 shadow-[0_50px_100px_rgba(0,0,0,0.3)] ring-1 ring-white/50 backdrop-blur-2xl">
        {/* Reusable Sidebar */}
        <Sidebar />

        {/* Main content layout aligned with other pages */}
        <div className="flex flex-1 flex-col bg-[#fafbfc]">
          <div className="flex items-center justify-between border-b border-teal-900/10 bg-linear-to-br from-white to-teal-50 px-10 py-6 shadow-sm">
            <div className="space-y-1">
              <h1 className="bg-linear-to-r from-teal-700 to-teal-500 bg-clip-text text-[32px] font-extrabold text-transparent">
                Document Center
              </h1>
              <p className="text-[14px] font-medium text-slate-500">
                All project deliverables, proposals, and documentation in one place
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 rounded-xl border-2 border-teal-100 bg-white px-5 py-2.5 text-[13px] font-semibold text-teal-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-teal-200 hover:bg-teal-50 hover:shadow-md">
                <span>📤</span>
                Share All
              </button>
              <button className="flex items-center gap-2 rounded-xl bg-linear-to-r from-teal-700 to-teal-500 px-5 py-2.5 text-[13px] font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg">
                <span>⚡</span>
                Generate New
              </button>
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-linear-to-br from-indigo-400 to-purple-500 text-[14px] font-bold text-white shadow-md">
                KK
              </div>
            </div>
          </div>

          {/* Tailwind-styled documents area */}
          <div className="flex-1 overflow-y-auto px-10 py-6 bg-linear-to-br from-emerald-50/40 via-white to-violet-50/40">
            {/* Stats bar */}
            <div className="grid grid-cols-4 gap-5 mb-6">
              <div className="flex items-center gap-4 rounded-2xl border border-teal-900/10 bg-linear-to-br from-white to-emerald-50/70 p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-br from-blue-100 to-blue-200 text-2xl">
                  📄
                </div>
                <div className="flex-1">
                  <div className="text-xs font-semibold text-slate-500">Total Documents</div>
                  <div className="bg-linear-to-br from-teal-700 to-teal-500 bg-clip-text text-2xl font-extrabold text-transparent">
                    12
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-teal-900/10 bg-linear-to-br from-white to-emerald-50/70 p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-br from-emerald-100 to-emerald-200 text-2xl">
                  ✓
                </div>
                <div className="flex-1">
                  <div className="text-xs font-semibold text-slate-500">Ready to Share</div>
                  <div className="bg-linear-to-br from-teal-700 to-teal-500 bg-clip-text text-2xl font-extrabold text-transparent">
                    9
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-teal-900/10 bg-linear-to-br from-white to-emerald-50/70 p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-br from-violet-100 to-violet-200 text-2xl">
                  📊
                </div>
                <div className="flex-1">
                  <div className="text-xs font-semibold text-slate-500">Total Pages</div>
                  <div className="bg-linear-to-br from-teal-700 to-teal-500 bg-clip-text text-2xl font-extrabold text-transparent">
                    248
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-teal-900/10 bg-linear-to-br from-white to-emerald-50/70 p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-br from-amber-100 to-amber-200 text-2xl">
                  📥
                </div>
                <div className="flex-1">
                  <div className="text-xs font-semibold text-slate-500">Downloads</div>
                  <div className="bg-linear-to-br from-teal-700 to-teal-500 bg-clip-text text-2xl font-extrabold text-transparent">
                    34
                  </div>
                </div>
              </div>
            </div>

            {/* Category tabs */}
            <div className="mb-6">
              <div className="mb-5 flex gap-5 border-b-2 border-slate-200">
                <button className="border-b-2 border-teal-500 pb-3 text-sm font-semibold text-teal-700 transition">
                  All Documents (12)
                </button>
                <button className="pb-3 text-sm font-semibold text-slate-500 transition hover:text-teal-700">
                  Proposals (3)
                </button>
                <button className="pb-3 text-sm font-semibold text-slate-500 transition hover:text-teal-700">
                  Technical Specs (4)
                </button>
                <button className="pb-3 text-sm font-semibold text-slate-500 transition hover:text-teal-700">
                  User Stories (2)
                </button>
                <button className="pb-3 text-sm font-semibold text-slate-500 transition hover:text-teal-700">
                  Diagrams (3)
                </button>
              </div>

              {/* Documents grid */}
              <div className="mb-6 grid grid-cols-3 gap-6">
                {/* Card 1 */}
                <div className="cursor-pointer overflow-hidden rounded-2xl border border-teal-900/10 bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative flex h-48 items-center justify-center bg-linear-to-br from-emerald-50 to-sky-100 text-6xl">
                    📄
                    <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-linear(0deg,rgba(15,118,110,0.03)_0px,rgba(15,118,110,0.03)_1px,transparent_1px,transparent_20px)]" />
                  </div>
                  <div className="space-y-3 px-6 py-5">
                    <div className="flex items-start justify-between">
                      <span className="rounded-md bg-slate-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-slate-500">
                        Proposal
                      </span>
                      <span className="rounded-md bg-emerald-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-emerald-800">
                        Ready
                      </span>
                    </div>
                    <div className="text-sm font-semibold text-slate-800">
                      Healthcare App - Project Proposal
                    </div>
                    <div className="flex gap-4 text-xs text-slate-500">
                      <span>📄 25 pages</span>
                      <span>📅 Feb 11, 2026</span>
                    </div>
                    <div className="text-xs text-slate-500">
                      Executive summary, business case, ROI analysis, and project timeline.
                    </div>
                    <div className="flex gap-2 pt-1">
                      <button className="flex flex-1 items-center justify-center gap-1 rounded-lg bg-linear-to-br from-teal-700 to-teal-500 px-2 py-2 text-xs font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg">
                        <span>👁️</span> Preview
                      </button>
                      <button className="flex flex-1 items-center justify-center gap-1 rounded-lg border-2 border-teal-100 bg-white px-2 py-2 text-xs font-semibold text-teal-700 transition hover:bg-teal-50">
                        <span>📥</span> Download
                      </button>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="cursor-pointer overflow-hidden rounded-2xl border border-teal-900/10 bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative flex h-48 items-center justify-center bg-linear-to-br from-rose-100 to-rose-200 text-6xl">
                    📕
                    <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-linear(0deg,rgba(15,118,110,0.03)_0px,rgba(15,118,110,0.03)_1px,transparent_1px,transparent_20px)]" />
                  </div>
                  <div className="space-y-3 px-6 py-5">
                    <div className="flex items-start justify-between">
                      <span className="rounded-md bg-slate-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-slate-500">
                        BRD
                      </span>
                      <span className="rounded-md bg-emerald-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-emerald-800">
                        Ready
                      </span>
                    </div>
                    <div className="text-sm font-semibold text-slate-800">
                      Business Requirements Document
                    </div>
                    <div className="flex gap-4 text-xs text-slate-500">
                      <span>📄 45 pages</span>
                      <span>📅 Feb 11, 2026</span>
                    </div>
                    <div className="text-xs text-slate-500">
                      Complete business requirements, objectives, scope, and success criteria.
                    </div>
                    <div className="flex gap-2 pt-1">
                      <button className="flex flex-1 items-center justify-center gap-1 rounded-lg bg-linear-to-br from-teal-700 to-teal-500 px-2 py-2 text-xs font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg">
                        <span>👁️</span> Preview
                      </button>
                      <button className="flex flex-1 items-center justify-center gap-1 rounded-lg border-2 border-teal-100 bg-white px-2 py-2 text-xs font-semibold text-teal-700 transition hover:bg-teal-50">
                        <span>📥</span> Download
                      </button>
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="cursor-pointer overflow-hidden rounded-2xl border border-teal-900/10 bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative flex h-48 items-center justify-center bg-linear-to-br from-emerald-100 to-emerald-200 text-6xl">
                    📗
                    <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-linear(0deg,rgba(15,118,110,0.03)_0px,rgba(15,118,110,0.03)_1px,transparent_1px,transparent_20px)]" />
                  </div>
                  <div className="space-y-3 px-6 py-5">
                    <div className="flex items-start justify-between">
                      <span className="rounded-md bg-slate-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-slate-500">
                        SRS
                      </span>
                      <span className="rounded-md bg-emerald-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-emerald-800">
                        Ready
                      </span>
                    </div>
                    <div className="text-sm font-semibold text-slate-800">
                      Software Requirements Specification
                    </div>
                    <div className="flex gap-4 text-xs text-slate-500">
                      <span>📄 68 pages</span>
                      <span>📅 Feb 11, 2026</span>
                    </div>
                    <div className="text-xs text-slate-500">
                      Technical specifications, functional &amp; non-functional requirements.
                    </div>
                    <div className="flex gap-2 pt-1">
                      <button className="flex flex-1 items-center justify-center gap-1 rounded-lg bg-linear-to-br from-teal-700 to-teal-500 px-2 py-2 text-xs font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg">
                        <span>👁️</span> Preview
                      </button>
                      <button className="flex flex-1 items-center justify-center gap-1 rounded-lg border-2 border-teal-100 bg-white px-2 py-2 text-xs font-semibold text-teal-700 transition hover:bg-teal-50">
                        <span>📥</span> Download
                      </button>
                    </div>
                  </div>
                </div>

                {/* Card 4 */}
                <div className="cursor-pointer overflow-hidden rounded-2xl border border-teal-900/10 bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative flex h-48 items-center justify-center bg-linear-to-br from-emerald-100 to-emerald-200 text-6xl">
                    📊
                    <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-linear(0deg,rgba(15,118,110,0.03)_0px,rgba(15,118,110,0.03)_1px,transparent_1px,transparent_20px)]" />
                  </div>
                  <div className="space-y-3 px-6 py-5">
                    <div className="flex items-start justify-between">
                      <span className="rounded-md bg-slate-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-slate-500">
                        User Stories
                      </span>
                      <span className="rounded-md bg-emerald-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-emerald-800">
                        Ready
                      </span>
                    </div>
                    <div className="text-sm font-semibold text-slate-800">
                      User Stories &amp; Acceptance Criteria
                    </div>
                    <div className="flex gap-4 text-xs text-slate-500">
                      <span>📊 127 stories</span>
                      <span>📅 Feb 11, 2026</span>
                    </div>
                    <div className="text-xs text-slate-500">
                      All 127 user stories with acceptance criteria and story points.
                    </div>
                    <div className="flex gap-2 pt-1">
                      <button className="flex flex-1 items-center justify-center gap-1 rounded-lg bg-linear-to-br from-teal-700 to-teal-500 px-2 py-2 text-xs font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg">
                        <span>👁️</span> Preview
                      </button>
                      <button className="flex flex-1 items-center justify-center gap-1 rounded-lg border-2 border-teal-100 bg-white px-2 py-2 text-xs font-semibold text-teal-700 transition hover:bg-teal-50">
                        <span>📥</span> Download
                      </button>
                    </div>
                  </div>
                </div>

                {/* Card 5 */}
                <div className="cursor-pointer overflow-hidden rounded-2xl border border-teal-900/10 bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative flex h-48 items-center justify-center bg-linear-to-br from-emerald-100 to-emerald-200 text-6xl">
                    🔗
                    <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-linear(0deg,rgba(15,118,110,0.03)_0px,rgba(15,118,110,0.03)_1px,transparent_1px,transparent_20px)]" />
                  </div>
                  <div className="space-y-3 px-6 py-5">
                    <div className="flex items-start justify-between">
                      <span className="rounded-md bg-slate-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-slate-500">
                        Matrix
                      </span>
                      <span className="rounded-md bg-emerald-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-emerald-800">
                        Ready
                      </span>
                    </div>
                    <div className="text-sm font-semibold text-slate-800">
                      Requirements Traceability Matrix
                    </div>
                    <div className="flex gap-4 text-xs text-slate-500">
                      <span>📊 127 items</span>
                      <span>📅 Feb 11, 2026</span>
                    </div>
                    <div className="text-xs text-slate-500">
                      Full traceability from requirements to user stories to test cases.
                    </div>
                    <div className="flex gap-2 pt-1">
                      <button className="flex flex-1 items-center justify-center gap-1 rounded-lg bg-linear-to-br from-teal-700 to-teal-500 px-2 py-2 text-xs font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg">
                        <span>👁️</span> Preview
                      </button>
                      <button className="flex flex-1 items-center justify-center gap-1 rounded-lg border-2 border-teal-100 bg-white px-2 py-2 text-xs font-semibold text-teal-700 transition hover:bg-teal-50">
                        <span>📥</span> Download
                      </button>
                    </div>
                  </div>
                </div>

                {/* Card 6 */}
                <div className="cursor-pointer overflow-hidden rounded-2xl border border-teal-900/10 bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative flex h-48 items-center justify-center bg-linear-to-br from-sky-100 to-sky-200 text-6xl">
                    🏗️
                    <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-linear(0deg,rgba(15,118,110,0.03)_0px,rgba(15,118,110,0.03)_1px,transparent_1px,transparent_20px)]" />
                  </div>
                  <div className="space-y-3 px-6 py-5">
                    <div className="flex items-start justify-between">
                      <span className="rounded-md bg-slate-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-slate-500">
                        Technical
                      </span>
                      <span className="rounded-md bg-emerald-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-emerald-800">
                        Ready
                      </span>
                    </div>
                    <div className="text-sm font-semibold text-slate-800">
                      System Architecture Document
                    </div>
                    <div className="flex gap-4 text-xs text-slate-500">
                      <span>📄 32 pages</span>
                      <span>📅 Feb 11, 2026</span>
                    </div>
                    <div className="text-xs text-slate-500">
                      High-level and detailed architecture, technology stack, infrastructure.
                    </div>
                    <div className="flex gap-2 pt-1">
                      <button className="flex flex-1 items-center justify-center gap-1 rounded-lg bg-linear-to-br from-teal-700 to-teal-500 px-2 py-2 text-xs font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg">
                        <span>👁️</span> Preview
                      </button>
                      <button className="flex flex-1 items-center justify-center gap-1 rounded-lg border-2 border-teal-100 bg-white px-2 py-2 text-xs font-semibold text-teal-700 transition hover:bg-teal-50">
                        <span>📥</span> Download
                      </button>
                    </div>
                  </div>
                </div>

                {/* Card 7 */}
                <div className="cursor-pointer overflow-hidden rounded-2xl border border-teal-900/10 bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative flex h-48 items-center justify-center bg-linear-to-br from-sky-100 to-sky-200 text-6xl">
                    🧪
                    <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-linear(0deg,rgba(15,118,110,0.03)_0px,rgba(15,118,110,0.03)_1px,transparent_1px,transparent_20px)]" />
                  </div>
                  <div className="space-y-3 px-6 py-5">
                    <div className="flex items-start justify-between">
                      <span className="rounded-md bg-slate-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-slate-500">
                        Testing
                      </span>
                      <span className="rounded-md bg-amber-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-amber-800">
                        Draft
                      </span>
                    </div>
                    <div className="text-sm font-semibold text-slate-800">
                      Quality Assurance Test Plan
                    </div>
                    <div className="flex gap-4 text-xs text-slate-500">
                      <span>📄 28 pages</span>
                      <span>📅 Feb 11, 2026</span>
                    </div>
                    <div className="text-xs text-slate-500">
                      Test strategy, test cases, acceptance testing criteria.
                    </div>
                    <div className="flex gap-2 pt-1">
                      <button className="flex flex-1 items-center justify-center gap-1 rounded-lg bg-linear-to-br from-teal-700 to-teal-500 px-2 py-2 text-xs font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg">
                        <span>👁️</span> Preview
                      </button>
                      <button className="flex flex-1 items-center justify-center gap-1 rounded-lg border-2 border-teal-100 bg-white px-2 py-2 text-xs font-semibold text-teal-700 transition hover:bg-teal-50">
                        <span>📥</span> Download
                      </button>
                    </div>
                  </div>
                </div>

                {/* Card 8 */}
                <div className="cursor-pointer overflow-hidden rounded-2xl border border-teal-900/10 bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative flex h-48 items-center justify-center bg-linear-to-br from-rose-100 to-rose-200 text-6xl">
                    ⚠️
                    <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-linear(0deg,rgba(15,118,110,0.03)_0px,rgba(15,118,110,0.03)_1px,transparent_1px,transparent_20px)]" />
                  </div>
                  <div className="space-y-3 px-6 py-5">
                    <div className="flex items-start justify-between">
                      <span className="rounded-md bg-slate-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-slate-500">
                        Risk
                      </span>
                      <span className="rounded-md bg-emerald-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-emerald-800">
                        Ready
                      </span>
                    </div>
                    <div className="text-sm font-semibold text-slate-800">
                      Project Risk Assessment &amp; Mitigation
                    </div>
                    <div className="flex gap-4 text-xs text-slate-500">
                      <span>📄 15 pages</span>
                      <span>📅 Feb 11, 2026</span>
                    </div>
                    <div className="text-xs text-slate-500">
                      Identified risks, impact analysis, mitigation strategies.
                    </div>
                    <div className="flex gap-2 pt-1">
                      <button className="flex flex-1 items-center justify-center gap-1 rounded-lg bg-linear-to-br from-teal-700 to-teal-500 px-2 py-2 text-xs font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg">
                        <span>👁️</span> Preview
                      </button>
                      <button className="flex flex-1 items-center justify-center gap-1 rounded-lg border-2 border-teal-100 bg-white px-2 py-2 text-xs font-semibold text-teal-700 transition hover:bg-teal-50">
                        <span>📥</span> Download
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick actions + activity */}
            <div className="flex flex-col gap-6">
              <div className="rounded-2xl border border-teal-900/10 bg-white p-7 shadow-md">
                <div className="mb-5 bg-linear-to-br from-teal-700 to-teal-500 bg-clip-text text-lg font-extrabold text-transparent">
                  Quick Actions
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex cursor-pointer items-center gap-4 rounded-xl border-2 border-slate-200 bg-slate-50 p-5 transition hover:-translate-x-1 hover:border-teal-500 hover:bg-emerald-50">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-emerald-100 to-emerald-200 text-2xl">
                      📧
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-slate-800">
                        Email Package to Client
                      </div>
                      <div className="text-xs text-slate-500">Send all documents as ZIP</div>
                    </div>
                  </div>

                  <div className="flex cursor-pointer items-center gap-4 rounded-xl border-2 border-slate-200 bg-slate-50 p-5 transition hover:-translate-x-1 hover:border-teal-500 hover:bg-emerald-50">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-sky-100 to-sky-200 text-2xl">
                      ⚡
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-slate-800">Export to Jira</div>
                      <div className="text-xs text-slate-500">Create 127 tickets automatically</div>
                    </div>
                  </div>

                  <div className="flex cursor-pointer items-center gap-4 rounded-xl border-2 border-slate-200 bg-slate-50 p-5 transition hover:-translate-x-1 hover:border-teal-500 hover:bg-emerald-50">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-violet-100 to-violet-200 text-2xl">
                      🔄
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-slate-800">Sync to Confluence</div>
                      <div className="text-xs text-slate-500">Publish all documentation</div>
                    </div>
                  </div>

                  <div className="flex cursor-pointer items-center gap-4 rounded-xl border-2 border-slate-200 bg-slate-50 p-5 transition hover:-translate-x-1 hover:border-teal-500 hover:bg-emerald-50">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-emerald-100 to-emerald-200 text-2xl">
                      📊
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-slate-800">Generate Report</div>
                      <div className="text-xs text-slate-500">Executive summary PDF</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-teal-900/10 bg-white p-7 shadow-md">
                <div className="mb-5 bg-linear-to-br from-teal-700 to-teal-500 bg-clip-text text-lg font-extrabold text-transparent">
                  Recent Activity
                </div>
                <div className="divide-y divide-slate-100">
                  <div className="flex items-center gap-4 py-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-linear-to-br from-teal-500 to-emerald-400 text-base shadow-md">
                      📄
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-slate-800">
                        BRD Updated to v2.1
                      </div>
                      <div className="text-xs text-slate-500">
                        Sarah Johnson • 2 hours ago • Added stakeholder feedback
                      </div>
                    </div>
                    <button className="rounded-lg border-2 border-teal-100 bg-white px-3 py-1.5 text-xs font-semibold text-teal-700 transition hover:bg-teal-50">
                      View Changes
                    </button>
                  </div>

                  <div className="flex items-center gap-4 py-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-linear-to-br from-teal-500 to-emerald-400 text-base shadow-md">
                      ✓
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-slate-800">
                        SRS Approved by Tech Lead
                      </div>
                      <div className="text-xs text-slate-500">
                        Mike Chen • 4 hours ago • Ready for development
                      </div>
                    </div>
                    <button className="rounded-lg border-2 border-teal-100 bg-white px-3 py-1.5 text-xs font-semibold text-teal-700 transition hover:bg-teal-50">
                      View Document
                    </button>
                  </div>

                  <div className="flex items-center gap-4 py-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-linear-to-br from-teal-500 to-emerald-400 text-base shadow-md">
                      📊
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-slate-800">
                        User Stories Exported to Jira
                      </div>
                      <div className="text-xs text-slate-500">
                        Emily Davis • Yesterday • 127 tickets created
                      </div>
                    </div>
                    <button className="rounded-lg border-2 border-teal-100 bg-white px-3 py-1.5 text-xs font-semibold text-teal-700 transition hover:bg-teal-50">
                      View in Jira
                    </button>
                  </div>

                  <div className="flex items-center gap-4 py-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-teal-500 to-emerald-400 text-base shadow-md">
                      📧
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-slate-800">
                        Proposal Sent to Client
                      </div>
                      <div className="text-xs text-slate-500">
                        John Smith • 2 days ago • ABC Hospital stakeholders
                      </div>
                    </div>
                    <button className="rounded-lg border-2 border-teal-100 bg-white px-3 py-1.5 text-xs font-semibold text-teal-700 transition hover:bg-teal-50">
                      Resend
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default DocumentPage