import { useState } from "react";
import { first151Pokemon, getFullPokedexNumber } from "./Utils/index";
export default function SideNav(props) {
  const { selecedtPokemon, setSelectedPokemon, showSideMnu, handelToggleMenu } =
    props;
  const [searchValue, setSearchValue] = useState("");
  const filterPokemon = first151Pokemon.filter((ele, eleIndex) => {
    if (getFullPokedexNumber(eleIndex).includes(searchValue)) {
      return true;
    }
    if (ele.toLowerCase().includes(searchValue.toLowerCase())) {
      return true;
    }
    return false;
  });
  return (
    <nav className={" " + (!showSideMnu ? "open" : "")}>
      <div className={"header" + (!showSideMnu ? "open" : "")}>
        <button onClick={handelToggleMenu} className="open-nav-button">
          <i className="fa-solid fa-arrow-left-long"></i>
        </button>
        <h1 className="text-gradient">Pokèdex</h1>
      </div>
      <input
        placeholder="E.g.001 or Bulba..."
        type="text"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      />
      {filterPokemon.map((pokemon, pokemonIndex) => {
        const truePokedexNumber = first151Pokemon.indexOf(pokemon);
        return (
          <button
            onClick={() => {
              setSelectedPokemon(truePokedexNumber);
            }}
            key={pokemonIndex}
            className={
              "nav-card " +
              (pokemonIndex === selecedtPokemon ? " nav-card-selected" : " ")
            }
          >
            <p>{getFullPokedexNumber(truePokedexNumber)}</p>
            <p>{pokemon}</p>
          </button>
        );
      })}
    </nav>
  );
}
