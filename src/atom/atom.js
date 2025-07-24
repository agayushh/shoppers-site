import { atom, selector } from "recoil";

export const searchItem = atom({
  key: "searchItem",
  default: "",
});

// const searchItemSelector = selector({
//   key: "searchItemSelector",
//   get: () => {},
// });

