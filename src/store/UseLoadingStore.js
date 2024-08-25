import { create } from "zustand";

export const useLoading = create((set) => ({
    isLoading : false,
    setLoading : () => set({isLoading : true}),
    setLoaded : () => set({isLoading : false})
}))