import { ReactNode, createContext } from "react";
import useHomePageService from "../Service/Home.service";

export const HomeContext = createContext<any>("");

export const HomeProvider = ({ children }: { children: ReactNode }) => {
  const homeService = useHomePageService();

  return (
    <HomeContext.Provider value={homeService}>{children}</HomeContext.Provider>
  );
};
