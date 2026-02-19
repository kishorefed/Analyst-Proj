import { NavLink, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store";

const Sidebar = () => {
  const navigate = useNavigate();
  const logout = useAuthStore((s) => s.logout);

  const handleLogout = () => {
    logout();
    navigate("/", { replace: true });
  };

  const mainLinkBase =
    "relative mb-1 flex cursor-pointer items-center gap-3 rounded-xl px-[18px] py-[14px] text-[15px] transition-all";
  const mainLinkInactive =
    "font-medium text-white/80 hover:translate-x-1 hover:bg-white/10 hover:text-white";
  const mainLinkActive =
    "font-semibold text-white shadow-md bg-white/15";

  const getMainLinkClass = (isActive: boolean) =>
    `${mainLinkBase} ${isActive ? mainLinkActive : mainLinkInactive}`;

  return (
    <div className="relative flex h-full w-70 flex-col overflow-hidden border-r border-white/10 bg-linear-to-b from-teal-700/95 to-teal-900/95 px-6 py-6 backdrop-blur-2xl">
      <div className="mb-10 flex cursor-pointer items-center gap-3 text-white text-[28px] font-extrabold drop-shadow-lg">
        <div className="flex h-10.5 w-10.5 items-center justify-center rounded-xl bg-linear-to-br from-teal-300 to-teal-500 text-2xl shadow-[0_4px_12px_rgba(94,234,212,0.4)]">
          ✨
        </div>
        AnalystAI
      </div>

      <div className="mb-6">
        <div className="mb-2.5 pl-4 text-[11px] font-bold uppercase tracking-[0.15em] text-white/50">
          Main
        </div>

        <NavLink to="/conversation" end className={({ isActive }) => getMainLinkClass(isActive)}>
          <span className="flex h-6 w-6 items-center justify-center text-[20px]">💬</span>
          Conversation
        </NavLink>

        <NavLink
          to="/requirements"
          className={({ isActive }) => getMainLinkClass(isActive)}
        >
          <span className="flex h-6 w-6 items-center justify-center text-[20px]">📋</span>
          Requirements
          <span className="ml-auto rounded-md bg-linear-to-br from-blue-500 to-blue-600 px-2 py-0.75 text-[10px] font-bold text-white shadow-[0_2px_6px_rgba(59,130,246,0.4)]">
            127
          </span>
        </NavLink>

        <NavLink
          to="/analytics"
          className={({ isActive }) => getMainLinkClass(isActive)}
        >
          <span className="flex h-6 w-6 items-center justify-center text-[20px]">📊</span>
          Analytics
        </NavLink>

        <NavLink
          to="/documents"
          className={({ isActive }) => getMainLinkClass(isActive)}
        >
          <span className="flex h-6 w-6 items-center justify-center text-[20px]">📄</span>
          Documents
        </NavLink>
      </div>

      <div className="mb-6">
        <div className="mb-2.5 pl-4 text-[11px] font-bold uppercase tracking-[0.15em] text-white/50">
          Collaboration
        </div>
        <div className="relative mb-1 flex cursor-pointer items-center gap-3 rounded-xl px-4.5 py-3.5 text-[15px] font-medium text-white/80 transition-all hover:translate-x-1 hover:bg-white/10 hover:text-white">
          <span className="flex h-6 w-6 items-center justify-center text-[20px]">👥</span>
          Team
          <span className="ml-auto rounded-md bg-linear-to-br from-red-500 to-red-600 px-2 py-0.75 text-[10px] font-bold text-white shadow-[0_2px_6px_rgba(239,68,68,0.4)]">
            3
          </span>
        </div>
        <div className="relative mb-1 flex cursor-pointer items-center gap-3 rounded-xl px-4.5 py-3.5 text-[15px] font-medium text-white/80 transition-all hover:translate-x-1 hover:bg-white/10 hover:text-white">
          <span className="flex h-6 w-6 items-center justify-center text-[20px]">🔔</span>
          Activity
          <span className="ml-auto rounded-md bg-linear-to-br from-red-500 to-red-600 px-2 py-0.75 text-[10px] font-bold text-white shadow-[0_2px_6px_rgba(239,68,68,0.4)]">
            8
          </span>
        </div>
      </div>

      <div className="mb-6">
        <div className="mb-2.5 pl-4 text-[11px] font-bold uppercase tracking-[0.15em] text-white/50">
          Tools
        </div>
        <div className="relative mb-1 flex cursor-pointer items-center gap-3 rounded-xl px-4.5 py-3.5 text-[15px] font-medium text-white/80 transition-all hover:translate-x-1 hover:bg-white/10 hover:text-white">
          <span className="flex h-6 w-6 items-center justify-center text-[20px]">🔌</span>
          Integrations
        </div>
        <div className="relative mb-1 flex cursor-pointer items-center gap-3 rounded-xl px-4.5 py-3.5 text-[15px] font-medium text-white/80 transition-all hover:translate-x-1 hover:bg-white/10 hover:text-white">
          <span className="flex h-6 w-6 items-center justify-center text-[20px]">⚙️</span>
          Settings
        </div>
      </div>

      <div className="mt-auto rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-md">
        <div className="mb-2 text-[14px] font-semibold text-white">
          Healthcare App
        </div>
        <div className="mb-3 flex items-center justify-between text-[11px]">
          <span className="text-white/60">Project Progress</span>
          <span className="font-bold text-teal-200">82%</span>
        </div>
        <div className="h-2.5 w-full overflow-hidden rounded-full bg-black/20 shadow-inner">
          <div className="h-full w-[82%] rounded-full bg-linear-to-r from-teal-600 to-teal-300"></div>
        </div>
      </div>

      <div className="pt-4 border-t border-white/10">
        <button
          type="button"
          onClick={handleLogout}
          className="relative mb-1 flex w-full cursor-pointer items-center gap-3 rounded-xl px-4.5 py-3.5 text-[15px] font-medium text-white/80 transition-all hover:translate-x-1 hover:bg-red-500/20 hover:text-red-200"
        >
          <span className="flex h-6 w-6 items-center justify-center text-[20px]">🚪</span>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

