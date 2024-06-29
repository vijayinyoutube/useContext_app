import React, { useContext } from 'react'
import useHomePageService from '../Service/Home.service';
import { HomeContext } from '../Context/Home.context';

const Home2View = () => {
  const { first, setfirst } = useContext(HomeContext);

  const handleIncrement = () => {
    setfirst((first: number) => first + 1);
  };

  return (
    <div>
      Home2View {first}
      <div>
        <button onClick={handleIncrement}>Click</button>
      </div>
    </div>
  );
}

export default Home2View