import React, { useState, useEffect, useRef, useCallback } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import {
  startConversation,
  sendConversationMessage,
  type ExtractedRequirement,
} from '../api';

type MessageRole = 'ai' | 'user';

interface ChatMessage {
  role: MessageRole;
  content: string;
  timestamp?: Date;
  requirement?: ExtractedRequirement;
}

interface SessionInfo {
  sessionId: number;
  projectName: string;
  clientName: string;
  domain: string;
  leadBA: string;
}

const formatTime = (d: Date) =>
  d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });

const SESSION_ID_KEY = 'analyst-session-id';

const getStoredSessionId = (): number | null => {
  try {
    const raw = sessionStorage.getItem(SESSION_ID_KEY);
    if (raw == null) return null;
    const n = parseInt(raw, 10);
    return Number.isNaN(n) ? null : n;
  } catch {
    return null;
  }
};

const ConversationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const sessionIdFromState = (location.state as { sessionId?: number } | null)?.sessionId ?? null;
  const sessionId = sessionIdFromState ?? getStoredSessionId();

  const [sessionInfo, setSessionInfo] = useState<SessionInfo | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isStarting, setIsStarting] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const hasStartedRef = useRef(false);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    if (messages.length > 0) scrollToBottom();
  }, [messages, scrollToBottom]);

  // Start conversation when we have sessionId
  useEffect(() => {
    if (sessionId == null || hasStartedRef.current) return;
    hasStartedRef.current = true;
    setError(null);
    setIsStarting(true);
    startConversation(sessionId)
      .then((res) => {
        setSessionInfo(res.data.sessionInfo);
        setMessages([
          {
            role: 'ai',
            content: res.data.message,
            timestamp: new Date(),
          },
        ]);
      })
      .catch((err) => {
        setError(
          err?.response?.data?.message ||
            err?.message ||
            'Failed to start conversation.'
        );
      })
      .finally(() => {
        setIsStarting(false);
      });
  }, [sessionId]);

  const handleSend = useCallback(() => {
    const text = inputValue.trim();
    if (!text || sessionId == null || isSending) return;

    setInputValue('');
    const userMessage: ChatMessage = {
      role: 'user',
      content: text,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setIsSending(true);
    setError(null);

    sendConversationMessage(sessionId, text)
      .then((res) => {
        const aiMessage: ChatMessage = {
          role: 'ai',
          content: res.data.aiResponse,
          timestamp: new Date(),
          requirement: res.data.requirementCaptured ? res.data.requirement : undefined,
        };
        setMessages((prev) => [...prev, aiMessage]);
      })
      .catch((err) => {
        setError(
          err?.response?.data?.message ||
            err?.message ||
            'Failed to send message.'
        );
      })
      .finally(() => {
        setIsSending(false);
      });
  }, [inputValue, sessionId, isSending]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleSend();
      }
    },
    [handleSend]
  );

  // No session: show prompt to start from flow
  if (sessionId == null && !isStarting) {
    return (
      <>
        <div className="bg-animation">
          <div className="particle" style={{ left: '10%', width: 60, height: 60, animationDelay: '0s' }} />
          <div className="particle" style={{ left: '30%', width: 40, height: 40, animationDelay: '2s' }} />
          <div className="particle" style={{ left: '50%', width: 80, height: 80, animationDelay: '4s' }} />
          <div className="particle" style={{ left: '70%', width: 50, height: 50, animationDelay: '6s' }} />
          <div className="particle" style={{ left: '90%', width: 70, height: 70, animationDelay: '8s' }} />
        </div>
        <div className="relative z-10 flex min-h-screen w-full items-center justify-center p-6">
          <div className="flex h-[900px] w-full max-w-[1600px] overflow-hidden rounded-3xl bg-white/95 shadow-[0_50px_100px_rgba(0,0,0,0.3)] ring-1 ring-white/50 backdrop-blur-2xl">
            <Sidebar />
            <div className="flex flex-1 flex-col items-center justify-center gap-4 bg-[#fafbfc] px-10">
              <p className="text-center text-[16px] text-slate-600">
                Start an AI session from the <strong>Stakeholders</strong> step: complete sign-in, project setup, then click &quot;Launch AI Session&quot;.
              </p>
              <NavLink to="/">
                <button
                  type="button"
                  onClick={() => navigate('/', { replace: true })}
                  className="rounded-xl bg-[linear-gradient(to_right,#0f766e,#14b8a6)] px-6 py-3 text-[14px] font-bold text-white shadow-md hover:shadow-lg"
                >
                  Go to Sign In
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="bg-animation">
        <div className="particle" style={{ left: '10%', width: 60, height: 60, animationDelay: '0s' }} />
        <div className="particle" style={{ left: '30%', width: 40, height: 40, animationDelay: '2s' }} />
        <div className="particle" style={{ left: '50%', width: 80, height: 80, animationDelay: '4s' }} />
        <div className="particle" style={{ left: '70%', width: 50, height: 50, animationDelay: '6s' }} />
        <div className="particle" style={{ left: '90%', width: 70, height: 70, animationDelay: '8s' }} />
      </div>

      <div className="relative z-10 flex min-h-screen w-full items-center justify-center p-6">
        <div className="flex h-[900px] w-full max-w-[1600px] overflow-hidden rounded-3xl bg-white/95 shadow-[0_50px_100px_rgba(0,0,0,0.3)] ring-1 ring-white/50 backdrop-blur-2xl">
          <Sidebar />

          <div className="flex flex-1 flex-col bg-[#fafbfc]">
            <div className="flex items-center justify-between border-b border-teal-900/10 bg-[linear-gradient(to_br,white,#f0fdfa)] px-10 py-6 shadow-sm">
              <div className="space-y-1">
                <h1 className="bg-[linear-gradient(to_right,#0f766e,#14b8a6)] bg-clip-text text-[32px] font-extrabold text-transparent">
                  AI Conversation Studio
                </h1>
                {sessionInfo && (
                  <p className="text-[13px] text-slate-600">
                    {sessionInfo.projectName} · {sessionInfo.domain}
                  </p>
                )}
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  className="flex items-center gap-2 rounded-xl border-2 border-teal-100 bg-white px-5 py-2.5 text-[13px] font-semibold text-teal-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-teal-200 hover:bg-teal-50 hover:shadow-md"
                >
                  <span>💾</span>
                  Save Session
                </button>
                <button
                  type="button"
                  className="flex items-center gap-2 rounded-xl bg-[linear-gradient(to_right,#0f766e,#14b8a6)] px-5 py-2.5 text-[13px] font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <span>⚡</span>
                  Generate BRD
                </button>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-[linear-gradient(to_br,#6366f1,#a855f7)] text-[14px] font-bold text-white shadow-md">
                  {sessionInfo?.leadBA?.slice(0, 2).toUpperCase() ?? 'KK'}
                </div>
              </div>
            </div>

            <div className="flex flex-1 flex-col gap-5 overflow-y-auto bg-[radial-gradient(circle_at_20%_50%,rgba(94,234,212,0.03)_0,transparent_50%),radial-gradient(circle_at_80%_80%,rgba(167,139,250,0.03)_0,transparent_50%)] px-10 py-6">
              {error && (
                <div className="rounded-xl border-2 border-red-200 bg-red-50 px-4 py-3 text-[13px] text-red-700">
                  {error}
                </div>
              )}

              {isStarting && (
                <div className="flex items-start gap-4">
                  <div className="flex h-[42px] w-[42px] flex-shrink-0 items-center justify-center rounded-xl bg-[linear-gradient(to_br,#0f766e,#14b8a6)] text-[18px] shadow-md">
                    🤖
                  </div>
                  <div className="flex max-w-[65%] flex-col gap-2">
                    <div className="rounded-2xl border border-gray-200 bg-white px-[22px] py-[18px]">
                      <div className="flex gap-1 rounded-lg bg-slate-100 px-3 py-2">
                        <div className="typing-dot" />
                        <div className="typing-dot" />
                        <div className="typing-dot" />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex items-start gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  <div
                    className={`flex h-[42px] w-[42px] flex-shrink-0 items-center justify-center rounded-xl text-[18px] shadow-md ${
                      msg.role === 'ai'
                        ? 'bg-[linear-gradient(to_br,#0f766e,#14b8a6)]'
                        : 'bg-[linear-gradient(to_br,#6366f1,#9333ea)]'
                    }`}
                  >
                    {msg.role === 'ai' ? '🤖' : '👤'}
                  </div>
                  <div
                    className={`flex max-w-[65%] flex-col gap-2 ${msg.role === 'user' ? 'items-end' : ''}`}
                  >
                    <div
                      className={
                        msg.role === 'user'
                          ? 'relative rounded-2xl border-b-4 border-b-teal-700 bg-[linear-gradient(to_right,#0f766e,#14b8a6)] px-[22px] py-[18px] text-[14px] leading-relaxed text-white shadow'
                          : 'relative rounded-2xl border border-gray-200 bg-white px-[22px] py-[18px] text-[14px] leading-relaxed text-gray-800 shadow'
                      }
                    >
                      {msg.content}
                    </div>
                    {msg.requirement && (
                      <div className="mt-2 w-full rounded-xl border-2 border-blue-300 bg-[linear-gradient(to_br,#eef2ff,#dbeafe)] p-4">
                        <div className="mb-2 text-[11px] font-bold uppercase tracking-wide text-blue-900">
                          ✨ Auto-Extracted Requirement
                        </div>
                        <div className="mb-1 flex items-center gap-2 rounded-lg border border-blue-200 bg-white px-3 py-2 text-[12px] shadow-sm">
                          <span className="text-[14px]">✓</span>
                          <span>{msg.requirement.text}</span>
                        </div>
                        <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-600">
                          <span className="rounded-md bg-blue-100 px-2 py-0.5 font-semibold text-blue-900">
                            {msg.requirement.reqNumber}
                          </span>
                          <span>{msg.requirement.category}</span>
                          <span>{msg.requirement.priority}</span>
                          <span className="font-medium text-emerald-700">
                            {msg.requirement.confidence}% confidence
                          </span>
                        </div>
                      </div>
                    )}
                    <div
                      className={`flex items-center gap-3 text-[11px] font-medium text-slate-400 ${
                        msg.role === 'user' ? 'justify-end' : ''
                      }`}
                    >
                      {msg.timestamp && <span>{formatTime(msg.timestamp)}</span>}
                      {msg.role === 'ai' && (
                        <span className="inline-flex items-center gap-1 rounded-md bg-[linear-gradient(to_right,#10b981,#059669)] px-2.5 py-1 text-[10px] font-bold text-white shadow">
                          <span>⚡</span>
                          AI Ready
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {isSending && (
                <div className="flex items-start gap-4">
                  <div className="flex h-[42px] w-[42px] flex-shrink-0 items-center justify-center rounded-xl bg-[linear-gradient(to_br,#0f766e,#14b8a6)] text-[18px] shadow-md">
                    🤖
                  </div>
                  <div className="flex max-w-[65%] flex-col gap-2">
                    <div className="rounded-2xl border border-gray-200 bg-white px-[22px] py-[18px]">
                      <div className="flex gap-1 rounded-lg bg-slate-100 px-3 py-2">
                        <div className="typing-dot" />
                        <div className="typing-dot" />
                        <div className="typing-dot" />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            <div className="border-y border-teal-100 bg-[linear-gradient(to_right,#f0fdfa,white)] px-10 py-4">
              <div className="mb-3 flex items-center justify-between">
                <div className="text-[11px] font-bold uppercase tracking-[0.1em] text-slate-500">
                  🎯 Smart Suggestions
                </div>
              </div>
              <div className="flex flex-wrap gap-2.5">
                <button
                  type="button"
                  className="rounded-full border-2 border-teal-300 bg-white px-4 py-2 text-[13px] font-semibold text-teal-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-teal-700 hover:bg-[linear-gradient(to_right,#0f766e,#14b8a6)] hover:text-white hover:shadow-md"
                >
                  🔒 What about security &amp; HIPAA compliance?
                </button>
                <button
                  type="button"
                  className="rounded-full border-2 border-teal-300 bg-white px-4 py-2 text-[13px] font-semibold text-teal-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-teal-700 hover:bg-[linear-gradient(to_right,#0f766e,#14b8a6)] hover:text-white hover:shadow-md"
                >
                  📱 iOS and Android both?
                </button>
                <button
                  type="button"
                  className="rounded-full border-2 border-teal-300 bg-white px-4 py-2 text-[13px] font-semibold text-teal-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-teal-700 hover:bg-[linear-gradient(to_right,#0f766e,#14b8a6)] hover:text-white hover:shadow-md"
                >
                  🔔 Should we add push notifications?
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3 border-t border-gray-200 bg-white px-10 py-5 shadow-[0_-2px_10px_rgba(0,0,0,0.03)]">
              <button
                type="button"
                className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-red-500 bg-[linear-gradient(to_right,#ef4444,#dc2626)] text-[20px] text-white shadow-md"
                aria-label="Voice input"
              >
                🎤
              </button>
              <button
                type="button"
                className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-gray-200 bg-white text-[20px] shadow-sm hover:-translate-y-0.5 hover:border-teal-700 hover:bg-teal-50 hover:shadow-md"
                aria-label="Attach"
              >
                📎
              </button>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={isSending || isStarting}
                className="flex-1 rounded-xl border-2 border-gray-200 bg-[#fafbfc] px-5 py-3 text-[14px] transition-all focus:border-teal-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-teal-400/30 disabled:opacity-60"
                placeholder="Type your message or press mic to speak..."
              />
              <button
                type="button"
                onClick={handleSend}
                disabled={!inputValue.trim() || isSending || isStarting}
                className="flex items-center gap-2 rounded-xl bg-[linear-gradient(to_right,#0f766e,#14b8a6)] px-7 py-3 text-[14px] font-bold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-xl disabled:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>Send</span>
                <span>→</span>
              </button>
            </div>
          </div>

          <div className="flex h-full w-[420px] flex-col overflow-y-auto border-l border-gray-200 bg-[linear-gradient(to_br,#fafbfc,#e0f2fe)] px-8 py-6 shadow-[-2px_0_10px_rgba(0,0,0,0.03)]">
            <div className="mb-6 flex items-center justify-between">
              <div className="bg-[linear-gradient(to_right,#0f766e,#14b8a6)] bg-clip-text text-[20px] font-extrabold text-transparent">
                Live Tracker
              </div>
              <div className="flex items-center gap-2 rounded-full bg-[linear-gradient(to_right,#ef4444,#dc2626)] px-3.5 py-1.5 text-[11px] font-bold text-white shadow-md">
                <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
                <span>LIVE</span>
              </div>
            </div>

            <div className="mb-5 rounded-2xl border border-teal-900/10 bg-[linear-gradient(to_br,white,#f0fdfa)] p-5 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
              <div className="mb-4 flex items-center justify-between">
                <div className="text-[13px] font-bold uppercase tracking-wide text-slate-500">
                  Completeness Score
                </div>
                <div className="bg-[linear-gradient(to_right,#0f766e,#14b8a6)] bg-clip-text text-[36px] font-extrabold text-transparent">
                  {messages.filter((m) => m.requirement).length > 0 ? '—' : '0'}%
                </div>
              </div>
              <div className="mb-4 h-[14px] w-full overflow-hidden rounded-full bg-gray-200 shadow-inner">
                <div
                  className="h-full rounded-full bg-[linear-gradient(to_right,#14b8a6,#5eead4)]"
                  style={{
                    width: `${Math.min(100, messages.filter((m) => m.requirement).length * 10)}%`,
                  }}
                />
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="rounded-xl bg-white p-3.5 text-center shadow-sm">
                  <div className="bg-[linear-gradient(to_right,#10b981,#059669)] bg-clip-text text-[24px] font-extrabold text-transparent">
                    {messages.filter((m) => m.requirement).length}
                  </div>
                  <div className="text-[10px] font-semibold uppercase tracking-wide text-slate-500">
                    Captured
                  </div>
                </div>
                <div className="rounded-xl bg-white p-3.5 text-center shadow-sm">
                  <div className="bg-[linear-gradient(to_right,#f59e0b,#d97706)] bg-clip-text text-[24px] font-extrabold text-transparent">
                    —
                  </div>
                  <div className="text-[10px] font-semibold uppercase tracking-wide text-slate-500">
                    Pending
                  </div>
                </div>
                <div className="rounded-xl bg-white p-3.5 text-center shadow-sm">
                  <div className="bg-[linear-gradient(to_right,#ef4444,#dc2626)] bg-clip-text text-[24px] font-extrabold text-transparent">
                    —
                  </div>
                  <div className="text-[10px] font-semibold uppercase tracking-wide text-slate-500">
                    Unclear
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-4 rounded-xl border border-blue-300 bg-[linear-gradient(to_br,#eef2ff,#dbeafe)] p-4 shadow-sm">
              <div className="mb-3 flex items-center gap-2">
                <span className="text-[20px]">💡</span>
                <div className="text-[12px] font-extrabold uppercase tracking-wide text-blue-900">
                  AI Insight
                </div>
              </div>
              <div className="text-[12px] font-medium leading-relaxed text-indigo-900">
                Requirements are extracted automatically. Keep describing features; the AI will ask follow-up questions and capture REQ-XXX items when confidence is high.
              </div>
            </div>

            <div className="mt-5 mb-3 flex items-center gap-2 text-[13px] font-extrabold uppercase tracking-wide text-gray-800">
              ✨ Recently Captured
            </div>

            {messages.filter((m) => m.requirement).length === 0 ? (
              <p className="text-[12px] text-slate-500">
                No requirements captured yet. Send a message describing a feature.
              </p>
            ) : (
              messages
                .filter((m) => m.requirement)
                .map((m) => {
                  const req = m.requirement!;
                  return (
                    <div
                      key={req.id}
                      className="mb-2.5 rounded-xl border-l-[5px] border-teal-500 bg-white p-4 shadow-md hover:-translate-y-0.5 hover:shadow-lg"
                    >
                      <div className="mb-1 text-[10px] font-bold uppercase tracking-wide text-slate-500">
                        {req.category}
                      </div>
                      <div className="mb-3 text-[13px] font-medium leading-relaxed text-gray-900">
                        {req.text}
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="rounded-md bg-emerald-100 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wide text-emerald-900 shadow-sm">
                          {req.reqNumber}
                        </span>
                        <div className="flex items-center gap-2">
                          <div className="h-1.5 w-[60px] overflow-hidden rounded-full bg-gray-200">
                            <div
                              className="h-full rounded-full bg-[linear-gradient(to_right,#10b981,#059669)]"
                              style={{ width: `${req.confidence}%` }}
                            />
                          </div>
                          <span className="text-[11px] font-semibold text-slate-500">
                            {req.confidence}%
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })
            )}

            <div className="mt-4 flex flex-col gap-2.5">
              <button
                type="button"
                className="flex items-center justify-center gap-2 rounded-xl bg-[linear-gradient(to_right,#0f766e,#14b8a6)] px-4 py-3 text-[13px] font-bold text-white shadow-md hover:-translate-y-0.5 hover:shadow-lg"
              >
                <span>👁️</span>
                View All Requirements
              </button>
              <button
                type="button"
                className="flex items-center justify-center gap-2 rounded-xl border-2 border-teal-700 bg-white px-4 py-3 text-[13px] font-bold text-teal-700 shadow-sm hover:bg-teal-50 hover:shadow-md"
              >
                <span>📥</span>
                Generate Full BRD
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConversationPage;
