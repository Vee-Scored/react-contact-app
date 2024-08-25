import { create } from "zustand";

export const useAuth = create((set) => ({
  authenticated: false,
  setAuth : (bool) => set ({authenticated : bool})
}));
