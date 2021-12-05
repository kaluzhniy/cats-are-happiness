import { useContext } from "react";
import { StoreContext } from "common/store";

export const useStore = () => {
  return useContext(StoreContext);
};
