import { createContext } from "react";
import CompA from "./CompA/CompA";

export const HomeContext = createContext<any>(null);

const Home = () => {
  const data = "Hai from home comp";

  return (
    <div>
      <HomeContext.Provider value={{ data: data }}>
        <CompA />
      </HomeContext.Provider>
    </div>
  );
};

export default Home;
