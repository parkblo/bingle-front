import { create } from "zustand";

interface Store {
  drawingMode: boolean;
  radiusData: number;
  setDrawingMode: (mode: boolean) => void;
  setRadiusData: (radiusData: number) => void;
}

const useStore = create<Store>((set) => ({
  drawingMode: false,
  radiusData: 0,
  setDrawingMode: (mode: boolean) => set({ drawingMode: mode }),
  setRadiusData: (radius: number) => set({ radiusData: radius }),
}));

export default useStore;
