import React from 'react';

interface SuccessOverlayProps {
  show: boolean;
  message: string;
}

export const SuccessOverlay: React.FC<SuccessOverlayProps> = ({
  show,
  message,
}) => {
  if (!show) return null;
  return (
    <div
      className="fixed inset-0 z-200 flex flex-col items-center justify-center gap-4 bg-linear-to-br from-[#040c0c] via-[#081a1a] to-[#0a2828]"
      style={{ animation: 'fadeIn 0.3s ease' }}
    >
      <div className="flex h-22 w-22 items-center justify-center rounded-full bg-linear-to-br from-teal-700 to-teal-300 text-4xl shadow-[0_0_0_18px_rgba(15,118,110,.1),0_0_60px_rgba(94,234,212,.3)]">
        🚀
      </div>
      <h2 className="font-['Syne',sans-serif] text-3xl font-extrabold text-white">
        Session Ready!
      </h2>
      <p className="max-w-[320px] text-center text-sm leading-relaxed text-white/42">
        Your AI workspace is being prepared. Redirecting to the conversation…
      </p>
      <div className="min-w-70 rounded-lg border border-teal-400/20 bg-teal-400/10 px-5 py-2 text-center font-mono text-[11.5px] text-teal-300">
        {message}
      </div>
      <div className="h-1 w-75 overflow-hidden rounded bg-white/10">
        <div
          className="h-full w-0 rounded bg-linear-to-r from-teal-700 to-teal-300"
          style={{ animation: 'fillbar 2.8s ease 0.7s forwards' }}
        />
      </div>
    </div>
  );
};
