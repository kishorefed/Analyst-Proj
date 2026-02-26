import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { SignUpLeftPanel } from '../components/signin';
import { signUp } from '../api';
import type { ApiErrorResponse } from '../api';
import axios from 'axios';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type PasswordStrength = 'none' | 'weak' | 'medium' | 'strong';

function getPasswordStrength(pwd: string): PasswordStrength {
  if (!pwd.length) return 'none';
  let score = 0;
  if (pwd.length >= 8) score++;
  if (/[a-z]/.test(pwd) && /[A-Z]/.test(pwd)) score++;
  if (/\d/.test(pwd)) score++;
  if (/[^a-zA-Z0-9]/.test(pwd)) score++;
  if (score <= 1) return 'weak';
  if (score <= 3) return 'medium';
  return 'strong';
}

const inputBase =
  'w-full rounded-lg border-2 bg-[#f5fefe] px-3.5 py-2.5 pl-10 text-[13.5px] text-[#081212] outline-none transition-[border-color,box-shadow,background] focus:border-teal-400 focus:bg-white focus:shadow-[0_0_0_4px_rgba(15,118,110,.09)]';
const inputError =
  'border-red-500 bg-red-50/80 focus:border-red-500 focus:shadow-red-500/10';

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<{
    name?: boolean;
    email?: boolean;
    password?: boolean;
    confirmPassword?: boolean;
  }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const strength = getPasswordStrength(password);

  const validate = useCallback((): boolean => {
    const nameOk = fullName.trim().length > 0;
    const emailOk = EMAIL_REGEX.test(email.trim());
    const passwordOk = password.length >= 8;
    const confirmOk = password === confirmPassword && confirmPassword.length > 0;
    setErrors({
      name: !nameOk,
      email: !emailOk,
      password: !passwordOk,
      confirmPassword: !confirmOk,
    });
    return nameOk && emailOk && passwordOk && confirmOk;
  }, [fullName, email, password, confirmPassword]);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (!validate()) return;
      setSubmitError(null);
      setIsSubmitting(true);
      try {
        await signUp({
          email,
          password,
          fullName,
          company: company.trim() || undefined,
        });
        setShowSuccess(true);
        setTimeout(() => navigate('/', { replace: true }), 2000);
      } catch (err) {
        if (axios.isAxiosError(err) && err.response?.data) {
          const data = err.response.data as ApiErrorResponse;
          const message =
            data.message ||
            (data.errors && typeof data.errors === 'object'
              ? Object.values(data.errors).flat().join(' ')
              : undefined) ||
            err.response.statusText ||
            'Sign up failed. Please try again.';
          setSubmitError(message);
        } else {
          setSubmitError(
            err instanceof Error ? err.message : 'Sign up failed. Please try again.'
          );
        }
      } finally {
        setIsSubmitting(false);
      }
    },
    [validate, navigate, email, password, fullName, company]
  );

  return (
    <div className="relative flex h-screen w-screen overflow-hidden bg-[#081212] font-['DM_Sans',sans-serif]">
      <div
        className="signin-bg fixed inset-0 z-0 bg-linear-to-br from-[#040c0c] via-[#081a1a] to-[#0c3535]"
        aria-hidden
      />
      <div
        className="pointer-events-none fixed z-0 h-[400px] w-[400px] rounded-full bg-teal-700/20 blur-[70px] animate-[drift_22s_ease-in-out_infinite]"
        style={{ top: -140, right: -100 }}
        aria-hidden
      />
      <div
        className="pointer-events-none fixed z-0 h-[260px] w-[260px] rounded-full bg-teal-300/10 blur-[55px] animate-[drift_22s_ease-in-out_infinite]"
        style={{ bottom: -70, left: -70, animationDelay: '-8s' }}
        aria-hidden
      />
      <div
        className="pointer-events-none fixed z-0 h-[180px] w-[180px] rounded-full bg-teal-400/10 blur-[45px] animate-[drift_22s_ease-in-out_infinite]"
        style={{ top: '42%', left: '32%', animationDelay: '-15s' }}
        aria-hidden
      />

      <div className="relative mx-44 z-10 flex flex-1 justify-center items-center h-full w-full gap-5">
        <aside className="flex flex-col overflow-hidden">
          <SignUpLeftPanel />
        </aside>

        <div className="flex flex-col overflow-y-auto rounded-2xl bg-white shadow-[-24px_0_80px_rgba(0,0,0,.18)] [scrollbar-width:thin] [scrollbar-color:var(--color-teal-100)_transparent]">
          <div className="flex min-h-full flex-1 flex-col px-14 pb-8 pt-11">
            <div className="mb-7">
              <h2 className="mb-1 font-['Syne',sans-serif] text-[26px] font-extrabold leading-tight text-[#081212]">
                Create your account 🎉
                <br />
                <em className="not-italic bg-linear-to-r from-teal-700 to-teal-400 bg-clip-text text-[26px] font-extrabold text-transparent">
                  Start your first project today
                </em>
              </h2>
              <p className="text-[13px] leading-relaxed text-[#4d6b6b]">
                Join AnalystAI and transform how you gather requirements.
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
              or sign up with email
            </div>

            <form onSubmit={handleSubmit} className="grid gap-3.5">
              <div className="grid grid-cols-2 gap-3.5">
                <div className="flex flex-col gap-1.5">
                  <label className="flex items-center gap-1.5 text-[11.5px] font-bold tracking-wide text-[#0f2525]">
                    <span className="text-red-600">*</span> Full Name
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[15px]">
                      👤
                    </span>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="John Doe"
                      className={`${inputBase} ${errors.name ? inputError : 'border-[#dceaea]'}`}
                    />
                  </div>
                  {errors.name && (
                    <div className="flex items-center gap-1.5 text-[11px] text-red-600">
                      ⚠ Please enter your full name
                    </div>
                  )}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="flex items-center gap-1.5 text-[11.5px] font-bold tracking-wide text-[#0f2525]">
                    Company{' '}
                    <span className="rounded bg-[#f0f7f7] px-2 py-0.5 text-[9.5px] font-semibold text-[#9bb8b8]">
                      optional
                    </span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[15px]">
                      🏢
                    </span>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Your company name"
                      className={`${inputBase} border-[#dceaea]`}
                    />
                  </div>
                </div>
              </div>

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
                    onChange={(e) => setEmail(e.target.value)}
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

              <div className="grid grid-cols-2 gap-3.5">
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
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Create a strong password"
                      className={`${inputBase} pr-10 ${errors.password ? inputError : 'border-[#dceaea]'}`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((p) => !p)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-[15px] text-[#4d6b6b] hover:text-teal-700"
                      aria-label="Toggle password visibility"
                    >
                      {showPassword ? '🙈' : '👁'}
                    </button>
                  </div>
                  <div className="h-1 overflow-hidden rounded bg-[#e8f0f0]">
                    <div
                      className="h-full rounded transition-all duration-300"
                      style={{
                        width:
                          strength === 'none'
                            ? 0
                            : strength === 'weak'
                              ? '33%'
                              : strength === 'medium'
                                ? '66%'
                                : '100%',
                        backgroundColor:
                          strength === 'weak'
                            ? '#ef4444'
                            : strength === 'medium'
                              ? '#f59e0b'
                              : strength === 'strong'
                                ? '#059669'
                                : 'transparent',
                      }}
                    />
                  </div>
                  <p
                    className={`text-[11px] ${
                      strength === 'weak'
                        ? 'text-red-500'
                        : strength === 'medium'
                          ? 'text-amber-500'
                          : strength === 'strong'
                            ? 'text-emerald-600'
                            : 'text-[#9ab8b8]'
                    }`}
                  >
                    {strength === 'none' &&
                      'At least 8 characters with letters and numbers'}
                    {strength === 'weak' && '⚠ Weak password — add more characters'}
                    {strength === 'medium' && '✓ Medium strength — good!'}
                    {strength === 'strong' && '✓ Strong password!'}
                  </p>
                  {errors.password && (
                    <div className="flex items-center gap-1.5 text-[11px] text-red-600">
                      ⚠ Password must be at least 8 characters
                    </div>
                  )}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="flex items-center gap-1.5 text-[11.5px] font-bold tracking-wide text-[#0f2525]">
                    <span className="text-red-600">*</span> Confirm Password
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[15px]">
                      🔒
                    </span>
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Re-enter password"
                      className={`${inputBase} pr-10 ${errors.confirmPassword ? inputError : 'border-[#dceaea]'}`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword((p) => !p)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-[15px] text-[#4d6b6b] hover:text-teal-700"
                      aria-label="Toggle password visibility"
                    >
                      {showConfirmPassword ? '🙈' : '👁'}
                    </button>
                  </div>
                  {errors.confirmPassword && (
                    <div className="flex items-center gap-1.5 text-[11px] text-red-600">
                      ⚠ Passwords do not match
                    </div>
                  )}
                </div>
              </div>

              <div className="flex gap-3 rounded-r-xl border border-[#e8fff8] border-l-4 border-l-teal-600 bg-linear-to-r from-[#f0fdfa] to-[#e8fff8] p-3.5">
                <span className="text-lg">🔒</span>
                <p className="text-[12px] leading-relaxed text-[#0f2525]">
                  <strong>Your data is secure.</strong> We use industry-standard
                  encryption and never share your information with third parties.
                </p>
              </div>

              {submitError && (
                <div className="flex items-center gap-2 rounded-lg border-2 border-red-500/30 bg-red-50/90 px-3.5 py-2.5 text-[12px] text-red-700">
                  ⚠ {submitError}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-br from-teal-700 to-teal-400 px-6 py-3 font-['Syne',sans-serif] text-sm font-bold tracking-wide text-white shadow-[0_6px_22px_rgba(15,118,110,.3)] transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(15,118,110,.42)] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? 'Creating account...' : 'Create Account & Start Free'}
              </button>
            </form>

            <p className="mt-6 text-center text-[12.5px] text-[#a8c0c0]">
              Already have an account?{' '}
              <button
                type="button"
                onClick={() => navigate('/', { replace: true })}
                className="cursor-pointer font-bold text-teal-700 no-underline hover:underline bg-transparent border-0 p-0"
              >
                Sign in →
              </button>
            </p>
          </div>
        </div>
      </div>

      {/* Success overlay */}
      {showSuccess && (
        <div className="fixed inset-0 z-200 flex flex-col items-center justify-center gap-4 bg-linear-to-br from-[#040c0c] via-[#081a1a] to-[#0a2828]">
          <div className="flex h-22 w-22 items-center justify-center rounded-full bg-linear-to-br from-teal-700 to-teal-400 text-4xl shadow-[0_0_0_18px_rgba(15,118,110,.1),0_0_60px_rgba(94,234,212,.3)]">
            🎉
          </div>
          <div className="font-['Syne',sans-serif] text-[32px] font-extrabold text-white">
            Account Created!
          </div>
          <p className="max-w-[320px] text-center text-[14px] leading-relaxed text-white/42">
            Welcome to AnalystAI. Redirecting to sign in...
          </p>
        </div>
      )}
    </div>
  );
};

export default SignUp;
