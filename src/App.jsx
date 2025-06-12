import Header from "./Components/Header";
import SideNav from "./Components/SideNav";
import PokeCard from "./Components/PokeCard";
import { useState } from "react";
function App() {
  const [selecedtPokemon, setSelectedPokemon] = useState(0);
  const [showSideMnu, setShoeSideMnu] = useState(false);

  function handelToggleMenu() {
    setShoeSideMnu(!showSideMnu);
  }
  return (
    <>
      <Header handelToggleMenu={handelToggleMenu} />
      <SideNav
        showSideMnu={showSideMnu}
        handelToggleMenu={handelToggleMenu}
        selecedtPokemon={selecedtPokemon}
        setSelectedPokemon={setSelectedPokemon}
      />
      <PokeCard selecedtPokemon={selecedtPokemon} />
    </>
  );
}

export default App;
