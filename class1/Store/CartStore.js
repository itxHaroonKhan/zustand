import { create } from "zustand";

export const useStore = create((set) => ({
  search: "",
  products: [],
  
  setSearch: (val) => set({ search: val }),

  fetchProducts: async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    set({ products: data.products });
  }
}));