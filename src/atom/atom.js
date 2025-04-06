import { atom, selector } from "recoil";

const user = atom({
    key: "user",
    default: null,
});

export { user };

