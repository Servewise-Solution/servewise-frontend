import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IProvider } from "../../models/provider";

type ProviderReduxData = Omit<IProvider, "createdAt" | "updatedAt">;

interface TechnicianState {
  providerData: ProviderReduxData | null;
}

const initialState: TechnicianState = {
  providerData: null,
};

const providerSlice = createSlice({
  name: "provider",
  initialState,
  reducers: {
    setProviderData: (state, action: PayloadAction<ProviderReduxData>) => {
      state.providerData = action.payload;
    },
    updateProviderData: (
      state,
      action: PayloadAction<Partial<ProviderReduxData>>
    ) => {
      if (state.providerData) {
        state.providerData = {
          ...state.providerData,
          ...action.payload,
        };
      }
    },
    clearProviderData: (state) => {
      state.providerData = null;
    },
  },
});

export const { setProviderData, updateProviderData, clearProviderData } =
  providerSlice.actions;

export default providerSlice.reducer;
