import { create } from "zustand";

interface Store {
  drawingMode: boolean;
  dashboardOpen: boolean;
  radiusData: number;
  dataType: string;
  topN: number;
  centerCoord: { latitude: number; longitude: number };
  setDrawingMode: (mode: boolean) => void;
  setRadiusData: (radiusData: number) => void;
  setDashboardOpen: (open: boolean) => void;
  setDataType: (dataType: string) => void;
  setTopN: (topN: number) => void;
  setCenterCoord: (coord: { latitude: number; longitude: number }) => void;
}

const useStore = create<Store>((set) => ({
  drawingMode: false,
  dashboardOpen: false,
  radiusData: 0,
  dataType: "NACH_R400M",
  topN: 100,
  centerCoord: { latitude: 0, longitude: 0 },
  setDrawingMode: (mode: boolean) => set({ drawingMode: mode }),
  setRadiusData: (radius: number) => set({ radiusData: radius }),
  setDashboardOpen: (open: boolean) => set({ dashboardOpen: open }),
  setDataType: (dataType: string) => set({ dataType: dataType }),
  setTopN: (topN: number) => set({ topN: topN }),
  setCenterCoord: (coord: { latitude: number; longitude: number }) =>
    set({ centerCoord: coord }),
}));

export default useStore;
