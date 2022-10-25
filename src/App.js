import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";
import axios from 'axios'
import DataList from "react-datalist-field/build";



function App() {
  const [imagen, setImagen] = useState('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/201.png');
  const [valor, setValor] = useState('');
  const [stats, setStats] = useState([])
  const [name, setName] = useState('');
  const [tipos, setTipos] = useState([])
  const [efectivo, setEfectivo] = useState([])
  const [half, setHalf] = useState([])
  const [noDamage, setnoDamage] = useState([])
  const [halfFrom, setHalfFrom] = useState([])
  const [noDamageFrom, setnoDamageFrom] = useState([])
  const [efectivoFrom, setEfectivoFrom] = useState([])
  const [pokemon, setPokemon] = useState([])

  const [imagen2, setImagen2] = useState('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/201.png');
  const [valor2, setValor2] = useState('');
  const [stats2, setStats2] = useState([])
  const [name2, setName2] = useState('');
  const [tipos2, setTipos2] = useState([])
  const [efectivo2, setEfectivo2] = useState([])
  const [half2, setHalf2] = useState([])
  const [noDamage2, setnoDamage2] = useState([])
  const [halfFrom2, setHalfFrom2] = useState([])
  const [noDamageFrom2, setnoDamageFrom2] = useState([])
  const [efectivoFrom2, setEfectivoFrom2] = useState([])
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
      .then(function (response) {
        let array = []
        response.data.results.map((e) => {
          array.push(e.name)
        })
        setPokemon(array)

        /* setPokemon(response.data.sprites.front_shiny) */

      })
  }, [])
  const handleBuscar = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/" + valor)
      .then(function (response) {
        /*  fileDownload(response.data,"Hola.txt" ) */
        console.log(response)
        setTipos(response.data.types)
        setName(response.data.name);
        setStats(response.data.stats)
        console.log("Hola", response.data.types[0].type.name)
       /*  setImagen(response.data.sprites.versions["generation-v"]["black-white"].animated.front_shiny) */
        setImagen(response.data.sprites.other.home.front_shiny)
        console.log(response.data.sprites.other["official-artwork"].front_default)

        response.data.types.map((a) => {
          axios.get("https://pokeapi.co/api/v2/type/" + a.type.name).then(function (response) {
            console.log(response.data)
            setEfectivo([efectivo, ...response.data.damage_relations.double_damage_to])
            setHalf([half, ...response.data.damage_relations.half_damage_to])
            setnoDamage([noDamage, ...response.data.damage_relations.no_damage_to])
            setEfectivoFrom([efectivoFrom, ...response.data.damage_relations.double_damage_from])
            setHalfFrom([halfFrom, ...response.data.damage_relations.half_damage_from])
            setnoDamageFrom([noDamageFrom, ...response.data.damage_relations.no_damage_from])
          })
        })





      })
  }
  const handleBuscar2 = () => {

    axios
      .get("https://pokeapi.co/api/v2/pokemon/" + valor2)
      .then(function (response) {
        /*  fileDownload(response.data,"Hola.txt" ) */
        console.log(response)
        setTipos2(response.data.types)
        setName2(response.data.name);
        setStats2(response.data.stats)
        console.log(response.data.stats)
        setImagen2(response.data.sprites.other.home.front_shiny)
       /*  setImagen2(response.data.sprites.versions["generation-v"]["black-white"].animated.front_shiny) */
        response.data.types.map((a) => {
          axios.get("https://pokeapi.co/api/v2/type/" + a.type.name).then(function (response) {
            setEfectivo2([efectivo2, ...response.data.damage_relations.double_damage_to])
            setHalf2([half2, ...response.data.damage_relations.half_damage_to])
            setnoDamage2([noDamage2, ...response.data.damage_relations.no_damage_to])
            setEfectivoFrom2([efectivoFrom2, ...response.data.damage_relations.double_damage_from])
            setHalfFrom2([halfFrom2, ...response.data.damage_relations.half_damage_from])
            setnoDamageFrom2([noDamageFrom2, ...response.data.damage_relations.no_damage_from])

          })
        })
      })
  }
  const typeColor = {
    bug: "#D6C04C",
    dragon: "#071AEB",
    electric: "#E9FF00",
    fairy: "#ee99ac",
    fighting: "#c03128",
    fire: "#f18030",
    flying: "#a890f0",
    grass: "#78c850",
    ground: "#e0c068",
    ghost: "#705898",
    ice: "#98d8d8",
    normal: "#a9a878",
    poison: "#a140a0",
    psychic: "#f75888",
    rock: "#b8a037",
    water: "#6890f0",
    steel: "#b8b8d0",
    dark: "black"
  };


  return (
    <div className="App">

      {/*  <img src="https://fontmeme.com/permalink/221024/301ccfff624d656703ec93c550e64063.png" alt="fuente-pokemon" border="0" />
      <img width="200px" src={imagen} />
      <h2>{name}</h2>
      
      
      {stats.length != 0 ? stats.map((e)=><p>{e.base_stat} {e.stat.name}</p>

      ) : 'Hola'}
     
      
    
      <img src="https://nintenduo.com/wp-content/uploads/2022/06/Tabla-Tipos-Pokemon-GO-02.webp" /> */}
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
        rel="stylesheet"
      />
      <div class="container">
        <div class="card"> <p class="hp">
          <span>HP</span>
          {stats.length != 0 ? stats[0].base_stat : ""}
        </p>
          <img src={imagen} />
          <h2 class="poke-name">{name}</h2>
          <div class="types">
            {tipos.length != 0 ? tipos.map((a) => <li style={{ backgroundColor: typeColor[a.type.name], padding: "10px", borderRadius: "6px" }}>{a.type.name}</li>

            ) : 'Hola'}
          </div>
          <div class="stats">
            <div>
              <h3> {stats.length != 0 ? stats[1].base_stat : ""}</h3>
              <p>Ataque</p>
            </div>
            <div>
              <h3> {stats.length != 0 ? stats[2].base_stat : ""}</h3>
              <p>Defensa</p>
            </div>
            <div>
              <h3> {stats.length != 0 ? stats[5].base_stat : ""}</h3>
              <p>Velocidad</p>
            </div>
          </div>
          <div className="uk-flex uk-flex-row uk-flex-around">
            <div>
              <ul>
                <li className="negro">DEFENSA</li>
                <li className="negro">x2</li>
                {efectivoFrom.length != 0 ? efectivoFrom.map((e) => <li style={{ backgroundColor: typeColor[e.name], padding: "10px", borderRadius: "6px" }}>{e.name}</li>) : "Hola"}
                <li className="negro">x1</li>
                {halfFrom.length != 0 ? halfFrom.map((e) => <li style={{ backgroundColor: typeColor[e.name], padding: "10px", borderRadius: "6px" }}>{e.name}</li>) : "Hola"}
                <li className="negro">x0</li>
                {noDamageFrom.length != 0 ? noDamageFrom.map((e) => <li style={{ backgroundColor: typeColor[e.name], padding: "10px", borderRadius: "6px" }}>{e.name}</li>) : "Hola"}
              </ul>
            </div>
            <div>
              <ul>
                <li className="negro">ATACA</li>
                <li className="negro">x2</li>
                {efectivo.length != 0 ? efectivo.map((e) => <li style={{ backgroundColor: typeColor[e.name], padding: "10px", borderRadius: "6px" }}>{e.name}</li>) : "Hola"}
                <li className="negro">x1</li>
                {half.length != 0 ? half.map((e) => <li style={{ backgroundColor: typeColor[e.name], padding: "10px", borderRadius: "6px" }}>{e.name}</li>) : "Hola"}
                <li className="negro">x0</li>
                {noDamage.length != 0 ? noDamage.map((e) => <li style={{ backgroundColor: typeColor[e.name], padding: "10px", borderRadius: "6px" }}>{e.name}</li>) : "Hola"}
              </ul>
            </div>
          </div>

        </div>
        
        <div className="uk-flex uk-flex-column ">
       <img style={{marginBottom:"100px"}}src="https://fontmeme.com/permalink/221025/301ccfff624d656703ec93c550e64063.png" alt="fuente-pokemon" border="0" />
        <div className="uk-flex uk-flex-row">
          <div>
            <input placeholder="Seleccionar pokemon" className="uk-input" value={valor} list="hair-color" onChange={(e) => { setValor(e.target.value) }} />
            <datalist id="hair-color">
              {[pokemon.map(
                item => <option key={item} value={item} />
              )]}
            </datalist>
            <button onClick={handleBuscar} id="btn">Buscar</button>
          </div>
          <div>
            <input placeholder="Seleccionar pokemon" className="uk-input" value={valor2} list="hair-color" onChange={(e) => { setValor2(e.target.value) }} />

            <button onClick={handleBuscar2} id="btn">Buscar</button>
          </div>
          </div>
        </div>

        <div class="card"> <p class="hp">
          <span>HP</span>
          {stats2.length != 0 ? stats2[0].base_stat : ""}
        </p>
          <img src={imagen2} />
          <h2 class="poke-name">{name2}</h2>
          <div class="types">
            {tipos2.length != 0 ? tipos2.map((e) => <li style={{ backgroundColor: typeColor[e.type.name], padding: "10px", borderRadius: "6px" }}>{e.type.name}</li>

            ) : 'Hola'}
          </div>
          <div class="stats">
            <div>
              <h3> {stats2.length != 0 ? stats2[1].base_stat : ""}</h3>
              <p>Ataque</p>
            </div>
            <div>
              <h3> {stats2.length != 0 ? stats2[2].base_stat : ""}</h3>
              <p>Defensa</p>
            </div>
            <div>
              <h3> {stats2.length != 0 ? stats2[5].base_stat : ""}</h3>
              <p>Velocidad</p>
            </div>
          </div>
          <div className="uk-flex uk-flex-row uk-flex-around">
            <div className="uk-flex uk-flex-column uk-flex-middle uk-flex-top">
              <ul>
                <li className="negro">DEFENSA</li>
                <li className="negro">x2</li>
                {efectivoFrom2.length != 0 ? efectivoFrom2.map((e) => <li style={{ backgroundColor: typeColor[e.name], padding: "10px", borderRadius: "6px" }}>{e.name}</li>) : "Hola"}
                <li className="negro">x1</li>
                {halfFrom2.length != 0 ? halfFrom2.map((e) => <li style={{ backgroundColor: typeColor[e.name], padding: "10px", borderRadius: "6px" }}>{e.name}</li>) : "Hola"}
                <li className="negro">x0</li>
                {noDamageFrom2.length != 0 ? noDamageFrom2.map((e) => <li style={{ backgroundColor: typeColor[e.name], padding: "10px", borderRadius: "6px" }}>{e.name}</li>) : "Hola"}
              </ul>
            </div>
            <div>
              <ul>
                <li className="negro">ATACA</li>
                <li className="negro">x2</li>
                {efectivo2.length != 0 ? efectivo2.map((e) => <li style={{ backgroundColor: typeColor[e.name], padding: "10px", borderRadius: "6px" }}>{e.name}</li>) : "Hola"}
                <li className="negro">x1</li>
                {half2.length != 0 ? half2.map((e) => <li style={{ backgroundColor: typeColor[e.name], padding: "10px", borderRadius: "6px" }}>{e.name}</li>) : "Hola"}
                <li className="negro">x0</li>
                {noDamage2.length != 0 ? noDamage2.map((e) => <li style={{ backgroundColor: typeColor[e.name], padding: "10px", borderRadius: "6px" }}>{e.name}</li>) : "Hola"}
              </ul>
            </div>
          </div>
        </div>

      </div>



    </div>
  );
}

export default App;
