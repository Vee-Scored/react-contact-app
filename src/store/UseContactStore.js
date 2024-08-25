import { create } from "zustand";

export const useContactStore = create((set)=>({
    contacts : [],
    addContact : (data) => set((state) => ({
        contacts : data
    })),
    deleteContact : (id) => set((state) => ({
        contacts : state.contacts.filter(contact => contact.id != id)
    }))

}))