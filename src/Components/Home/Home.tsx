import CompA from "./CompA/CompA";

const Home = () => {
  const data = "Hai from home comp";

  return (
    <div>
      <CompA data={data} />
    </div>
  );
};

export default Home;
