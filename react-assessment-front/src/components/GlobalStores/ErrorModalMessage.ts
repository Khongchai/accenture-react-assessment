import create from "zustand";

export interface ErrorModalType {
  errorMessageProps: ErrorMessageType;
  setErrorState: (state: ErrorMessageType) => void;
}

export interface ErrorMessageType {
  message?: string;
  backgroundColor?: string;
  textColor?: string;
  ariaLive?: "assertive" | "polite";
}

export const useErrorModalMessageStore = create<ErrorModalType>((set) => ({
  errorMessageProps: {
    backgroundColor: "secondary",
    message: "",
    textColor: "white",
    ariaLive: "assertive",
  } as ErrorMessageType,
  setErrorState: (newState: ErrorMessageType) =>
    set((state) => ({
      errorMessageProps: { ...state.errorMessageProps, ...newState },
    })),
}));
