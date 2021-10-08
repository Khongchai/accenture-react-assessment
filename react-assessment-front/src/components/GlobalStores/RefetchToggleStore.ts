import create from "zustand";

export interface RefetchStoreType {
  toggle: () => void;
  refetch: boolean;
}
/**
 * Toggle refetch of anything depending on it from anywhere
 */
export const useRefetchToggleStore = create<RefetchStoreType>((set) => ({
  refetch: false,
  toggle: () => set((state) => ({ refetch: !state.refetch })),
}));
