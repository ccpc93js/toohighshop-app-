// componetes-productos 1
import React from 'react';
import Cart from './components/Cart';
import Filtrador from './components/Filtrador';
import Productos from './components/Productos';
import data from "./data.json";


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      productos:  data.productos,
      cartItems: localStorage.getItem("cartItems")? JSON.parse(localStorage.getItem("cartItems")):[],
      talla:"",
      clasificacion:"",
    };
  }
  createOrder=(order)=>{
    alert("necesito guardar la orden para " + order.nombre)
  }
  removerDeCarrito=(producto)=>{
    const cartItems = this.state.cartItems.slice();
    this.setState({
      cartItems: cartItems.filter((x) =>x._id !== producto._id)
    });
    localStorage.setItem("cartItems", JSON.stringify(cartItems.filter((x) =>x._id !== producto._id)));

  }
  agregarACarrito = (producto)=> {
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart= false;
    cartItems.forEach((item)=>{
      if(item._id === producto._id){
        item.count++;
        alreadyInCart = true;
      }
    });
    if(!alreadyInCart){
      cartItems.push({...producto, count: 1});
    }
    this.setState({cartItems})
    localStorage.setItem("cartItems", JSON.stringify(cartItems))
  };
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
        <a className="logo-principal" href="/">TooHigh shop </a>
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

            <Productos 
              productos={this.state.productos}
              agregarACarrito={this.agregarACarrito}
            ></Productos></div>
          <div className="sidebar">
          <Cart 
          cartItems={this.state.cartItems} 
          removerDeCarrito={this.removerDeCarrito}
          createOrder={this.createOrder}
          />
          </div>
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
