"use client";

import { Provider } from "react-redux";
import { store } from "@/redux/store";

type WithStoreProviderProps = Readonly<{
  children: React.ReactNode;
}>;
export default function WithStoreProvider(
  props: WithStoreProviderProps & {
    onDemandRevalidate?: ({
      redirectTo,
      pathTobeRevalidated,
    }: {
      pathTobeRevalidated: string;
      redirectTo: string;
    }) => Promise<any>;
  }
) {
  return <Provider store={store}>{props.children}</Provider>;
}
