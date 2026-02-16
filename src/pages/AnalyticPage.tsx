// import React from 'react'
import Sidebar from "../components/Sidebar";

const AnalyticPage = () => {
  return (
    <>
      <div className="bg-animation">
        <div
          className="particle"
          style={{ left: "10%", width: 60, height: 60, animationDelay: "0s" }}
        ></div>
        <div
          className="particle"
          style={{ left: "30%", width: 40, height: 40, animationDelay: "2s" }}
        ></div>
        <div
          className="particle"
          style={{ left: "50%", width: 80, height: 80, animationDelay: "4s" }}
        ></div>
        <div
          className="particle"
          style={{ left: "70%", width: 50, height: 50, animationDelay: "6s" }}
        ></div>
        <div
          className="particle"
          style={{ left: "90%", width: 70, height: 70, animationDelay: "8s" }}
        ></div>
      </div>

      <div className="relative z-10 flex min-h-screen w-full items-center justify-center p-6">
        <div className="flex h-225 w-full max-w-400 overflow-hidden rounded-3xl bg-white/95 shadow-[0_50px_100px_rgba(0,0,0,0.3)] ring-1 ring-white/50 backdrop-blur-2xl">
          {/* Reusable Sidebar */}
          <Sidebar />

          {/* Main Analytics Content */}
          <div className="flex flex-1 flex-col bg-[#fafbfc]">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-teal-900/10 bg-linear-to-br from-white to-teal-50 px-10 py-6 shadow-sm">
              <div className="space-y-1">
                <h1 className="bg-linear-to-r from-teal-700 to-teal-500 bg-clip-text text-[32px] font-extrabold text-transparent">
                  Analytics Dashboard
                </h1>
                <p className="text-[14px] font-medium text-slate-500">
                  Real-time insights and predictive analytics powered by AI
                </p>
              </div>
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 rounded-xl border-2 border-teal-100 bg-white px-5 py-2.5 text-[13px] font-semibold text-teal-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-teal-200 hover:bg-teal-50 hover:shadow-md">
                  <span>📥</span>
                  Export Report
                </button>
                <button className="flex items-center gap-2 rounded-xl bg-linear-to-r from-teal-700 to-teal-500 px-5 py-2.5 text-[13px] font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg">
                  <span>🤖</span>
                  AI Insights
                </button>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-linear-to-br from-indigo-400 to-purple-500 text-[14px] font-bold text-white shadow-md">
                  KK
                </div>
              </div>
            </div>

            {/* Analytics Body */}
            <div className="flex-1 overflow-y-auto bg-[radial-linear(circle_at_20%_50%,rgba(94,234,212,0.03)_0,transparent_50%),radial-linear(circle_at_80%_80%,rgba(167,139,250,0.03)_0,transparent_50%)] px-10 py-6">
              {/* Time range selector */}
              <div className="mb-6 flex gap-3">
                <button className="rounded-lg border-2 border-gray-200 bg-white px-6 py-2.5 text-[13px] font-semibold text-slate-600 transition-all hover:border-teal-500 hover:bg-teal-50 hover:text-teal-700">
                  Last 7 Days
                </button>
                <button className="rounded-lg border-0 bg-linear-to-r from-teal-700 to-teal-500 px-6 py-2.5 text-[13px] font-semibold text-white shadow-md">
                  Last 30 Days
                </button>
                <button className="rounded-lg border-2 border-gray-200 bg-white px-6 py-2.5 text-[13px] font-semibold text-slate-600 transition-all hover:border-teal-500 hover:bg-teal-50 hover:text-teal-700">
                  Last Quarter
                </button>
                <button className="rounded-lg border-2 border-gray-200 bg-white px-6 py-2.5 text-[13px] font-semibold text-slate-600 transition-all hover:border-teal-500 hover:bg-teal-50 hover:text-teal-700">
                  All Time
                </button>
              </div>

              {/* KPI cards */}
              <div className="mb-6 grid grid-cols-4 gap-5">
                <div className="relative overflow-hidden rounded-2xl border border-teal-900/10 bg-linear-to-br from-white to-teal-50 p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg">
                  <div className="mb-3 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-indigo-100 to-indigo-200 text-2xl">
                      📋
                    </div>
                    <div className="flex items-center gap-1 rounded-md bg-emerald-100 px-2.5 py-1 text-[11px] font-bold text-emerald-800">
                      <span>↑</span>
                      <span>+12%</span>
                    </div>
                  </div>
                  <div className="mb-1 bg-linear-to-r from-teal-700 to-teal-500 bg-clip-text text-[36px] font-extrabold text-transparent">
                    127
                  </div>
                  <div className="text-[13px] font-semibold text-slate-500">
                    Total Requirements
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-2xl border border-teal-900/10 bg-linear-to-br from-white to-emerald-50 p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg">
                  <div className="mb-3 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-emerald-100 to-emerald-200 text-2xl">
                      ✓
                    </div>
                    <div className="flex items-center gap-1 rounded-md bg-emerald-100 px-2.5 py-1 text-[11px] font-bold text-emerald-800">
                      <span>↑</span>
                      <span>+8%</span>
                    </div>
                  </div>
                  <div className="mb-1 bg-linear-to-r from-teal-700 to-teal-500 bg-clip-text text-[36px] font-extrabold text-transparent">
                    95
                  </div>
                  <div className="text-[13px] font-semibold text-slate-500">
                    Approved
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-2xl border border-amber-900/10 bg-linear-to-br from-white to-amber-50 p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg">
                  <div className="mb-3 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-amber-100 to-amber-200 text-2xl">
                      ⏱️
                    </div>
                    <div className="flex items-center gap-1 rounded-md bg-rose-100 px-2.5 py-1 text-[11px] font-bold text-rose-800">
                      <span>↓</span>
                      <span>-65%</span>
                    </div>
                  </div>
                  <div className="mb-1 bg-linear-to-r from-teal-700 to-teal-500 bg-clip-text text-[36px] font-extrabold text-transparent">
                    2.5h
                  </div>
                  <div className="text-[13px] font-semibold text-slate-500">
                    Avg Time per Project
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-2xl border border-violet-900/10 bg-linear-to-br from-white to-violet-50 p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg">
                  <div className="mb-3 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-violet-100 to-violet-200 text-2xl">
                      🎯
                    </div>
                    <div className="flex items-center gap-1 rounded-md bg-emerald-100 px-2.5 py-1 text-[11px] font-bold text-emerald-800">
                      <span>↑</span>
                      <span>+15%</span>
                    </div>
                  </div>
                  <div className="mb-1 bg-linear-to-r from-teal-700 to-teal-500 bg-clip-text text-[36px] font-extrabold text-transparent">
                    87%
                  </div>
                  <div className="text-[13px] font-semibold text-slate-500">
                    Quality Score
                  </div>
                </div>
              </div>

              {/* Charts grid */}
              <div className="mb-6 grid grid-cols-2 gap-6">
                {/* Requirements by Category */}
                <div className="rounded-2xl border border-teal-900/10 bg-white p-7 shadow-md">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="bg-linear-to-r from-teal-700 to-teal-500 bg-clip-text text-[18px] font-extrabold text-transparent">
                      Requirements by Category
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-32 text-[13px] font-semibold text-gray-800">
                        Functional
                      </div>
                      <div className="relative flex-1 h-8 overflow-hidden rounded-lg bg-slate-100">
                        <div className="flex h-full w-[70%] items-center justify-end rounded-lg bg-linear-to-r from-blue-500 to-blue-400 pr-3 text-[12px] font-bold text-white transition-[width] duration-1000">
                          45
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-32 text-[13px] font-semibold text-gray-800">
                        Non-Functional
                      </div>
                      <div className="relative flex-1 h-8 overflow-hidden rounded-lg bg-slate-100">
                        <div className="flex h-full w-[50%] items-center justify-end rounded-lg bg-linear-to-r from-teal-500 to-teal-300 pr-3 text-[12px] font-bold text-white transition-[width] duration-1000">
                          32
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-32 text-[13px] font-semibold text-gray-800">
                        Security
                      </div>
                      <div className="relative flex-1 h-8 overflow-hidden rounded-lg bg-slate-100">
                        <div className="flex h-full w-[48%] items-center justify-end rounded-lg bg-linear-to-r from-violet-500 to-violet-400 pr-3 text-[12px] font-bold text-white transition-[width] duration-1000">
                          28
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-32 text-[13px] font-semibold text-gray-800">
                        Performance
                      </div>
                      <div className="relative flex-1 h-8 overflow-hidden rounded-lg bg-slate-100">
                        <div className="flex h-full w-[34%] items-center justify-end rounded-lg bg-linear-to-r from-emerald-500 to-emerald-400 pr-3 text-[12px] font-bold text-white transition-[width] duration-1000">
                          22
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Priority Distribution */}
                <div className="flex items-center justify-center gap-10 rounded-2xl border border-teal-900/10 bg-white p-7 shadow-md">
                  <div className="relative bg-[conic-gradient(#ef4444_0deg_144deg,#f59e0b_144deg_252deg,#10b981_252deg_360deg)] w-64 h-64 rounded-full shadow-lg">
                    <div className="absolute left-1/2 top-1/2 flex h-30 w-30 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-white shadow-md">
                      <div className="bg-linear-to-r from-teal-700 to-teal-500 bg-clip-text text-[32px] font-extrabold text-transparent">
                        127
                      </div>
                      <div className="text-[11px] font-semibold text-slate-500">
                        Total
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <div
                        className="h-10 w-10 rounded-lg shadow-md"
                        style={{
                          background:
                            "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
                        }}
                      ></div>
                      <div className="flex-1">
                        <div className="text-[13px] font-semibold text-gray-900">
                          Must Have
                        </div>
                        <div className="text-[18px] font-extrabold text-teal-700">
                          50
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div
                        className="h-10 w-10 rounded-lg shadow-md"
                        style={{
                          background:
                            "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
                        }}
                      ></div>
                      <div className="flex-1">
                        <div className="text-[13px] font-semibold text-gray-900">
                          Should Have
                        </div>
                        <div className="text-[18px] font-extrabold text-teal-700">
                          45
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div
                        className="h-10 w-10 rounded-lg shadow-md"
                        style={{
                          background:
                            "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                        }}
                      ></div>
                      <div className="flex-1">
                        <div className="text-[13px] font-semibold text-gray-900">
                          Could Have
                        </div>
                        <div className="text-[18px] font-extrabold text-teal-700">
                          32
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Confidence Score Trend */}
                <div className="rounded-2xl border border-teal-900/10 bg-white p-7 shadow-md">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="bg-linear-to-r from-teal-700 to-teal-500 bg-clip-text text-[18px] font-extrabold text-transparent">
                      Confidence Score Trend
                    </div>
                    <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-600">
                      <div
                        className="h-2.5 w-2.5 rounded-full"
                        style={{ background: "#14b8a6" }}
                      ></div>
                      <span>Avg Confidence</span>
                    </div>
                  </div>
                  <div className="relative flex h-50 items-end gap-6 border-b border-slate-200 pb-5">
                    <div className="flex flex-1 flex-col items-center gap-3">
                      <div
                        className="relative w-full rounded-t-lg bg-linear-to-b from-teal-500 to-teal-300"
                        style={{ height: "60%" }}
                      >
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[12px] font-bold text-teal-700">
                          72%
                        </div>
                      </div>
                      <div className="text-[11px] font-semibold text-slate-500">
                        Week 1
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col items-center gap-3">
                      <div
                        className="relative w-full rounded-t-lg bg-linear-to-b from-teal-500 to-teal-300"
                        style={{ height: "75%" }}
                      >
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[12px] font-bold text-teal-700">
                          78%
                        </div>
                      </div>
                      <div className="text-[11px] font-semibold text-slate-500">
                        Week 2
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col items-center gap-3">
                      <div
                        className="relative w-full rounded-t-lg bg-linear-to-b from-teal-500 to-teal-300"
                        style={{ height: "85%" }}
                      >
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[12px] font-bold text-teal-700">
                          82%
                        </div>
                      </div>
                      <div className="text-[11px] font-semibold text-slate-500">
                        Week 3
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col items-center gap-3">
                      <div
                        className="relative w-full rounded-t-lg bg-linear-to-b from-teal-500 to-teal-300"
                        style={{ height: "95%" }}
                      >
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[12px] font-bold text-teal-700">
                          87%
                        </div>
                      </div>
                      <div className="text-[11px] font-semibold text-slate-500">
                        Week 4
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Timeline */}
                <div className="rounded-2xl border border-teal-900/10 bg-white p-7 shadow-md">
                  <div className="mb-6 bg-linear-to-r from-teal-700 to-teal-500 bg-clip-text text-[18px] font-extrabold text-transparent">
                    Project Timeline
                  </div>
                  <div className="relative pl-10">
                    <div className="absolute bottom-0 left-4 top-0 w-[2px] bg-linear-to-b from-teal-500 to-slate-200"></div>

                    <div className="relative mb-8">
                      <div className="absolute -left-8 top-1 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-linear-to-br from-emerald-500 to-emerald-400 text-[18px] text-white shadow-md">
                        ✓
                      </div>
                      <div className="rounded-xl border border-slate-200 bg-linear-to-br from-slate-50 to-teal-50 p-4">
                        <div className="mb-1 text-[16px] font-bold text-gray-900">
                          Discovery Phase
                        </div>
                        <div className="mb-2 text-[12px] text-slate-500">
                          Jan 15 - Jan 22, 2026
                        </div>
                        <span className="inline-block rounded-md bg-emerald-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-emerald-800">
                          Completed
                        </span>
                      </div>
                    </div>

                    <div className="relative mb-8">
                      <div className="absolute -left-8 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-linear-to-br from-emerald-500 to-emerald-400 text-[18px] text-white shadow-md">
                        ✓
                      </div>
                      <div className="rounded-xl border border-slate-200 bg-linear-to-br from-slate-50 to-teal-50 p-4">
                        <div className="mb-1 text-[16px] font-bold text-gray-900">
                          Exploration
                        </div>
                        <div className="mb-2 text-[12px] text-slate-500">
                          Jan 23 - Feb 5, 2026
                        </div>
                        <span className="inline-block rounded-md bg-emerald-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-emerald-800">
                          Completed
                        </span>
                      </div>
                    </div>

                    <div className="relative mb-8">
                      <div className="absolute -left-8 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-linear-to-br from-amber-400 to-amber-500 text-[18px] text-white shadow-md">
                        ⚡
                      </div>
                      <div className="rounded-xl border border-slate-200 bg-linear-to-br from-slate-50 to-amber-50 p-4">
                        <div className="mb-1 text-[16px] font-bold text-gray-900">
                          Clarification
                        </div>
                        <div className="mb-2 text-[12px] text-slate-500">
                          Feb 6 - Feb 12, 2026
                        </div>
                        <span className="inline-block rounded-md bg-amber-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-amber-800">
                          In Progress
                        </span>
                      </div>
                    </div>

                    <div className="relative">
                      <div className="absolute -left-8 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 text-[18px] text-slate-600 shadow-md">
                        ⏳
                      </div>
                      <div className="rounded-xl border border-slate-200 bg-linear-to-br from-slate-50 to-slate-100 p-4">
                        <div className="mb-1 text-[16px] font-bold text-gray-900">
                          Validation
                        </div>
                        <div className="mb-2 text-[12px] text-slate-500">
                          Feb 13 - Feb 20, 2026
                        </div>
                        <span className="inline-block rounded-md bg-slate-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-slate-700">
                          Upcoming
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Insights grid */}
              <div className="grid grid-cols-3 gap-5">
                <div className="rounded-2xl border border-indigo-200 bg-linear-to-br from-white to-indigo-50 p-6 shadow-md">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="text-[24px]">💡</span>
                    <div className="text-[14px] font-extrabold uppercase tracking-wide text-indigo-900">
                      Quality Insight
                    </div>
                  </div>
                  <div className="text-[13px] font-medium leading-relaxed text-indigo-900">
                    Your project has strong functional requirements. Consider
                    adding performance metrics (response time, concurrent users)
                    for completeness.
                  </div>
                </div>

                <div className="rounded-2xl border border-indigo-200 bg-linear-to-br from-white to-indigo-50 p-6 shadow-md">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="text-[24px]">🎯</span>
                    <div className="text-[14px] font-extrabold uppercase tracking-wide text-indigo-900">
                      Velocity Forecast
                    </div>
                  </div>
                  <div className="text-[13px] font-medium leading-relaxed text-indigo-900">
                    Based on current pace, you'll complete requirement gathering
                    3 days ahead of schedule. Confidence trending upward at 5%
                    per week.
                  </div>
                </div>

                <div className="rounded-2xl border border-indigo-200 bg-linear-to-br from-white to-indigo-50 p-6 shadow-md">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="text-[24px]">⚠️</span>
                    <div className="text-[14px] font-extrabold uppercase tracking-wide text-indigo-900">
                      Risk Alert
                    </div>
                  </div>
                  <div className="text-[13px] font-medium leading-relaxed text-indigo-900">
                    8 requirements have confidence below 70%. Prioritize
                    clarification for "user-friendly" and "fast response" to
                    avoid rework.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnalyticPage;
