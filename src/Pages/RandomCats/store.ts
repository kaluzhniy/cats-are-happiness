import { types, flow } from "mobx-state-tree";
import { http } from "services/api";
import { GET_RANDOM_CAT } from "services/paths";
import { RandomCat } from "./models/RandomCat";

export enum MIME_TYPES {
  ANIMATED = "gif",
  STATIC = "jpg,png",
  ALL = "jpg,png,gif",
}

export const RandomCatStore = types
  .model("RandomCatStore", {
    currentCat: types.maybeNull(RandomCat),
  })
  .actions((self) => ({
    getRandomCat: flow(function* (type: MIME_TYPES) {
      try {
        const res = yield http.get(GET_RANDOM_CAT, {
          params: {
            mime_types: type,
          },
        });
        self.currentCat = res.data[0]
      } catch (error) {
        console.log(error);
      }
    }),
  }));
