// import React from 'react'
import Sidebar from "../components/Sidebar";

const ConversationPage = () => {
  return (
    <>
      {/* Animated Background */}
      {/* Background linear & particles are still driven by global CSS animations,
          but the main layout/styles are now Tailwind utility classes */}
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

        {/* Main Content */}
        <div className="flex flex-1 flex-col bg-[#fafbfc]">
            {/* Advanced Header */}
            <div className="flex items-center justify-between border-b border-teal-900/10 bg-linear-to-br from-white to-teal-50 px-10 py-6 shadow-sm">
                <div className="space-y-1">
                    <h1 className="bg-linear-to-r from-teal-700 to-teal-500 bg-clip-text text-[32px] font-extrabold text-transparent">
                        AI Conversation Studio
                    </h1>
                    {/* <p>Intelligent requirements gathering powered by Claude Sonnet 4</p> */}
                </div>
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 rounded-xl border-2 border-teal-100 bg-white px-5 py-2.5 text-[13px] font-semibold text-teal-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-teal-200 hover:bg-teal-50 hover:shadow-md">
                        <span>💾</span>
                        Save Session
                    </button>
                    <button className="flex items-center gap-2 rounded-xl bg-linear-to-r from-teal-700 to-teal-500 px-5 py-2.5 text-[13px] font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg">
                        <span>⚡</span>
                        Generate BRD
                    </button>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-linear-to-br from-indigo-400 to-purple-500 text-[14px] font-bold text-white shadow-md">
                        KK
                    </div>
                </div>
            </div>

            {/* Advanced Chat Area */}
            <div className="flex flex-1 flex-col gap-5 overflow-y-auto bg-[radial-linear(circle_at_20%_50%,rgba(94,234,212,0.03)_0,transparent_50%),radial-linear(circle_at_80%_80%,rgba(167,139,250,0.03)_0,transparent_50%)] px-10 py-6">
                <div className="flex items-start gap-4">
                    <div className="flex h-[42px] w-[42px] flex-shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-teal-700 to-teal-500 text-[18px] shadow-md">
                        🤖
                    </div>
                    <div className="flex max-w-[65%] flex-col gap-2">
                        <div className="relative rounded-2xl border border-gray-200 bg-white px-[22px] py-[18px] text-[14px] leading-relaxed text-gray-800 shadow">
                            Hi! I'm your AI Business Analyst. Let's gather requirements for your <strong>Healthcare Mobile Application</strong>. Can you start by telling me what problem this app is solving?
                        </div>
                        <div className="flex items-center gap-3 text-[11px] font-medium text-slate-400">
                            <span>10:30 AM</span>
                            <span className="inline-flex items-center gap-1 rounded-md bg-linear-to-r from-emerald-500 to-emerald-600 px-2.5 py-1 text-[10px] font-bold text-white shadow">
                                <span>⚡</span>
                                AI Ready
                            </span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row-reverse items-start gap-4">
                    <div className="flex h-[42px] w-[42px] flex-shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-indigo-500 to-purple-600 text-[18px] shadow-md">
                        👤
                    </div>
                    <div className="flex max-w-[65%] flex-col gap-2">
                        <div className="relative rounded-2xl border-b-[4px] border-b-teal-700 bg-linear-to-r from-teal-700 to-teal-500 px-[22px] py-[18px] text-[14px] leading-relaxed text-white shadow">
                            We need a mobile app for patients to book appointments and view their medical records.
                        </div>
                        <div className="flex items-center justify-end gap-3 text-[11px] font-medium text-slate-400">
                            <span>10:32 AM</span>
                        </div>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="flex h-[42px] w-[42px] flex-shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-teal-700 to-teal-500 text-[18px] shadow-md">
                        🤖
                    </div>
                <div className="flex max-w-[65%] flex-col gap-2">
                        <div className="relative rounded-2xl border border-gray-200 bg-white px-[22px] py-[18px] text-[14px] leading-relaxed text-gray-800 shadow">
                            <strong>Great! Let me clarify a few things:</strong>
                            <br />
                            <br />
                            1. Should patients be able to book with <strong>any doctor</strong>, or only their assigned primary care physician?
                            <br />
                            2. What medical records should be visible - lab results, prescriptions, visit history, or <strong>all of the above</strong>?
                            <br />
                            3. Do you need <strong>real-time appointment availability</strong> or is next-day scheduling acceptable?
                        </div>
                        <div className="mt-2 rounded-xl border-2 border-blue-300 bg-linear-to-br from-indigo-50 to-blue-100 p-4">
                            <div className="mb-2 text-[11px] font-bold uppercase tracking-wide text-blue-900">
                                ✨ Auto-Extracted Requirements
                            </div>
                            <div className="mb-1 flex items-center gap-2 rounded-lg border border-blue-200 bg-white px-3 py-2 text-[12px] shadow-sm transition-all hover:translate-x-1 hover:shadow-md">
                                <span className="text-[14px]">✓</span>
                                <span>Mobile application platform</span>
                            </div>
                            <div className="mb-1 flex items-center gap-2 rounded-lg border border-blue-200 bg-white px-3 py-2 text-[12px] shadow-sm transition-all hover:translate-x-1 hover:shadow-md">
                                <span className="text-[14px]">✓</span>
                                <span>Appointment booking functionality</span>
                            </div>
                            <div className="mb-1 flex items-center gap-2 rounded-lg border border-blue-200 bg-white px-3 py-2 text-[12px] shadow-sm transition-all hover:translate-x-1 hover:shadow-md">
                                <span className="text-[14px]">✓</span>
                                <span>Medical records viewing capability</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 text-[11px] font-medium text-slate-400">
                            <span>10:32 AM</span>
                            <span className="inline-flex items-center gap-1 rounded-md bg-linear-to-r from-emerald-500 to-emerald-600 px-2.5 py-1 text-[10px] font-bold text-white shadow">
                                <span>🎯</span>
                                3 Requirements Extracted
                            </span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row-reverse items-start gap-4">
                    <div className="flex h-[42px] w-[42px] flex-shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-indigo-500 to-purple-600 text-[18px] shadow-md">
                        👤
                    </div>
                    <div className="flex max-w-[65%] flex-col gap-2">
                        <div className="relative rounded-2xl border-b-[4px] border-b-teal-700 bg-linear-to-r from-teal-700 to-teal-500 px-[22px] py-[18px] text-[14px] leading-relaxed text-white shadow">
                            They should see all doctors available. All medical records. Real-time availability is critical.
                        </div>
                        <div className="flex items-center justify-end gap-3 text-[11px] font-medium text-slate-400">
                            <span>10:35 AM</span>
                        </div>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="flex h-[42px] w-[42px] flex-shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-teal-700 to-teal-500 text-[18px] shadow-md">
                        🤖
                    </div>
                    <div className="flex max-w-[65%] flex-col gap-2">
                        <div className="relative rounded-2xl border border-gray-200 bg-white px-[22px] py-[18px] text-[14px] leading-relaxed text-gray-800 shadow">
                            <div className="flex gap-1 rounded-lg bg-slate-100 px-3 py-2">
                                <div className="typing-dot"></div>
                                <div className="typing-dot"></div>
                                <div className="typing-dot"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Smart Suggestions */}
            <div className="border-y border-teal-100 bg-linear-to-r from-teal-50 to-white px-10 py-4">
                <div className="mb-3 flex items-center justify-between">
                    <div className="text-[11px] font-bold uppercase tracking-[0.1em] text-slate-500">
                        🎯 Smart Suggestions
                    </div>
                    <div className="flex items-center gap-2 text-[11px] font-bold text-emerald-600">
                        <span>✨</span>
                        <span>AI Confidence: 95%</span>
                    </div>
                </div>
                <div className="flex flex-wrap gap-2.5">
                    <button className="rounded-full border-2 border-teal-300 bg-white px-4 py-2 text-[13px] font-semibold text-teal-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-teal-700 hover:bg-linear-to-r hover:from-teal-700 hover:to-teal-500 hover:text-white hover:shadow-md">
                        🔒 What about security & HIPAA compliance?
                    </button>
                    <button className="rounded-full border-2 border-teal-300 bg-white px-4 py-2 text-[13px] font-semibold text-teal-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-teal-700 hover:bg-linear-to-r hover:from-teal-700 hover:to-teal-500 hover:text-white hover:shadow-md">
                        📱 iOS and Android both?
                    </button>
                    <button className="rounded-full border-2 border-teal-300 bg-white px-4 py-2 text-[13px] font-semibold text-teal-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-teal-700 hover:bg-linear-to-r hover:from-teal-700 hover:to-teal-500 hover:text-white hover:shadow-md">
                        🔔 Should we add push notifications?
                    </button>
                    <button className="rounded-full border-2 border-teal-300 bg-white px-4 py-2 text-[13px] font-semibold text-teal-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-teal-700 hover:bg-linear-to-r hover:from-teal-700 hover:to-teal-500 hover:text-white hover:shadow-md">
                        ⏭️ Skip to document generation
                    </button>
                </div>
            </div>

            {/* Advanced Input Area */}
            <div className="flex items-center gap-3 border-t border-gray-200 bg-white px-10 py-5 shadow-[0_-2px_10px_rgba(0,0,0,0.03)]">
                <button className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-red-500 bg-linear-to-r from-red-500 to-red-600 text-[20px] text-white shadow-md transition-all animate-[pulse_1.5s_infinite]">
                    🎤
                </button>
                <button className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-gray-200 bg-white text-[20px] shadow-sm transition-all hover:-translate-y-0.5 hover:border-teal-700 hover:bg-teal-50 hover:shadow-md">
                    📎
                </button>
                <button className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-gray-200 bg-white text-[20px] shadow-sm transition-all hover:-translate-y-0.5 hover:border-teal-700 hover:bg-teal-50 hover:shadow-md">
                    😊
                </button>
                <input
                  type="text"
                  className="flex-1 rounded-xl border-2 border-gray-200 bg-[#fafbfc] px-5 py-3 text-[14px] transition-all focus:border-teal-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-teal-400/30"
                  placeholder="Type your message or press mic to speak..."
                />
                <button className="flex items-center gap-2 rounded-xl bg-linear-to-r from-teal-700 to-teal-500 px-7 py-3 text-[14px] font-bold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-xl">
                    <span>Send</span>
                    <span>→</span>
                </button>
            </div>
        </div>

        {/* Premium Right Sidebar */}
        <div className="flex h-full w-[420px] flex-col overflow-y-auto border-l border-gray-200 bg-linear-to-br from-[#fafbfc] to-sky-50 px-8 py-6 shadow-[ -2px_0_10px_rgba(0,0,0,0.03)]">
            <div className="mb-6 flex items-center justify-between">
                <div className="bg-linear-to-r from-teal-700 to-teal-500 bg-clip-text text-[20px] font-extrabold text-transparent">
                    Live Tracker
                </div>
                <div className="flex items-center gap-2 rounded-full bg-linear-to-r from-red-500 to-red-600 px-3.5 py-1.5 text-[11px] font-bold text-white shadow-md">
                    <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-white"></div>
                    <span>LIVE</span>
                </div>
            </div>

            {/* Premium Completeness Card */}
            <div className="mb-5 rounded-2xl border border-teal-900/10 bg-linear-to-br from-white to-teal-50 p-5 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
                <div className="mb-4 flex items-center justify-between">
                    <div className="text-[13px] font-bold uppercase tracking-wide text-slate-500">
                        Completeness Score
                    </div>
                    <div className="bg-linear-to-r from-teal-700 to-teal-500 bg-clip-text text-[36px] font-extrabold text-transparent">
                        82%
                    </div>
                </div>
                <div className="mb-4 h-[14px] w-full overflow-hidden rounded-full bg-gray-200 shadow-inner">
                    <div className="h-full w-[82%] animate-[shimmer_2s_infinite] rounded-full bg-linear-to-r from-teal-500 via-teal-300 to-teal-500 bg-[length:200%_100%]"></div>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="rounded-xl bg-white p-3.5 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                        <div className="bg-linear-to-r from-emerald-500 to-emerald-600 bg-clip-text text-[24px] font-extrabold text-transparent">
                            8
                        </div>
                        <div className="text-[10px] font-semibold uppercase tracking-wide text-slate-500">
                            Complete
                        </div>
                    </div>
                    <div className="rounded-xl bg-white p-3.5 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                        <div className="bg-linear-to-r from-amber-500 to-amber-600 bg-clip-text text-[24px] font-extrabold text-transparent">
                            3
                        </div>
                        <div className="text-[10px] font-semibold uppercase tracking-wide text-slate-500">
                            Pending
                        </div>
                    </div>
                    <div className="rounded-xl bg-white p-3.5 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                        <div className="bg-linear-to-r from-red-500 to-red-600 bg-clip-text text-[24px] font-extrabold text-transparent">
                            1
                        </div>
                        <div className="text-[10px] font-semibold uppercase tracking-wide text-slate-500">
                            Unclear
                        </div>
                    </div>
                </div>
            </div>

            {/* AI Insights */}
            <div className="mb-4 rounded-xl border border-blue-300 bg-linear-to-br from-indigo-50 to-blue-100 p-4 shadow-sm">
                <div className="mb-3 flex items-center gap-2">
                    <span className="text-[20px]">💡</span>
                    <div className="text-[12px] font-extrabold uppercase tracking-wide text-blue-900">
                        AI Insight
                    </div>
                </div>
                <div className="text-[12px] font-medium leading-relaxed text-indigo-900">
                    Your project has strong functional requirements. Consider adding performance metrics (response time, concurrent users) and security standards (HIPAA, encryption).
                </div>
            </div>

            {/* Action Required */}
            <div className="mb-3 flex items-center gap-2 text-[13px] font-extrabold uppercase tracking-wide text-gray-800">
                ⚠️ Action Required
            </div>

            <div className="mb-2.5 rounded-xl border-l-4 border-red-500 bg-linear-to-br from-rose-50 to-rose-100 p-4 shadow-md transition-all hover:translate-x-1 hover:shadow-lg">
                <div className="mb-1 text-[10px] font-extrabold uppercase tracking-wide text-red-800">
                    Missing Critical Info
                </div>
                <div className="text-[13px] font-medium leading-relaxed text-gray-900">
                    What should happen when a user forgets their password? Need to define password recovery flow.
                </div>
                <div className="mt-3 flex items-center justify-between">
                    <div className="rounded-md bg-linear-to-r from-red-500 to-red-600 px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-wide text-white shadow">
                        HIGH
                    </div>
                    <button className="text-[11px] font-bold text-teal-700 transition-colors hover:text-teal-500">
                        Solve Now →
                    </button>
                </div>
            </div>

            <div className="mb-5 rounded-xl border-l-4 border-amber-500 bg-linear-to-br from-amber-50 to-amber-100 p-4 shadow-md transition-all hover:translate-x-1 hover:shadow-lg">
                <div className="mb-1 text-[10px] font-extrabold uppercase tracking-wide text-amber-800">
                    Ambiguity Detected
                </div>
                <div className="text-[13px] font-medium leading-relaxed text-gray-900">
                    Define "user-friendly" with specific metrics. What does this mean quantitatively?
                </div>
                <div className="mt-3 flex items-center justify-between">
                    <div className="rounded-md bg-linear-to-r from-amber-500 to-amber-600 px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-wide text-white shadow">
                        MEDIUM
                    </div>
                    <button className="text-[11px] font-bold text-teal-700 transition-colors hover:text-teal-500">
                        Clarify →
                    </button>
                </div>
            </div>

            {/* Recently Captured */}
            <div className="mt-5 mb-3 flex items-center gap-2 text-[13px] font-extrabold uppercase tracking-wide text-gray-800">
                ✨ Recently Captured
            </div>

            <div className="mb-2.5 rounded-xl border-l-[5px] border-teal-500 bg-white p-4 shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg">
                <div className="mb-1 text-[10px] font-bold uppercase tracking-wide text-slate-500">
                    Functional Requirement
                </div>
                <div className="mb-3 text-[13px] font-medium leading-relaxed text-gray-900">
                    User authentication with email and password
                </div>
                <div className="flex items-center justify-between">
                    <div className="rounded-md bg-linear-to-r from-emerald-100 to-emerald-200 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wide text-emerald-900 shadow-sm">
                        Approved
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="h-1.5 w-[60px] overflow-hidden rounded-full bg-gray-200">
                            <div className="h-full w-[95%] rounded-full bg-linear-to-r from-emerald-500 to-emerald-600"></div>
                        </div>
                        <span className="text-[11px] font-semibold text-slate-500">95%</span>
                    </div>
                </div>
            </div>

            <div className="mb-2.5 rounded-xl border-l-[5px] border-amber-500 bg-white p-4 shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg">
                <div className="mb-1 text-[10px] font-bold uppercase tracking-wide text-slate-500">
                    Performance
                </div>
                <div className="mb-3 text-[13px] font-medium leading-relaxed text-gray-900">
                    Dashboard should load within 2 seconds
                </div>
                <div className="flex items-center justify-between">
                    <div className="rounded-md bg-linear-to-r from-amber-100 to-amber-200 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wide text-amber-900 shadow-sm">
                        Pending Review
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="h-1.5 w-[60px] overflow-hidden rounded-full bg-gray-200">
                            <div className="h-full w-[88%] rounded-full bg-linear-to-r from-amber-500 to-amber-600"></div>
                        </div>
                        <span className="text-[11px] font-semibold text-slate-500">88%</span>
                    </div>
                </div>
            </div>

            <div className="mb-4 rounded-xl border-l-[5px] border-violet-500 bg-white p-4 shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg">
                <div className="mb-1 text-[10px] font-bold uppercase tracking-wide text-slate-500">
                    Security
                </div>
                <div className="mb-3 text-[13px] font-medium leading-relaxed text-gray-900">
                    Patient data encryption at rest and in transit
                </div>
                <div className="flex items-center justify-between">
                    <div className="rounded-md bg-linear-to-r from-emerald-100 to-emerald-200 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wide text-emerald-900 shadow-sm">
                        Approved
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="h-1.5 w-[60px] overflow-hidden rounded-full bg-gray-200">
                            <div className="h-full w-[92%] rounded-full bg-linear-to-r from-emerald-500 to-emerald-600"></div>
                        </div>
                        <span className="text-[11px] font-semibold text-slate-500">92%</span>
                    </div>
                </div>
            </div>

            <div className="mt-4 flex flex-col gap-2.5">
                <button className="flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-teal-700 to-teal-500 px-4 py-3 text-[13px] font-bold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg">
                    <span>👁️</span>
                    View All Requirements
                </button>
                <button className="flex items-center justify-center gap-2 rounded-xl border-2 border-teal-700 bg-white px-4 py-3 text-[13px] font-bold text-teal-700 shadow-sm transition-all hover:-translate-y-0.5 hover:bg-teal-50 hover:shadow-md">
                    <span>📥</span>
                    Generate Full BRD
                </button>
            </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default ConversationPage