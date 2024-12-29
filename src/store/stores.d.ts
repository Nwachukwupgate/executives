import {Subscriber } from "@/generated/graphql";

type navStore = {
  barIsOpen: boolean;
  toggleBar: (data: { val?: boolean }) => void;
};

type userStore = {
  user: Subscriber | null;
  setUserData: (data: Subscriber | null) => void;
};

interface authStore {
  authToken: string | null;
  refresh: string | null;
  setAuthToken: (data: string | null) => void;
}

type appStoreType = navStore & userStore & authStore;
type mutationType = [];