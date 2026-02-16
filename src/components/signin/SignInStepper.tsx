import React from 'react';
import { STEPS } from './constants';

interface SignInStepperProps {
  currentStep: number;
}

export const SignInStepper: React.FC<SignInStepperProps> = ({ currentStep }) => (
  <>
    <div className="mb-2.5 flex items-center">
      {STEPS.map((s, i) => (
        <React.Fragment key={s.id}>
          <div className="flex items-center gap-2">
            <div
              className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border-2.5 font-['Syne',sans-serif] text-xs font-extrabold transition-all ${
                s.id < currentStep
                  ? 'border-teal-700 bg-teal-700 text-white'
                  : s.id === currentStep
                    ? 'border-teal-600 bg-white text-teal-700 shadow-[0_0_0_5px_rgba(15,118,110,.1)]'
                    : 'border-[#d1dede] bg-white text-[#aababa]'
              }`}
            >
              {s.id < currentStep ? '✓' : s.id}
            </div>
            <span
              className={`whitespace-nowrap text-[11px] font-bold transition-colors ${
                s.id <= currentStep ? 'text-teal-700' : 'text-[#b0c4c4]'
              }`}
            >
              {s.label}
            </span>
          </div>
          {i < STEPS.length - 1 && (
            <div
              className={`mx-2 h-0.5 min-w-5 flex-1 rounded-full transition-colors ${
                s.id < currentStep
                  ? 'bg-linear-to-r from-teal-700 to-teal-400'
                  : 'bg-[#e8f0f0]'
              }`}
            />
          )}
        </React.Fragment>
      ))}
    </div>
    <div className="mb-8 h-1 overflow-hidden rounded bg-[#eef4f4]">
      <div
        className="h-full rounded bg-linear-to-r from-teal-700 to-teal-400 transition-[width] duration-500 ease-[cubic-bezier(.4,0,.2,1)]"
        style={{ width: `${(currentStep / 3) * 100}%` }}
      />
    </div>
  </>
);
