//los codigos que estan comentados se comentaron por que al usar el redux y manejar los datos desde la store ya no son necesarios tenerlos aqui
// componetes-productos 1
import React from 'react';
import store from './store';
import {Provider} from 'react-redux'
import { BrowserRouter, Route,  } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen"
import Coleccion from "./screens/Coleccion"
import theme from './temaConfig'
import {ThemeProvider} from '@material-ui/core/styles'
import Contenedor from './components/Contenedor';
import ProductScreen from './screens/ProductScreen';




class App extends React.Component {
  // constructor(){
  //   super();
  //   this.state = {
  //     // productos:  data.productos,
  //     cartItems: localStorage.getItem("cartItems")? JSON.parse(localStorage.getItem("cartItems")):[],
  //     // talla:"",
  //     // clasificacion:"",
  //   };
  // }
  // createOrder=(order)=>{
  //   alert("necesito guardar la orden para " + order.nombre)
  // }
  // removerDeCarrito=(producto)=>{
  //   const cartItems = this.state.cartItems.slice();
  //   this.setState({
  //     cartItems: cartItems.filter((x) =>x._id !== producto._id)
  //   });
  //   localStorage.setItem("cartItems", JSON.stringify(cartItems.filter((x) =>x._id !== producto._id)));

  // }
  // agregarACarrito = (producto)=> {
  //   const cartItems = this.state.cartItems.slice();
  //   let alreadyInCart= false;
  //   cartItems.forEach((item)=>{
  //     if(item._id === producto._id){
  //       item.count++;
  //       alreadyInCart = true;
  //     }
  //   });
  //   if(!alreadyInCart){
  //     cartItems.push({...producto, count: 1});
  //   }
  //   this.setState({cartItems})
  //   localStorage.setItem("cartItems", JSON.stringify(cartItems))
  // };
  // clasificacionProductos=(event)=>{
  //   //implementar
  //   const clasificacion = event.target.value;
  //   console.log(event.target.value);
  //   this.setState((state)=>({
  //     clasificacion: clasificacion,
  //     productos : this.state.productos.slice().sort((a,b)=>
  //        clasificacion ==="menor"?
  //        ((a.precio > b.precio)? 1:-1):
  //        clasificacion === "mayor"?
  //        ((a.precio < b.precio)?1:-1):
  //        ((a._id < b._id)? 1:-1)
  //      )
  //   }))
  // }
  // filtradorProductos=(event)=>{
  //   //implementar
  //   console.log(event.target.value);
  //   if(event.target.value ===""){
  //     this.setState({talla: event.target.value, productos: data.productos})
  //   }else{
  //     this.setState({
  //       talla: event.target.value,
  //       productos: data.productos.filter(
  //         (producto) => producto.tallasDisponibles.indexOf(event.target.value) >=0 )
  //     });
  //   }
    
  // };
// ni clasificacionProductos ni filtradorProductos SE NECEITAN despues de  AGREGAR REDUX, ESTOS SE OBVIARAN

  render(){
    return (
    <Provider   store={store}>
    <ThemeProvider theme={theme}>
    <BrowserRouter>
    <div className="grid-container">
    <header>  
      <Contenedor/>
    </header>

      <main>
        <Route exact path="/" component={HomeScreen}/>
        <Route exact path="/coleccion" component={Coleccion}/>
        <Route exact path="/producto/:id" component={ProductScreen}/>
      </main>
      <footer>
        todos los derechos reservados
      </footer>
    </div>
    </BrowserRouter>
    </ThemeProvider>
    </Provider> 
  );
  }
}

export default App;

//Navbar-original
// <header>
// <a className="logo-principal" href="/">TOO HIGH</a>
// </header>