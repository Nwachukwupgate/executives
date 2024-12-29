import { StateCreator } from "zustand";
import { appStoreType, authStore, mutationType } from "./stores";

const createAuthSlice: StateCreator<
  appStoreType,
  mutationType,
  [],
  authStore
> = (set) => ({
  authToken: null,
  refresh: null,
  setAuthToken: (token: string | null) => set(() => ({ authToken: token })),
});

export default createAuthSlice;