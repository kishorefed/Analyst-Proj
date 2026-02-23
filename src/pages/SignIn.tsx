import React, { useState, useCallback, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuthStore } from '../store';
import {
  signIn as signInApi,
  createProject,
  addStakeholders,
  launchSession,
} from '../api';
import type { ApiErrorResponse } from '../api';
import {
  SignInLeftPanel,
  SignInStepper,
  StepSignIn,
  StepProjectSetup,
  StepStakeholders,
  SuccessOverlay,
  ROLES,
  LAUNCH_MESSAGES,
} from '../components/signin';
import type { SignInFormState, StakeholderRow } from '../components/signin';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const createStakeholder = (id: number, name = '', role = 'Product Owner'): StakeholderRow => ({
  id,
  name,
  role,
  email: '',
});

const initialFormState: SignInFormState = {
  email: '',
  password: '',
  clientName: '',
  projectName: '',
  domain: 'Healthcare',
  projectType: '',
  budget: '',
  timeline: '3 Months',
  engagement: '',
  priority: 'medium',
  brief: '',
  stakeholders: [
    createStakeholder(1, '', 'Product Owner'),
    // createStakeholder(2, '', 'Technical Lead'),
    // createStakeholder(3, '', 'Client Representative'),
  ],
  leadBaName: '',
  leadBaEmail: '',
  sessionLanguage: 'English',
  aiStyle: 'Professional & Formal',
  preSessionNotes: '',
};

