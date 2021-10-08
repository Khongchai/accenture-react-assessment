import create from "zustand";

export interface EditModeStoreType {
  toggle: () => void;
  mode: boolean;
}
/**
 * Toggle global edit mode
 */
export const useEditModeToggleStore = create<EditModeStoreType>((set) => ({
  mode: false,
  toggle: () => set((state) => ({ mode: !state.mode })),
}));
