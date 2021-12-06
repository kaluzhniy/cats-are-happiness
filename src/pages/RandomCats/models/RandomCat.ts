import { types } from "mobx-state-tree";

export const RandomCat = types.model("RandomCat", {
  id: types.string,
  url: types.string,
  width: types.number,
  height: types.number,
});
