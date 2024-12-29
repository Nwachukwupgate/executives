import { StateCreator } from "zustand";
import { appStoreType, mutationType, navStore } from "./stores";

const createNavSlice: StateCreator<
  appStoreType,
  mutationType, //   [], ["zustand/persist", YourPersistedState]
  [],
  navStore
> = (set) => ({
  barIsOpen: false,
  toggleBar: ({ val }) =>
    set((state) => ({
      barIsOpen: typeof val !== "undefined" ? val : !state.barIsOpen,
    })),
});

export default createNavSlice;