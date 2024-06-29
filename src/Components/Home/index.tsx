import { HomeContext, HomeProvider } from "./Context/Home.context";
import HomeView from "./View/Home.view";
import Home2View from "./View/Home2.view";

const Home = () => {
  return (
    <HomeProvider>
      <HomeView />
      <Home2View />
    </HomeProvider>
  );
};

export default Home;
