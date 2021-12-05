import React from "react";
import { types, Instance } from "mobx-state-tree";

import { RandomCatStore } from "pages/RandomCats/store";
const store = types
  .model({
    randomCatStore: RandomCatStore,
  })
  .create({
    randomCatStore: {},
  });
export default store;

export const StoreContext = React.createContext({} as Instance<typeof store>);