let nextStakeholderId = 4;

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<SignInFormState>(initialFormState);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState(LAUNCH_MESSAGES[0]);
  const [signInError, setSignInError] = useState<string | null>(null);
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [projectId, setProjectId] = useState<number | null>(null);
  const [projectError, setProjectError] = useState<string | null>(null);
  const [isCreatingProject, setIsCreatingProject] = useState(false);
  const [launchError, setLaunchError] = useState<string | null>(null);
  const [isLaunching, setIsLaunching] = useState(false);
  const hasHydratedEmail = useRef(false);

  const rememberMe = useAuthStore((s) => s.rememberMe);
  const rememberedEmail = useAuthStore((s) => s.rememberedEmail);
  const setRememberMe = useAuthStore((s) => s.setRememberMe);
  const setAuthenticated = useAuthStore((s) => s.setAuthenticated);
  const setToken = useAuthStore((s) => s.setToken);
  const saveRememberedEmail = useAuthStore((s) => s.saveRememberedEmail);
  const clearRememberedEmail = useAuthStore((s) => s.clearRememberedEmail);

  useEffect(() => {
    if (hasHydratedEmail.current || !rememberedEmail) return;
    hasHydratedEmail.current = true;
    setForm((prev) => ({ ...prev, email: rememberedEmail }));
  }, [rememberedEmail]);

  const updateForm = useCallback(<K extends keyof SignInFormState>(
    key: K,
    value: SignInFormState[K]
  ) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  }, []);

  const validateStep1 = useCallback((): boolean => {
    const emailOk = EMAIL_REGEX.test(form.email.trim());
    const passwordOk = form.password.length >= 6;
    setErrors((e) => ({
      ...e,
      email: !emailOk,
      password: !passwordOk,
    }));
    return emailOk && passwordOk;
  }, [form.email, form.password]);

  const validateStep2 = useCallback((): boolean => {
    const clientOk = !!form.clientName.trim();
    const projectOk = !!form.projectName.trim();
    const typeOk = !!form.projectType;
    setErrors((e) => ({
      ...e,
      client: !clientOk,
      project: !projectOk,
      type: !typeOk,
    }));
    return clientOk && projectOk && typeOk;
  }, [form.clientName, form.projectName, form.projectType]);

  const validateStep3 = useCallback((): boolean => {
    const leadBaOk = !!form.leadBaName.trim();
    setErrors((e) => ({ ...e, leadBa: !leadBaOk }));
    return leadBaOk;
  }, [form.leadBaName]);

  const goNext = useCallback(async () => {
    if (step === 1) {
      if (!validateStep1()) return;
      setSignInError(null);
      setIsSigningIn(true);
      try {
        const res = await signInApi({
          email: form.email.trim(),
          password: form.password,
        });
        setToken(res.data.token);
        if (rememberMe) saveRememberedEmail(form.email);
        else clearRememberedEmail();
        setStep(2);
      } catch (err) {
        if (axios.isAxiosError(err) && err.response?.data) {
          const data = err.response.data as ApiErrorResponse;
          const message =
            data.message ||
            (data.errors && typeof data.errors === 'object'
              ? Object.values(data.errors).flat().join(' ')
              : undefined) ||
            err.response.statusText ||
            'Sign in failed. Please try again.';
          setSignInError(message);
        } else {
          setSignInError(
            err instanceof Error ? err.message : 'Sign in failed. Please try again.'
          );
        }
      } finally {
        setIsSigningIn(false);
      }
      return;
    }
    if (step === 2) {
      if (!validateStep2()) return;
      setProjectError(null);
      setIsCreatingProject(true);
      try {
        const res = await createProject({
          projectName: form.projectName.trim(),
          clientName: form.clientName.trim(),
          domain: form.domain,
          projectType: form.projectType,
          timeline: form.timeline,
          budgetRange: form.budget,
          priority: form.priority,
          engagementType: form.engagement,
          brief: form.brief.trim(),
        });
        setProjectId(Number(res.data.projectId));
        setStep(3);
      } catch (err) {
        if (axios.isAxiosError(err) && err.response?.data) {
          const data = err.response.data as ApiErrorResponse;
          const message =
            data.message ||
            (data.errors && typeof data.errors === 'object'
              ? Object.values(data.errors).flat().join(' ')
              : undefined) ||
            err.response.statusText ||
            'Failed to create project. Please try again.';
          setProjectError(message);
        } else {
          setProjectError(
            err instanceof Error ? err.message : 'Failed to create project. Please try again.'
          );
        }
      } finally {
        setIsCreatingProject(false);
      }
      return;
    }
    if (step < 3) setStep((s) => s + 1);
  }, [step, rememberMe, form.email, form.password, form.projectName, form.clientName, form.domain, form.projectType, form.timeline, form.budget, form.priority, form.engagement, form.brief, validateStep1, validateStep2, saveRememberedEmail, clearRememberedEmail]);

  const goBack = useCallback(() => {
    if (step > 1) setStep((s) => s - 1);
  }, [step]);

  const addStakeholder = useCallback(() => {
    const newSh = createStakeholder(nextStakeholderId++, '', ROLES[0]);
    setForm((prev) => ({
      ...prev,
      stakeholders: [...prev.stakeholders, newSh],
    }));
  }, []);

  const removeStakeholder = useCallback((id: number) => {
    setForm((prev) => ({
      ...prev,
      stakeholders: prev.stakeholders.filter((s) => s.id !== id),
    }));
  }, []);

  const updateStakeholder = useCallback(
    (id: number, field: keyof StakeholderRow, value: string) => {
      setForm((prev) => ({
        ...prev,
        stakeholders: prev.stakeholders.map((s) =>
          s.id === id ? { ...s, [field]: value } : s
        ),
      }));
    },
    []
  );

  const launch = useCallback(async () => {
    if (!validateStep3()) return;
    if (projectId == null) {
      setLaunchError('Project not found. Please go back and complete project setup.');
      return;
    }
    setLaunchError(null);
    setIsLaunching(true);
    try {
      await addStakeholders({
        projectId,
        stakeholders: form.stakeholders
          .filter((s) => s.name.trim() || s.email.trim() || s.role.trim())
          .map((s) => ({
            fullName: s.name.trim() || '—',
            email: s.email.trim() || '',
            role: s.role.trim() || 'Stakeholder',
          })),
      });
      await launchSession({
        projectId,
        leadBaName: form.leadBaName.trim(),
        leadBaEmail: form.leadBaEmail.trim(),
        sessionLanguage: form.sessionLanguage,
        aiStyle: form.aiStyle,
        sessionNotes: form.preSessionNotes.trim(),
      });
      setShowSuccess(true);
      setSuccessMessage(LAUNCH_MESSAGES[0]);
    } catch (err) {
      if (axios.isAxiosError(err) && err.response?.data) {
        const data = err.response.data as ApiErrorResponse;
        const message =
          data.message ||
          (data.errors && typeof data.errors === 'object'
            ? Object.values(data.errors).flat().join(' ')
            : undefined) ||
          err.response.statusText ||
          'Failed to launch session. Please try again.';
        setLaunchError(message);
      } else {
        setLaunchError(
          err instanceof Error ? err.message : 'Failed to launch session. Please try again.'
        );
      }
    } finally {
      setIsLaunching(false);
    }
  }, [validateStep3, projectId, form.stakeholders, form.leadBaName, form.leadBaEmail, form.sessionLanguage, form.aiStyle, form.preSessionNotes]);

  useEffect(() => {
    if (!showSuccess) return;
    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      if (i < LAUNCH_MESSAGES.length) {
        setSuccessMessage(LAUNCH_MESSAGES[i]);
      } else {
        clearInterval(interval);
        setShowSuccess(false);
        setAuthenticated(true);
        navigate('/conversation', { replace: true });
      }
    }, 380);
    return () => clearInterval(interval);
  }, [showSuccess, navigate, setAuthenticated]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (
        e.key === 'Enter' &&
        (e.target as HTMLElement).tagName !== 'TEXTAREA' &&
        (e.target as HTMLElement).tagName !== 'SELECT'
      ) {
        e.preventDefault();
        if (step < 3) goNext();
      }
    },
    [step, goNext]
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

      <div className="relative z-10 flex flex-1 justify-center items-center h-full w-full gap-5" onKeyDown={handleKeyDown}>
        <aside className="flex flex-col overflow-hidden">
          <SignInLeftPanel />
        </aside> 

        <div className="flex flex-col overflow-y-auto rounded-2xl bg-white shadow-[-24px_0_80px_rgba(0,0,0,.18)] [scrollbar-width:thin] [scrollbar-color:theme(colors.teal.100)_transparent]">
          <div className="flex min-h-full flex-1 flex-col px-14 pb-8 pt-11">
            <SignInStepper currentStep={step} />

            {step === 1 && (
              <StepSignIn
                email={form.email}
                password={form.password}
                showPassword={showPassword}
                rememberMe={rememberMe}
                errors={{ email: errors.email, password: errors.password }}
                onEmailChange={(v) => updateForm('email', v)}
                onPasswordChange={(v) => updateForm('password', v)}
                onTogglePassword={() => setShowPassword((p) => !p)}
                onRememberMeChange={setRememberMe}
                onContinue={goNext}
                signInError={signInError}
                isSigningIn={isSigningIn}
              />
            )}

            {step === 2 && (
              <StepProjectSetup
                clientName={form.clientName}
                projectName={form.projectName}
                domain={form.domain}
                projectType={form.projectType}
                budget={form.budget}
                timeline={form.timeline}
                engagement={form.engagement}
                priority={form.priority}
                brief={form.brief}
                errors={{
                  client: errors.client,
                  project: errors.project,
                  type: errors.type,
                }}
                onClientNameChange={(v) => updateForm('clientName', v)}
                onProjectNameChange={(v) => updateForm('projectName', v)}
                onDomainChange={(v) => updateForm('domain', v)}
                onProjectTypeChange={(v) => updateForm('projectType', v)}
                onBudgetChange={(v) => updateForm('budget', v)}
                onTimelineChange={(v) => updateForm('timeline', v)}
                onEngagementChange={(v) => updateForm('engagement', v)}
                onPriorityChange={(v) => updateForm('priority', v)}
                onBriefChange={(v) => updateForm('brief', v)}
                onBack={goBack}
                onNext={goNext}
                projectError={projectError}
                isCreatingProject={isCreatingProject}
              />
            )}

            {step === 3 && (
              <StepStakeholders
                stakeholders={form.stakeholders}
                leadBaName={form.leadBaName}
                leadBaEmail={form.leadBaEmail}
                sessionLanguage={form.sessionLanguage}
                aiStyle={form.aiStyle}
                preSessionNotes={form.preSessionNotes}
                clientName={form.clientName}
                projectName={form.projectName}
                domain={form.domain}
                timeline={form.timeline}
                projectType={form.projectType}
                errors={{ leadBa: errors.leadBa }}
                onAddStakeholder={addStakeholder}
                onRemoveStakeholder={removeStakeholder}
                onStakeholderChange={updateStakeholder}
                onLeadBaNameChange={(v) => updateForm('leadBaName', v)}
                onLeadBaEmailChange={(v) => updateForm('leadBaEmail', v)}
                onSessionLanguageChange={(v) => updateForm('sessionLanguage', v)}
                onAiStyleChange={(v) => updateForm('aiStyle', v)}
                onPreSessionNotesChange={(v) => updateForm('preSessionNotes', v)}
                onBack={goBack}
                onLaunch={launch}
                launchError={launchError}
                isLaunching={isLaunching}
              />
            )}
          </div>
        </div>
      </div>

      <SuccessOverlay show={showSuccess} message={successMessage} />
    </div>
  );
};

export default SignIn;
