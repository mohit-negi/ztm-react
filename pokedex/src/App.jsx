import { Component } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemons: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((users) => {
        this.setState(() => {
          return { pokemons: users.users };
        });
      });
  }

  render() {
    const filteredPokemons = this.state.pokemons.filter((pokemon) => {
      return pokemon.firstName
        .toLocaleLowerCase()
        .includes(this.state.searchField);
    });

    return (
      <>
        <div>
          <h1>Pokedex</h1>
          <input
            className="searchbox"
            type="search"
            placeholder="search pokemons"
            onChange={(event) => {
              const searchField = event.target.value.toLocaleLowerCase();

              this.setState(() => {
                return { searchField };
              });
            }}
          />

          {filteredPokemons.map((item) => {
            console.log(item.firstName);
            return (
              <div key={item.id}>
                <h4>{item.firstName}</h4>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
