import { create } from "zustand";

interface Store {
  drawingMode: boolean;
  setDrawingMode: (mode: boolean) => void;
}

const useStore = create<Store>((set) => ({
  drawingMode: false,
  setDrawingMode: (mode: boolean) => set({ drawingMode: mode }),
}));

export default useStore;
