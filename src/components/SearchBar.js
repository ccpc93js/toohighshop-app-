import data from "../data.json"; 
import {useState} from 'react'


function SearchBar() {
  const[searchTerm, setSearchTerm] = useState("");
  const searchColeccion = data.productos
  return (
    <div className="searchBar">
      <input 
      type="text"
       placeholder="Buscar producto..." 
       onChange={(e) =>{setSearchTerm(e.target.value)}}/>
      <div className="containerElement">

      {searchColeccion.filter((val)=>{
        if (searchTerm === ""){
          return ""
        }else if (val.titulo.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
          return val
        }
    }).map((val, key)=>{
         return (
          <div className="user" key={key}>
         <a href={`/producto/${val._id}`} className="elementSearch">
            <img src={val.imagen} alt="" className="img-search"/>  
            <div>
              <p className="elementSearch-p">{val.titulo}</p>
              <p className="elementSearch-p">$ {val.precio}</p>
            </div>
         </a>

          </div>
        );
         })}
      </div>
    </div>
  );
}

export default SearchBar;
