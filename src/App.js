// componetes-productos 1
import React from 'react';
import Filtrador from './components/Filtrador';
import Productos from './components/Productos';
import data from "./data.json";


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      productos:  data.productos,
      talla:"",
      clasificacion:"",
    };
  }
  clasificacionProductos=(event)=>{
    //implementar
    const clasificacion = event.target.value;
    console.log(event.target.value);
    this.setState((state)=>({
      clasificacion: clasificacion,
      productos : this.state.productos.slice().sort ((a,b)=>
         clasificacion ==="menor"?
         ((a.precio > b.precio)? 1:-1):
         clasificacion === "mayor"?
         ((a.precio < b.precio)?1:-1):
         ((a._id < b._id)? 1:-1)
       )
    }))
  }
  filtradorProductos=(event)=>{
    //implementar
    console.log(event.target.value);
    if(event.target.value ===""){
      this.setState({talla: event.target.value, productos: data.productos})
    }else{
      this.setState({
        talla: event.target.value,
        productos: data.productos.filter(
          (producto) => producto.tallasDisponibles.indexOf(event.target.value) >=0 )
      });
    }
    
  };
  render(){
    return (
    <div className="grid-container">
      <header>
        <a href="/">TooHigh shop </a>
      </header>

      <main>
        <div className="content">
          <div className="main">
            <Filtrador count={this.state.productos.length}
            talla={this.state.talla}
            clasificacion={this.state.clasificacion}
            filtradorProductos={this.filtradorProductos}
            clasificacionProductos={this.clasificacionProductos}
            ></Filtrador>

            <Productos productos={this.state.productos}></Productos></div>
          <div className="sidebar">cart items</div>
        </div>
      </main>
      <footer>
        todos los derechos reservados
      </footer>
    </div>
  );
  }
}

export default App;
