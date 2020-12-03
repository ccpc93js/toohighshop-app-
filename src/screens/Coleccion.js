
import React, { Component } from "react";
import Filtrador from "../components/Filtrador";
import Productos from "../components/Productos";
import Cart from "../components/Cart";

export default class Coleccion extends Component {
  render() {
    return (
      <div>
        <div className="content">
          <div className="main">
            <Filtrador></Filtrador>
            <Productos></Productos>
          </div>
          <div className="sidebar">
            <Cart />
          </div>
        </div>
      </div>
    );
  }
}

//esto es lo que habia en App.js

// <div className="content">
//           <div className="main">
//             <Filtrador
//             //  count={this.state.productos.length}
//             // talla={this.state.talla}
//             // clasificacion={this.state.clasificacion}
//             // filtradorProductos={this.filtradorProductos}
//             // clasificacionProductos={this.clasificacionProductos}
//             ></Filtrador>

//             <Productos 
//               // productos={this.state.productos}
//               // agregarACarrito={this.agregarACarrito}
//             ></Productos>

//             </div>
//           <div className="sidebar">
//           <Cart 
//           // cartItems={this.state.cartItems} 
//           // removerDeCarrito={this.removerDeCarrito}
//           // createOrder={this.createOrder}
//           />
//           </div>
//         </div>