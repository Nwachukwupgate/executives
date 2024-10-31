import { useSyncExternalStore } from "react";

const useWidthChange = () => {
  return useSyncExternalStore(subscribe, getSnapShot);
};

export default useWidthChange;

function subscribe(callback: () => void) {
  window.addEventListener("resize", callback);

  return () => window.removeEventListener("resize", callback);
}

function getSnapShot() {
  return window.innerWidth;
}
