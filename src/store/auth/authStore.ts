import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

const AUTH_STORAGE_KEY = 'analyst-auth';

export interface AuthState {
  //  True after user completes sign-in + project setup + stakeholders (Launch). 
  isAuthenticated: boolean;
  rememberMe: boolean;
  rememberedEmail: string;
  setAuthenticated: (value: boolean) => void;
  setRememberMe: (value: boolean) => void;
  setRememberedEmail: (email: string) => void;
  //  Call after successful sign-in when "Remember me" is checked. 
  saveRememberedEmail: (email: string) => void;
  //  Clear stored email (e.g. when user unchecks Remember me or signs out). 
  clearRememberedEmail: () => void;
  //  Logout: clear session and optionally keep rememberedEmail for next visit. 
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      rememberMe: false,
      rememberedEmail: '',
      setAuthenticated: (value) => set({ isAuthenticated: value }),
      setRememberMe: (value) => set({ rememberMe: value }),
      setRememberedEmail: (email) => set({ rememberedEmail: email }),
      saveRememberedEmail: (email) =>
        set({ rememberMe: true, rememberedEmail: email.trim() }),
      clearRememberedEmail: () =>
        set({ rememberedEmail: '', rememberMe: false }),
      logout: () => set({ isAuthenticated: false }),
    }),
    {
      name: AUTH_STORAGE_KEY,
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        isAuthenticated: state.isAuthenticated,
        rememberMe: state.rememberMe,
        rememberedEmail: state.rememberedEmail,
      }),
    }
  )
);
