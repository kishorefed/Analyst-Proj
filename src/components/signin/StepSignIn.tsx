import React from 'react';

interface StepSignInProps {
  email: string;
  password: string;
  showPassword: boolean;
  rememberMe: boolean;
  errors: { email?: boolean; password?: boolean };
  onEmailChange: (v: string) => void;
  onPasswordChange: (v: string) => void;
  onTogglePassword: () => void;
  onRememberMeChange: (v: boolean) => void;
  onContinue: () => void;
}

const inputBase =
  'w-full rounded-lg border-2 bg-[#f5fefe] px-3.5 py-2.5 pl-10 text-[13.5px] text-[#081212] outline-none transition-[border-color,box-shadow,background] focus:border-teal-400 focus:bg-white focus:shadow-[0_0_0_4px_rgba(15,118,110,.09)]';
const inputError = 'border-red-500 bg-red-50/80 focus:border-red-500 focus:shadow-red-500/10';

export const StepSignIn: React.FC<StepSignInProps> = ({
  email,
  password,
  showPassword,
  rememberMe,
  errors,
  onEmailChange,
  onPasswordChange,
  onTogglePassword,
  onRememberMeChange,
  onContinue,
}) => (
  <div className="flex flex-1 flex-col">
    <div className="mb-6">
      <h2 className="mb-1 font-['Syne',sans-serif] text-[26px] font-extrabold leading-tight text-[#081212]">
        Welcome back 👋
        <br />
        <em className="not-italic bg-linear-to-r from-teal-700 to-teal-400 bg-clip-text text-[26px] font-extrabold text-transparent">
          Sign in to your workspace
        </em>
      </h2>
      <p className="text-[13px] leading-relaxed text-[#4d6b6b]">
        Access AnalystAI and start a new client session.
      </p>
    </div>

    <div className="grid grid-cols-2 gap-2.5">
      <button
        type="button"
        className="flex items-center justify-center gap-2 rounded-lg border-2 border-[#dceaea] bg-white py-2.5 text-[12.5px] font-semibold text-[#0f2525] transition-colors hover:border-teal-400 hover:bg-teal-50 hover:text-teal-700"
      >
        🏢 Google
      </button>
      <button
        type="button"
        className="flex items-center justify-center gap-2 rounded-lg border-2 border-[#dceaea] bg-white py-2.5 text-[12.5px] font-semibold text-[#0f2525] transition-colors hover:border-teal-400 hover:bg-teal-50 hover:text-teal-700"
      >
        🔷 Microsoft
      </button>
    </div>

    <div className="my-4 flex items-center gap-2.5 text-[11.5px] text-[#b8cccc] [&::after]:h-px [&::after]:flex-1 [&::after]:bg-[#e8f0f0] [&::before]:h-px [&::before]:flex-1 [&::before]:bg-[#e8f0f0]">
      or sign in with email
    </div>

    <div className="grid gap-3.5">
      <div className="flex flex-col gap-1.5">
        <label className="flex items-center gap-1.5 text-[11.5px] font-bold tracking-wide text-[#0f2525]">
          <span className="text-red-600">*</span> Work Email
        </label>
        <div className="relative">
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[15px]">
            📧
          </span>
          <input
            type="email"
            value={email}
            onChange={(e) => onEmailChange(e.target.value)}
            placeholder="you@company.com"
            className={`${inputBase} ${errors.email ? inputError : 'border-[#dceaea]'}`}
          />
        </div>
        {errors.email && (
          <div className="flex items-center gap-1.5 text-[11px] text-red-600">
            ⚠ Please enter a valid email address
          </div>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="flex items-center gap-1.5 text-[11.5px] font-bold tracking-wide text-[#0f2525]">
          <span className="text-red-600">*</span> Password
        </label>
        <div className="relative">
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[15px]">
            🔒
          </span>
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => onPasswordChange(e.target.value)}
            placeholder="Enter your password"
            className={`${inputBase} pr-10 ${errors.password ? inputError : 'border-[#dceaea]'}`}
          />
          <button
            type="button"
            onClick={onTogglePassword}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[15px] text-[#4d6b6b] hover:text-teal-700"
            aria-label="Toggle password visibility"
          >
            {showPassword ? '🙈' : '👁'}
          </button>
        </div>
        {errors.password && (
          <div className="flex items-center gap-1.5 text-[11px] text-red-600">
            ⚠ Password must be at least 6 characters
          </div>
        )}
      </div>

      <div className="-mt-1 flex items-center justify-between mb-2">
        <label className="flex cursor-pointer items-center gap-2 text-[12.5px] text-[#a8c0c0]">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => onRememberMeChange(e.target.checked)}
            className="h-4 w-4 rounded border-2 border-[#dceaea] text-teal-600 focus:ring-teal-400 accent-teal-700"
          />
          Remember me
        </label>
        <a
          href="#"
          className="text-[12.5px] font-bold text-teal-700 no-underline hover:underline"
        >
          Forgot password?
        </a>
      </div>
    </div>

    <div className="mt-auto flex items-center justify-between border-t border-[#eef4f4] pt-6">
      <p className="m-0 text-left text-[12.5px] text-[#a8c0c0]">
        New here? <a className="cursor-pointer font-bold text-teal-700 no-underline hover:underline">Create account →</a>
      </p>
      <button
        type="button"
        onClick={onContinue}
        className="flex items-center gap-2 rounded-xl bg-linear-to-br from-teal-700 to-teal-400 px-6 py-3 font-['Syne',sans-serif] text-sm font-bold tracking-wide text-white shadow-[0_6px_22px_rgba(15,118,110,.3)] transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(15,118,110,.42)]"
      >
        Continue <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
      </button>
    </div>
  </div>
);
