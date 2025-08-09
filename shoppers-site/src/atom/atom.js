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

    return items.filter((item) =>
      item.name.toLowerCase().includes(trimmedSearchItem)
    );
  },
});

export const cartItem = atom({
  key: "cartItem",
  default: JSON.parse(localStorage.getItem("cartedItems") || "[]"),
  effects_UNSTABLE: [
    ({ onSet }) => {
      onSet((newValue) => {
        localStorage.setItem("cartedItems", JSON.stringify(newValue));
      });
    },
  ],
});

export const menItem = selector({
  key: "menItem",
  get: ({ get }) => {
    const items = get(allItems);
    return items.filter((item) => {
      return item.category === "men";
    });
  },
});
export const womenItem = selector({
  key: "womenItem",
  get: ({ get }) => {
    const items = get(allItems);
    return items.filter((item) => {
      return item.category === "women";
    });
  },
});
export const kidItem = selector({
  key: "kidItem",
  get: ({ get }) => {
    const items = get(allItems);
    return items.filter((item) => {
      return item.category === "kid";
    });
  },
});
