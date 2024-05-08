import { create } from "zustand";

interface Store {
  drawingMode: boolean;
  radiusData: number;
  dashboardOpen: boolean;
  setDrawingMode: (mode: boolean) => void;
  setRadiusData: (radiusData: number) => void;
  setDashboardOpen: (open: boolean) => void;
}

const useStore = create<Store>((set) => ({
  drawingMode: false,
  dashboardOpen: false,
  radiusData: 0,
  setDrawingMode: (mode: boolean) => set({ drawingMode: mode }),
  setRadiusData: (radius: number) => set({ radiusData: radius }),
  setDashboardOpen: (open: boolean) => set({ dashboardOpen: open }),
}));

export default useStore;
