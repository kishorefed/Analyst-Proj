import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

const AUTH_STORAGE_KEY = 'analyst-auth';

export interface AuthState {
  rememberMe: boolean;
  rememberedEmail: string;
  setRememberMe: (value: boolean) => void;
  setRememberedEmail: (email: string) => void;
  /** Call after successful sign-in when "Remember me" is checked. */
  saveRememberedEmail: (email: string) => void;
  /** Clear stored email (e.g. when user unchecks Remember me or signs out). */
  clearRememberedEmail: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      rememberMe: false,
      rememberedEmail: '',
      setRememberMe: (value) => set({ rememberMe: value }),
      setRememberedEmail: (email) => set({ rememberedEmail: email }),
      saveRememberedEmail: (email) =>
        set({ rememberMe: true, rememberedEmail: email.trim() }),
      clearRememberedEmail: () =>
        set({ rememberedEmail: '', rememberMe: false }),
    }),
    {
      name: AUTH_STORAGE_KEY,
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        rememberMe: state.rememberMe,
        rememberedEmail: state.rememberedEmail,
      }),
    }
  )
);
