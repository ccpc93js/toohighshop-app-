import data from "../data.json"; 
import {useState} from 'react'


function SearchBar() {
  const[searchTerm, setSearchTerm] = useState("");
  const searchColeccion = data.productos
  return (
    <div className="App">
      <input 
      type="text"
       placeholder="Search..." 
       onChange={(e) =>{setSearchTerm(e.target.value)}}/>

      {searchColeccion.filter((val)=>{
        if (searchTerm === ""){
          return val
        }else if (val.titulo.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
          return val
        }
    }).map((val, key)=>{
         return (
          <div className="user" key={key}>
          <img src={val.imagen} alt="" className="img-search"/>  
          <p>{val.titulo}</p>

          </div>
        );
         })}
    </div>
  );
}

export default SearchBar;
