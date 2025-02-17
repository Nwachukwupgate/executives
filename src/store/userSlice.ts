import { Ict } from "@/generated/graphql";
import { StateCreator } from "zustand";
import { appStoreType, mutationType, userStore } from "./stores";

const createUserSlice: StateCreator<
  appStoreType,
  mutationType,
  [],
  userStore
> = (set) => ({
  user: null,
  setUserData: (user: Ict | null) => set(() => ({ user })),
});

export default createUserSlice;