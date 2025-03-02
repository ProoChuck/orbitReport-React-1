import Buttons from "./components/Buttons";
import Table from "./components/Table";
import Banner from "./components/Banner";
import { useState } from 'react';
import satData from "./components/satData";


function App() {
    const[sat, setSat] = useState(satData);
    const dispaySats = [...new Set(satData.map((data) => data.orbitType))];
    const filterByType = (currentType) => {
        const displaySats = satData.filter((newSatDisplay) => {
            return newSatDisplay.orbitType === currentType;
        });
        setSat(displaySats);
    };
    return(
    <>
      <Banner/>
      <Buttons
        filterByType={filterByType}
        setSat={setSat}
        displaySats={dispaySats} 
      />
      <Table sat={sat}/>
    </>
  );
}

export default App;
