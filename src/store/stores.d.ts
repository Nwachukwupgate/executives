import {Subscriber } from "@/generated/graphql";

type navStore = {
  barIsOpen: boolean;
  toggleBar: (data: { val?: boolean }) => void;
};

type userStore = {
  user: Ict | null;
  setUserData: (data: Ict | null) => void;
};

interface authStore {
  authToken: string | null;
  refresh: string | null;
  setAuthToken: (data: string | null) => void;
}

type appStoreType = navStore & userStore & authStore;
type mutationType = [];