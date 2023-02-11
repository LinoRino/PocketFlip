import PocketBase from "pocketbase";
import { createContext, JSX, useContext } from "solid-js";

export const pb = new PocketBase("http://localhost:8090");

const pbcDefaultValue = {
  pb: pb,
  usr: pb.authStore.model,
};

const pbContext = createContext(pbcDefaultValue);

export function PBContextProvider(props: { children: JSX.Element }) {
  return (
    <pbContext.Provider value={{ pb: pb, usr: pb.authStore.model }}>
      {props.children}
    </pbContext.Provider>
  );
}

export const usePB = () => {
  return useContext(pbContext).pb;
};
export const useUsr = () => {
  return useContext(pbContext).usr;
};
