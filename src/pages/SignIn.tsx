import React, { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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

  const goNext = useCallback(() => {
    if (step === 1 && !validateStep1()) return;
    if (step === 2 && !validateStep2()) return;
    if (step < 3) setStep((s) => s + 1);
  }, [step, validateStep1, validateStep2]);

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

  const launch = useCallback(() => {
    if (!validateStep3()) return;
    setShowSuccess(true);
    setSuccessMessage(LAUNCH_MESSAGES[0]);
  }, [validateStep3]);

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
        navigate('/conversation', { replace: true });
      }
    }, 380);
    return () => clearInterval(interval);
  }, [showSuccess, navigate]);

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
      {/* Animated background */}
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
                errors={{ email: errors.email, password: errors.password }}
                onEmailChange={(v) => updateForm('email', v)}
                onPasswordChange={(v) => updateForm('password', v)}
                onTogglePassword={() => setShowPassword((p) => !p)}
                onContinue={goNext}
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
