import PocketBase, { Admin, Record } from "pocketbase";
import { createContext, createEffect, createSignal, JSX } from "solid-js";

export const pb = new PocketBase("http://localhost:8090");

export const useUsr = () => {
  return pb.authStore.model;
};
