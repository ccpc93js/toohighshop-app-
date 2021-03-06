import React, { Component } from 'react'
import formatCurrency from "../util";
import Fade from 'react-reveal/Fade';
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom"
import { connect } from 'react-redux';
import {fetchProductos} from '../action/productActions'
import {agregarACarrito} from "../action/cartActions"
class Productos extends Component {
    constructor(props){
        super(props);
        this.state ={
            producto: null
        };
    };
    componentDidMount(){
        this.props.fetchProductos();
    }
    openModal=(producto)=>{
        this.setState({producto});
    }
    closeModal=()=>{
        this.setState({producto: null})
    }
    render() {
        const {producto}=this.state;
        return (
            <div>
            <Fade bottom cascade={true}>
                {
                    !this.props.productos ? (
                         <div>Loading...</div>
                         ):(
                    <ul className="productos">
                    {this.props.productos.map(producto =>(
                        <li key={producto._id}>
                            <div className="producto">
                                <a href={`/producto/${producto._id}`} >
                                    <img src={producto.imagen} alt={producto.titulo}></img>
                                </a>
                                <div className="producto-precio">
                                    <button
                                    onClick={()=>this.openModal(producto)} 
                                    className="button primary">COMPRA RAPIDA</button>
                                </div>
                                
                                
                                <div className="precio-titulo">
                                {formatCurrency(producto.precio)} 
                                <p>{producto.titulo}</p>
                                </div>
                                
                            </div>
                        </li>
                    ))}
                </ul>
                         )}
                
                </Fade>
                {
                    producto && (
                        <Modal isOpen={true}
                        onRequestClose={this.closeModal}>
                            <div className="zoom-detail">
                            <Zoom>
                                <buttom className="close-modal" onClick={this.closeModal}><i class="far fa-times-circle"></i></buttom>
                                <div className="product-detail">
                                <a href={`/producto/${producto._id}`}>
                                    <img src={producto.imagen} alt={producto.titulo}></img>
                                </a>   
                                    <div className="product-detail-description">
                                        <p>
                                            <strong>{producto.titulo}</strong>
                                        </p>
                                        <p>
                                            {producto.descripcion}
                                        </p>
                                        <p>
                                            Tallas disponibles:{" "}
                                            <strong>{producto.tallasDisponibles.map((x)=>(
                                                <span>{ "" } <buttom className="button">{x}</buttom></span>
                                            ))}</strong>
                                        </p>
                                        <div className="product-precio">
                                                <div>{formatCurrency(producto.precio)}</div>
                                                <br/>
                                                <br/>

                                                <buttom className="button primary" onClick={()=>{
                                                    this.props.agregarACarrito(producto);
                                                    this.closeModal();

                                                }}>AGREGAR A CARRITO</buttom>
                                        </div>
                                    </div>
                                </div>
                            </Zoom>
                            </div>
                        </Modal>
                    )
                }
            </div>
        )
    }
}


export default connect(
    (state)=>({productos: state.productos.filteredItems}),
    {fetchProductos,
    agregarACarrito
})(Productos);