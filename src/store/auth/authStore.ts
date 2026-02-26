import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

const AUTH_STORAGE_KEY = 'analyst-auth';

export interface AuthState {
  //  True after user completes sign-in + project setup + stakeholders (Launch). 
  isAuthenticated: boolean;
  /** JWT from sign-in; used for project/launch API calls. */
  token: string | null;
  rememberMe: boolean;
  rememberedEmail: string;
  setAuthenticated: (value: boolean) => void;
  setToken: (value: string | null) => void;
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
      token: null,
      rememberMe: false,
      rememberedEmail: '',
      setAuthenticated: (value) => set({ isAuthenticated: value }),
      setToken: (value) => set({ token: value }),
      setRememberMe: (value) => set({ rememberMe: value }),
      setRememberedEmail: (email) => set({ rememberedEmail: email }),
      saveRememberedEmail: (email) =>
        set({ rememberMe: true, rememberedEmail: email.trim() }),
      clearRememberedEmail: () =>
        set({ rememberedEmail: '', rememberMe: false }),
      logout: () => {
        sessionStorage.removeItem('analyst-session-id');
        set({ isAuthenticated: false, token: null });
      },
    }),
    {
      name: AUTH_STORAGE_KEY,
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        isAuthenticated: state.isAuthenticated,
        token: state.token,
        rememberMe: state.rememberMe,
        rememberedEmail: state.rememberedEmail,
      }),
    }
  )
);
