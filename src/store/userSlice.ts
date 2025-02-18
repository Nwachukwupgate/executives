import { StateCreator } from "zustand";
import { appStoreType, mutationType, userStore } from "./stores";

const createUserSlice: StateCreator<
  appStoreType,
  mutationType,
  [],
  userStore
> = (set) => ({
  user: null,
  setUserData: (user: any) => set(() => ({ user })),
});

export default createUserSlice;