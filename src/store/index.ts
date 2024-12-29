import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import createAuthSlice from "./authSlice";
import createNavSlice from "./navSlice";
import { appStoreType } from "./stores";
import createUserSlice from "./userSlice";

export const useAppStore = create<appStoreType>()(
  persist(
    immer((...props) => ({
      ...createUserSlice(...props),
      ...createNavSlice(...props),
      ...createAuthSlice(...props),
    })),
    {
      name: "gmh_app",
      partialize: (state) => ({
        barIsOpen: state.barIsOpen,
        authToken: state.authToken,
        user: state.user,
        refresh: state.refresh,
      }),
    }
  )
);