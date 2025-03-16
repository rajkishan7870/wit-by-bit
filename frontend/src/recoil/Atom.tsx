import { atom } from "recoil";

export const addProductState = atom<Boolean>({
  key: "addProductState",
  default: false, 
});


export const catModalState = atom<boolean>({
    key: "catModalState",
    default: false, 
  });
