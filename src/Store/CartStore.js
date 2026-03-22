import { create } from "zustand";

export const useStore = create((set) => ({
  search: "", // Initial value khali hai
  setSearch: (val) => set({ search: val }), // Search update karne ka function
  
  // Fake products list testing ke liye
  products: ["Apple", "Samsung", "Nokia", "Google Pixel","Hamza","Haroon"]
}));