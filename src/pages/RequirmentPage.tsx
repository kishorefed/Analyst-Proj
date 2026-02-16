// import React from 'react'
import Sidebar from "../components/Sidebar";

const RequirmentPage = () => {
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

        {/* Main Requirements Content */}
        <div className="flex flex-1 flex-col bg-[#fafbfc]">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-teal-900/10 bg-linear-to-br from-white to-teal-50 px-10 py-6 shadow-sm">
                <div className="space-y-1">
                    <h1 className="bg-linear-to-r from-teal-700 to-teal-500 bg-clip-text text-[32px] font-extrabold text-transparent">
                        Requirements Dashboard
                    </h1>
                    <p className="text-[14px] font-medium text-slate-500">
                        Manage and analyze all captured requirements with AI insights
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 rounded-xl border-2 border-teal-100 bg-white px-5 py-2.5 text-[13px] font-semibold text-teal-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-teal-200 hover:bg-teal-50 hover:shadow-md">
                        <span>💾</span>
                        Export All
                    </button>
                    <button className="flex items-center gap-2 rounded-xl bg-linear-to-r from-teal-700 to-teal-500 px-5 py-2.5 text-[13px] font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg">
                        <span>⚡</span>
                        AI Analysis
                    </button>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-linear-to-br from-indigo-400 to-purple-500 text-[14px] font-bold text-white shadow-md">
                        KK
                    </div>
                </div>
            </div>

            {/* Requirements body */}
            <div className="flex-1 overflow-y-auto bg-[radial-linear(circle_at_20%_50%,rgba(94,234,212,0.03)_0,transparent_50%),radial-linear(circle_at_80%_80%,rgba(167,139,250,0.03)_0,transparent_50%)] px-10 py-6">
                    {/* Filters bar */}
                    <div className="mb-5 flex items-center gap-4 rounded-2xl border border-teal-900/10 bg-white px-6 py-5 shadow-md">
                        <div className="relative flex-1">
                            <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[18px] text-slate-400">
                                🔍
                            </span>
                            <input
                                type="text"
                                className="w-full rounded-xl border-2 border-slate-200 bg-[#fafbfc] px-5 py-3 pl-11 text-[14px] font-medium text-slate-700 outline-none transition-all focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-400/20"
                                placeholder="Search requirements by text, ID, or stakeholder..."
                            />
                        </div>
                        <select className="min-w-[160px] rounded-xl border-2 border-slate-200 bg-white px-5 py-3 text-[14px] font-semibold text-slate-800 outline-none transition-all hover:border-teal-500 hover:bg-teal-50 focus:border-teal-500 focus:ring-4 focus:ring-teal-400/20">
                            <option>All Categories</option>
                            <option>Functional</option>
                            <option>Performance</option>
                            <option>Security</option>
                            <option>Usability</option>
                        </select>
                        <select className="min-w-[160px] rounded-xl border-2 border-slate-200 bg-white px-5 py-3 text-[14px] font-semibold text-slate-800 outline-none transition-all hover:border-teal-500 hover:bg-teal-50 focus:border-teal-500 focus:ring-4 focus:ring-teal-400/20">
                            <option>All Priorities</option>
                            <option>Must Have</option>
                            <option>Should Have</option>
                            <option>Could Have</option>
                        </select>
                        <select className="min-w-[160px] rounded-xl border-2 border-slate-200 bg-white px-5 py-3 text-[14px] font-semibold text-slate-800 outline-none transition-all hover:border-teal-500 hover:bg-teal-50 focus:border-teal-500 focus:ring-4 focus:ring-teal-400/20">
                            <option>All Status</option>
                            <option>Approved</option>
                            <option>Pending</option>
                            <option>Needs Review</option>
                        </select>
                        <button className="flex items-center gap-2 whitespace-nowrap rounded-xl bg-linear-to-r from-teal-700 to-teal-500 px-5 py-3 text-[14px] font-bold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg">
                            <span>➕</span>
                            Add Requirement
                        </button>
                    </div>

                    {/* Stats cards */}
                    <div className="mb-6 grid grid-cols-4 gap-5">
                        <div className="rounded-2xl border border-teal-900/10 bg-linear-to-br from-white to-teal-50 p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg">
                            <div className="mb-3 flex items-center justify-between">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-indigo-100 to-indigo-200 text-2xl">
                                    📋
                                </div>
                                <div className="rounded-md bg-emerald-100 px-2.5 py-1 text-[11px] font-bold text-emerald-800">
                                    +12%
                                </div>
                            </div>
                            <div className="mb-1 bg-linear-to-r from-teal-700 to-teal-500 bg-clip-text text-[36px] font-extrabold text-transparent">
                                127
                            </div>
                            <div className="text-[13px] font-semibold text-slate-500">
                                Total Requirements
                            </div>
                        </div>

                        <div className="rounded-2xl border border-teal-900/10 bg-linear-to-br from-white to-emerald-50 p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg">
                            <div className="mb-3 flex items-center justify-between">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-emerald-100 to-emerald-200 text-2xl">
                                    ✓
                                </div>
                                <div className="rounded-md bg-emerald-100 px-2.5 py-1 text-[11px] font-bold text-emerald-800">
                                    +8%
                                </div>
                            </div>
                            <div className="mb-1 bg-linear-to-r from-teal-700 to-teal-500 bg-clip-text text-[36px] font-extrabold text-transparent">
                                95
                            </div>
                            <div className="text-[13px] font-semibold text-slate-500">
                                Approved
                            </div>
                        </div>

                        <div className="rounded-2xl border border-amber-900/10 bg-linear-to-br from-white to-amber-50 p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg">
                            <div className="mb-3 flex items-center justify-between">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-amber-100 to-amber-200 text-2xl">
                                    ⚠
                                </div>
                                <div className="rounded-md bg-rose-100 px-2.5 py-1 text-[11px] font-bold text-rose-800">
                                    3 pending
                                </div>
                            </div>
                            <div className="mb-1 bg-linear-to-r from-teal-700 to-teal-500 bg-clip-text text-[36px] font-extrabold text-transparent">
                                8
                            </div>
                            <div className="text-[13px] font-semibold text-slate-500">
                                Gaps Detected
                            </div>
                        </div>

                        <div className="rounded-2xl border border-emerald-900/10 bg-linear-to-br from-white to-emerald-50 p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg">
                            <div className="mb-3 flex items-center justify-between">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-emerald-100 to-emerald-200 text-2xl">
                                    📈
                                </div>
                                <div className="rounded-md bg-emerald-100 px-2.5 py-1 text-[11px] font-bold text-emerald-800">
                                    Excellent
                                </div>
                            </div>
                            <div className="mb-1 bg-linear-to-r from-teal-700 to-teal-500 bg-clip-text text-[36px] font-extrabold text-transparent">
                                87%
                            </div>
                            <div className="text-[13px] font-semibold text-slate-500">
                                Avg Confidence
                            </div>
                        </div>
                    </div>

                    {/* Requirements table */}
                    <div className="overflow-hidden rounded-2xl border border-teal-900/10 bg-white shadow-md">
                        <div className="flex items-center justify-between border-b-2 border-slate-200 bg-linear-to-r from-slate-50 to-teal-50 px-7 py-5">
                            <div className="bg-linear-to-r from-teal-700 to-teal-500 bg-clip-text text-[18px] font-extrabold text-transparent">
                                All Requirements (127)
                            </div>
                            <div className="flex gap-2">
                                <button className="rounded-lg border-2 border-slate-200 bg-white px-3.5 py-2 text-[12px] font-semibold text-slate-600 transition-all hover:border-teal-500 hover:bg-teal-50 hover:text-teal-700">
                                    ✓ Approve Selected
                                </button>
                                <button className="rounded-lg border-2 border-slate-200 bg-white px-3.5 py-2 text-[12px] font-semibold text-slate-600 transition-all hover:border-teal-500 hover:bg-teal-50 hover:text-teal-700">
                                    🏷️ Change Priority
                                </button>
                                <button className="rounded-lg border-2 border-slate-200 bg-white px-3.5 py-2 text-[12px] font-semibold text-slate-600 transition-all hover:border-teal-500 hover:bg-teal-50 hover:text-teal-700">
                                    👤 Assign
                                </button>
                            </div>
                        </div>

                        <table className="w-full border-collapse">
                            <thead className="bg-linear-to-r from-slate-50 to-teal-50">
                                <tr>
                                    <th className="w-10 border-b-2 border-slate-200 px-5 py-4 text-left text-[11px] font-extrabold uppercase tracking-wide text-slate-500">
                                        <input type="checkbox" className="h-4 w-4 cursor-pointer accent-teal-500" />
                                    </th>
                                    <th className="border-b-2 border-slate-200 px-5 py-4 text-left text-[11px] font-extrabold uppercase tracking-wide text-slate-500">
                                        ID
                                    </th>
                                    <th className="border-b-2 border-slate-200 px-5 py-4 text-left text-[11px] font-extrabold uppercase tracking-wide text-slate-500">
                                        Requirement
                                    </th>
                                    <th className="border-b-2 border-slate-200 px-5 py-4 text-left text-[11px] font-extrabold uppercase tracking-wide text-slate-500">
                                        Category
                                    </th>
                                    <th className="border-b-2 border-slate-200 px-5 py-4 text-left text-[11px] font-extrabold uppercase tracking-wide text-slate-500">
                                        Priority
                                    </th>
                                    <th className="border-b-2 border-slate-200 px-5 py-4 text-left text-[11px] font-extrabold uppercase tracking-wide text-slate-500">
                                        Confidence
                                    </th>
                                    <th className="border-b-2 border-slate-200 px-5 py-4 text-left text-[11px] font-extrabold uppercase tracking-wide text-slate-500">
                                        Status
                                    </th>
                                    <th className="border-b-2 border-slate-200 px-5 py-4 text-left text-[11px] font-extrabold uppercase tracking-wide text-slate-500">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-slate-100 transition-colors hover:bg-linear-to-r hover:from-slate-50 hover:to-teal-50">
                                    <td className="px-5 py-5 align-top">
                                        <input type="checkbox" className="h-4 w-4 cursor-pointer accent-teal-500" />
                                    </td>
                                    <td className="px-5 py-5 align-top text-[11px] font-bold text-slate-500">
                                        REQ-001
                                    </td>
                                    <td className="max-w-[420px] px-5 py-5 align-top">
                                        <div className="mb-1 text-[13px] font-medium leading-relaxed text-slate-900">
                                            User authentication with email and password
                                        </div>
                                        <div className="flex flex-wrap items-center gap-3 text-[11px] text-slate-400">
                                            <span>👤 Added by Sarah J.</span>
                                            <span>📅 Feb 5, 2026</span>
                                            <span>💬 3 comments</span>
                                        </div>
                                    </td>
                                    <td className="px-5 py-5 align-top">
                                        <span className="inline-block rounded-lg bg-linear-to-br from-indigo-100 to-indigo-200 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-indigo-800">
                                            Functional
                                        </span>
                                    </td>
                                    <td className="px-5 py-5 align-top">
                                        <span className="inline-block rounded-lg bg-linear-to-br from-rose-100 to-rose-200 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-rose-800">
                                            Must Have
                                        </span>
                                    </td>
                                    <td className="px-5 py-5 align-top">
                                        <div className="flex items-center gap-3">
                                            <div className="h-2 w-20 overflow-hidden rounded-full bg-slate-200">
                                                <div className="h-full w-[95%] rounded-full bg-linear-to-r from-emerald-500 to-emerald-600"></div>
                                            </div>
                                            <span className="text-[12px] font-bold text-slate-500">
                                                95%
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-5 py-5 align-top">
                                        <span className="inline-block rounded-lg bg-linear-to-br from-emerald-100 to-emerald-200 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-emerald-800">
                                            Approved
                                        </span>
                                    </td>
                                    <td className="px-5 py-5 align-top">
                                        <div className="flex gap-2">
                                            <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-[14px] text-slate-500 shadow-sm transition-all hover:-translate-y-0.5 hover:bg-linear-to-r hover:from-teal-700 hover:to-teal-500 hover:text-white hover:shadow-md" title="Edit">
                                                ✏️
                                            </button>
                                            <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-[14px] text-slate-500 shadow-sm transition-all hover:-translate-y-0.5 hover:bg-linear-to-r hover:from-teal-700 hover:to-teal-500 hover:text-white hover:shadow-md" title="View Details">
                                                👁️
                                            </button>
                                            <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-[14px] text-slate-500 shadow-sm transition-all hover:-translate-y-0.5 hover:bg-linear-to-r hover:from-teal-700 hover:to-teal-500 hover:text-white hover:shadow-md" title="Link to Story">
                                                🔗
                                            </button>
                                        </div>
                                    </td>
                                </tr>

                                <tr className="border-b border-slate-100 transition-colors hover:bg-linear-to-r hover:from-slate-50 hover:to-teal-50">
                                    <td className="px-5 py-5 align-top">
                                        <input type="checkbox" className="h-4 w-4 cursor-pointer accent-teal-500" />
                                    </td>
                                    <td className="px-5 py-5 align-top text-[11px] font-bold text-slate-500">
                                        REQ-002
                                    </td>
                                    <td className="max-w-[420px] px-5 py-5 align-top">
                                        <div className="mb-1 text-[13px] font-medium leading-relaxed text-slate-900">
                                            Dashboard should load within 2 seconds under normal load
                                        </div>
                                        <div className="flex flex-wrap items-center gap-3 text-[11px] text-slate-400">
                                            <span>👤 Added by Mike C.</span>
                                            <span>📅 Feb 6, 2026</span>
                                            <span>💬 1 comment</span>
                                        </div>
                                    </td>
                                    <td className="px-5 py-5 align-top">
                                        <span className="inline-block rounded-lg bg-linear-to-br from-amber-100 to-amber-200 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-amber-800">
                                            Performance
                                        </span>
                                    </td>
                                    <td className="px-5 py-5 align-top">
                                        <span className="inline-block rounded-lg bg-linear-to-br from-rose-100 to-rose-200 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-rose-800">
                                            Must Have
                                        </span>
                                    </td>
                                    <td className="px-5 py-5 align-top">
                                        <div className="flex items-center gap-3">
                                            <div className="h-2 w-20 overflow-hidden rounded-full bg-slate-200">
                                                <div className="h-full w-[88%] rounded-full bg-linear-to-r from-amber-500 to-amber-600"></div>
                                            </div>
                                            <span className="text-[12px] font-bold text-slate-500">
                                                88%
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-5 py-5 align-top">
                                        <span className="inline-block rounded-lg bg-linear-to-br from-indigo-100 to-indigo-200 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-indigo-800">
                                            Clarified
                                        </span>
                                    </td>
                                    <td className="px-5 py-5 align-top">
                                        <div className="flex gap-2">
                                            <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-[14px] text-slate-500 shadow-sm transition-all hover:-translate-y-0.5 hover:bg-linear-to-r hover:from-teal-700 hover:to-teal-500 hover:text-white hover:shadow-md">
                                                ✏️
                                            </button>
                                            <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-[14px] text-slate-500 shadow-sm transition-all hover:-translate-y-0.5 hover:bg-linear-to-r hover:from-teal-700 hover:to-teal-500 hover:text-white hover:shadow-md">
                                                👁️
                                            </button>
                                            <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-[14px] text-slate-500 shadow-sm transition-all hover:-translate-y-0.5 hover:bg-linear-to-r hover:from-teal-700 hover:to-teal-500 hover:text-white hover:shadow-md">
                                                🔗
                                            </button>
                                        </div>
                                    </td>
                                </tr>

                                <tr className="border-b border-slate-100 transition-colors hover:bg-linear-to-r hover:from-slate-50 hover:to-teal-50">
                                    <td className="px-5 py-5 align-top">
                                        <input type="checkbox" className="h-4 w-4 cursor-pointer accent-teal-500" />
                                    </td>
                                    <td className="px-5 py-5 align-top text-[11px] font-bold text-slate-500">
                                        REQ-003
                                    </td>
                                    <td className="max-w-[420px] px-5 py-5 align-top">
                                        <div className="mb-1 text-[13px] font-medium leading-relaxed text-slate-900">
                                            Patient data encryption at rest and in transit (AES-256)
                                        </div>
                                        <div className="flex flex-wrap items-center gap-3 text-[11px] text-slate-400">
                                            <span>👤 Added by Emily D.</span>
                                            <span>📅 Feb 6, 2026</span>
                                            <span>💬 5 comments</span>
                                        </div>
                                    </td>
                                    <td className="px-5 py-5 align-top">
                                        <span className="inline-block rounded-lg bg-linear-to-br from-violet-100 to-violet-200 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-violet-800">
                                            Security
                                        </span>
                                    </td>
                                    <td className="px-5 py-5 align-top">
                                        <span className="inline-block rounded-lg bg-linear-to-br from-rose-100 to-rose-200 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-rose-800">
                                            Must Have
                                        </span>
                                    </td>
                                    <td className="px-5 py-5 align-top">
                                        <div className="flex items-center gap-3">
                                            <div className="h-2 w-20 overflow-hidden rounded-full bg-slate-200">
                                                <div className="h-full w-[92%] rounded-full bg-linear-to-r from-emerald-500 to-emerald-600"></div>
                                            </div>
                                            <span className="text-[12px] font-bold text-slate-500">
                                                92%
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-5 py-5 align-top">
                                        <span className="inline-block rounded-lg bg-linear-to-br from-emerald-100 to-emerald-200 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-emerald-800">
                                            Approved
                                        </span>
                                    </td>
                                    <td className="px-5 py-5 align-top">
                                        <div className="flex gap-2">
                                            <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-[14px] text-slate-500 shadow-sm transition-all hover:-translate-y-0.5 hover:bg-linear-to-r hover:from-teal-700 hover:to-teal-500 hover:text-white hover:shadow-md">
                                                ✏️
                                            </button>
                                            <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-[14px] text-slate-500 shadow-sm transition-all hover:-translate-y-0.5 hover:bg-linear-to-r hover:from-teal-700 hover:to-teal-500 hover:text-white hover:shadow-md">
                                                👁️
                                            </button>
                                            <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-[14px] text-slate-500 shadow-sm transition-all hover:-translate-y-0.5 hover:bg-linear-to-r hover:from-teal-700 hover:to-teal-500 hover:text-white hover:shadow-md">
                                                🔗
                                            </button>
                                        </div>
                                    </td>
                                </tr>

                                <tr className="border-b border-slate-100 transition-colors hover:bg-linear-to-r hover:from-slate-50 hover:to-teal-50">
                                    <td className="px-5 py-5 align-top">
                                        <input type="checkbox" className="h-4 w-4 cursor-pointer accent-teal-500" />
                                    </td>
                                    <td className="px-5 py-5 align-top text-[11px] font-bold text-slate-500">
                                        REQ-004
                                    </td>
                                    <td className="max-w-[420px] px-5 py-5 align-top">
                                        <div className="mb-1 text-[13px] font-medium leading-relaxed text-slate-900">
                                            Mobile app should work offline for viewing past records
                                        </div>
                                        <div className="flex flex-wrap items-center gap-3 text-[11px] text-slate-400">
                                            <span>👤 Added by John S.</span>
                                            <span>📅 Feb 7, 2026</span>
                                            <span>💬 2 comments</span>
                                        </div>
                                    </td>
                                    <td className="px-5 py-5 align-top">
                                        <span className="inline-block rounded-lg bg-linear-to-br from-indigo-100 to-indigo-200 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-indigo-800">
                                            Functional
                                        </span>
                                    </td>
                                    <td className="px-5 py-5 align-top">
                                        <span className="inline-block rounded-lg bg-linear-to-br from-amber-100 to-amber-200 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-amber-800 text-nowrap">
                                            Should Have
                                        </span>
                                    </td>
                                    <td className="px-5 py-5 align-top">
                                        <div className="flex items-center gap-3">
                                            <div className="h-2 w-20 overflow-hidden rounded-full bg-slate-200">
                                                <div className="h-full w-[75%] rounded-full bg-linear-to-r from-amber-500 to-amber-600"></div>
                                            </div>
                                            <span className="text-[12px] font-bold text-slate-500">
                                                75%
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-5 py-5 align-top">
                                        <span className="inline-block rounded-lg bg-linear-to-br from-amber-100 to-amber-200 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-amber-800">
                                            Pending
                                        </span>
                                    </td>
                                    <td className="px-5 py-5 align-top">
                                        <div className="flex gap-2">
                                            <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-[14px] text-slate-500 shadow-sm transition-all hover:-translate-y-0.5 hover:bg-linear-to-r hover:from-teal-700 hover:to-teal-500 hover:text-white hover:shadow-md">
                                                ✏️
                                            </button>
                                            <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-[14px] text-slate-500 shadow-sm transition-all hover:-translate-y-0.5 hover:bg-linear-to-r hover:from-teal-700 hover:to-teal-500 hover:text-white hover:shadow-md">
                                                👁️
                                            </button>
                                            <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-[14px] text-slate-500 shadow-sm transition-all hover:-translate-y-0.5 hover:bg-linear-to-r hover:from-teal-700 hover:to-teal-500 hover:text-white hover:shadow-md">
                                                🔗
                                            </button>
                                        </div>
                                    </td>
                                </tr>

                                <tr className="border-b border-slate-100 transition-colors hover:bg-linear-to-r hover:from-slate-50 hover:to-teal-50">
                                    <td className="px-5 py-5 align-top">
                                        <input type="checkbox" className="h-4 w-4 cursor-pointer accent-teal-500" />
                                    </td>
                                    <td className="px-5 py-5 align-top text-[11px] font-bold text-slate-500">
                                        REQ-005
                                    </td>
                                    <td className="max-w-[420px] px-5 py-5 align-top">
                                        <div className="mb-1 text-[13px] font-medium leading-relaxed text-slate-900">
                                            System should be user-friendly and intuitive
                                        </div>
                                        <div className="flex flex-wrap items-center gap-3 text-[11px] text-slate-400">
                                            <span>👤 Added by Lisa W.</span>
                                            <span>📅 Feb 7, 2026</span>
                                            <span>⚠️ Needs clarification</span>
                                        </div>
                                    </td>
                                    <td className="px-5 py-5 align-top">
                                        <span className="inline-block rounded-lg bg-linear-to-br from-emerald-100 to-emerald-200 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-emerald-800">
                                            Usability
                                        </span>
                                    </td>
                                    <td className="px-5 py-5 align-top">
                                        <span className="inline-block rounded-lg bg-linear-to-br from-indigo-100 to-indigo-200 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-indigo-800">
                                            Could Have
                                        </span>
                                    </td>
                                    <td className="px-5 py-5 align-top">
                                        <div className="flex items-center gap-3">
                                            <div className="h-2 w-20 overflow-hidden rounded-full bg-slate-200">
                                                <div className="h-full w-[45%] rounded-full bg-linear-to-r from-rose-500 to-rose-600"></div>
                                            </div>
                                            <span className="text-[12px] font-bold text-slate-500">
                                                45%
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-5 py-5 align-top">
                                        <span className="inline-block rounded-lg bg-linear-to-br from-rose-100 to-rose-200 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-rose-800 text-nowrap">
                                            Needs Review
                                        </span>
                                    </td>
                                    <td className="px-5 py-5 align-top">
                                        <div className="flex gap-2">
                                            <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-[14px] text-slate-500 shadow-sm transition-all hover:-translate-y-0.5 hover:bg-linear-to-r hover:from-teal-700 hover:to-teal-500 hover:text-white hover:shadow-md">
                                                ✏️
                                            </button>
                                            <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-[14px] text-slate-500 shadow-sm transition-all hover:-translate-y-0.5 hover:bg-linear-to-r hover:from-teal-700 hover:to-teal-500 hover:text-white hover:shadow-md">
                                                👁️
                                            </button>
                                            <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-[14px] text-slate-500 shadow-sm transition-all hover:-translate-y-0.5 hover:bg-linear-to-r hover:from-teal-700 hover:to-teal-500 hover:text-white hover:shadow-md">
                                                🔗
                                            </button>
                                        </div>
                                    </td>
                                </tr>

                                <tr className="transition-colors hover:bg-linear-to-r hover:from-slate-50 hover:to-teal-50">
                                    <td className="px-5 py-5 align-top">
                                        <input type="checkbox" className="h-4 w-4 cursor-pointer accent-teal-500" />
                                    </td>
                                    <td className="px-5 py-5 align-top text-[11px] font-bold text-slate-500">
                                        REQ-006
                                    </td>
                                    <td className="max-w-[420px] px-5 py-5 align-top">
                                        <div className="mb-1 text-[13px] font-medium leading-relaxed text-slate-900">
                                            Support for 5000+ concurrent users during peak hours
                                        </div>
                                        <div className="flex flex-wrap items-center gap-3 text-[11px] text-slate-400">
                                            <span>👤 Added by Tom B.</span>
                                            <span>📅 Feb 8, 2026</span>
                                            <span>💬 4 comments</span>
                                        </div>
                                    </td>
                                    <td className="px-5 py-5 align-top">
                                        <span className="inline-block rounded-lg bg-linear-to-br from-amber-100 to-amber-200 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-amber-800">
                                            Performance
                                        </span>
                                    </td>
                                    <td className="px-5 py-5 align-top">
                                        <span className="inline-block rounded-lg bg-linear-to-br from-rose-100 to-rose-200 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-rose-800">
                                            Must Have
                                        </span>
                                    </td>
                                    <td className="px-5 py-5 align-top">
                                        <div className="flex items-center gap-3">
                                            <div className="h-2 w-20 overflow-hidden rounded-full bg-slate-200">
                                                <div className="h-full w-[90%] rounded-full bg-linear-to-r from-emerald-500 to-emerald-600"></div>
                                            </div>
                                            <span className="text-[12px] font-bold text-slate-500">
                                                90%
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-5 py-5 align-top">
                                        <span className="inline-block rounded-lg bg-linear-to-br from-emerald-100 to-emerald-200 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-emerald-800">
                                            Approved
                                        </span>
                                    </td>
                                    <td className="px-5 py-5 align-top">
                                        <div className="flex gap-2">
                                            <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-[14px] text-slate-500 shadow-sm transition-all hover:-translate-y-0.5 hover:bg-linear-to-r hover:from-teal-700 hover:to-teal-500 hover:text-white hover:shadow-md">
                                                ✏️
                                            </button>
                                            <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-[14px] text-slate-500 shadow-sm transition-all hover:-translate-y-0.5 hover:bg-linear-to-r hover:from-teal-700 hover:to-teal-500 hover:text-white hover:shadow-md">
                                                👁️
                                            </button>
                                            <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-[14px] text-slate-500 shadow-sm transition-all hover:-translate-y-0.5 hover:bg-linear-to-r hover:from-teal-700 hover:to-teal-500 hover:text-white hover:shadow-md">
                                                🔗
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
            </div>

            {/* Bottom actions */}
            <div className="flex items-center justify-between border-t border-slate-200 bg-white px-10 py-5 shadow-[0_-2px_10px_rgba(0,0,0,0.03)]">
                <div className="flex items-center gap-2">
                    <button className="flex h-9 w-9 items-center justify-center rounded-lg border-2 border-slate-200 bg-white text-[13px] font-semibold text-slate-500 transition-all hover:border-teal-500 hover:bg-teal-50 hover:text-teal-700">
                        ←
                    </button>
                    <button className="flex h-9 w-9 items-center justify-center rounded-lg border-2 border-transparent bg-linear-to-r from-teal-700 to-teal-500 text-[13px] font-semibold text-white shadow-md">
                        1
                    </button>
                    <button className="flex h-9 w-9 items-center justify-center rounded-lg border-2 border-slate-200 bg-white text-[13px] font-semibold text-slate-500 transition-all hover:border-teal-500 hover:bg-teal-50 hover:text-teal-700">
                        2
                    </button>
                    <button className="flex h-9 w-9 items-center justify-center rounded-lg border-2 border-slate-200 bg-white text-[13px] font-semibold text-slate-500 transition-all hover:border-teal-500 hover:bg-teal-50 hover:text-teal-700">
                        3
                    </button>
                    <button className="flex h-9 w-9 items-center justify-center rounded-lg border-2 border-slate-200 bg-white text-[13px] font-semibold text-slate-500 transition-all hover:border-teal-500 hover:bg-teal-50 hover:text-teal-700">
                        ...
                    </button>
                    <button className="flex h-9 w-9 items-center justify-center rounded-lg border-2 border-slate-200 bg-white text-[13px] font-semibold text-slate-500 transition-all hover:border-teal-500 hover:bg-teal-50 hover:text-teal-700">
                        13
                    </button>
                    <button className="flex h-9 w-9 items-center justify-center rounded-lg border-2 border-slate-200 bg-white text-[13px] font-semibold text-slate-500 transition-all hover:border-teal-500 hover:bg-teal-50 hover:text-teal-700">
                        →
                    </button>
                </div>

                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 rounded-xl bg-linear-to-br from-emerald-500 to-emerald-600 px-5 py-2.5 text-[13px] font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg">
                        <span>📊</span>
                        Export to Excel
                    </button>
                    <button className="flex items-center gap-2 rounded-xl bg-linear-to-br from-violet-500 to-violet-600 px-5 py-2.5 text-[13px] font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg">
                        <span>⚡</span>
                        Sync to Jira
                    </button>
                    <button className="flex items-center gap-2 rounded-xl border-2 border-teal-700 bg-white px-5 py-2.5 text-[13px] font-semibold text-teal-700 shadow-sm transition-all hover:-translate-y-0.5 hover:bg-teal-50 hover:shadow-md">
                        <span>📄</span>
                        Generate Documents
                    </button>
                </div>
            </div>
        </div>
      </div>
    </div>
    </>

  )
}

export default RequirmentPage