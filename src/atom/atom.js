import { atom, selector } from "recoil";
import all_product from "../assets/all_product";
export const searchItem = atom({
  key: "searchItem",
  default: "",
});

export const searchBarModal = atom({
  key: "searchBarModal",
  default: false,
});

export const allItems = atom({
  key: "allItems",
  default: all_product,
});

export const filteredItemsSelector = selector({
  key: "searchItemSelector",
  get: ({ get }) => {
    const items = get(allItems);
    const trimmedSearchItem = get(searchItem).toLowerCase().trim();

    if (!trimmedSearchItem) return [];

    return items.filter((item) => {
      return item.name.toLowerCase().includes(trimmedSearchItem);
    });
  },
});

// const searchItemSelector = selector({
//   key: "searchItemSelector",
//   get: () => {},
// });
