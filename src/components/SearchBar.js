import data from "../data.json"; 
import {useState} from 'react'


function SearchBar() {
  const[searchTerm, setSearchTerm] = useState("");
  const searchColeccion = data.productos
  return (
    <div className="searchBar">
      <input 
      type="text"
       placeholder="Search..." 
       onChange={(e) =>{setSearchTerm(e.target.value)}}/>

      {searchColeccion.filter((val)=>{
        if (searchTerm === ""){
          return ""
        }else if (val.titulo.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
          return val
        }
    }).map((val, key)=>{
         return (
          <div className="user" key={key}>
         <a href={`/producto/${val._id}`}>
            <img src={val.imagen} alt="" className="img-search"/>  
            <p>{val.titulo}</p>
         </a>

          </div>
        );
         })}
    </div>
  );
}

export default SearchBar;
