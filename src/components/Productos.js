import React, { Component } from 'react'
import formatCurrency from "../util";
import Fade from 'react-reveal/Fade';
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom"
export default class Productos extends Component {
    constructor(props){
        super(props);
        this.state ={
            producto: null
        }
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
                <ul className="productos">
                    {this.props.productos.map(producto =>(
                        <li key={producto._id}>
                            <div className="producto">
                                <a href={"#" + producto._id} onClick={()=>this.openModal(producto)}>
                                    <img src={producto.imagen} alt={producto.titulo}></img>
                                    <div className="producto-precio">
                                    <button
                                    onClick={()=> this.props.agregarACarrito(producto)} 
                                    className="button primary"><i class="fas fa-shopping-basket"></i>     Agregar a carrito</button>
                                    </div>
                                    <div className="precio-titulo">
                                    {formatCurrency(producto.precio)} 
                                    <p>{producto.titulo}</p>
                                    </div>
                                    
                                </a>
                                
                            </div>
                        </li>
                    ))}
                </ul>
                </Fade>
                {
                    producto && (
                        <Modal isOpen={true}
                        onRequestClose={this.closeModal}>
                            <div className="zoom-detail">
                            <Zoom>
                                <buttom className="close-modal" onClick={this.closeModal}><i class="far fa-times-circle"></i></buttom>
                                <div className="product-detail">
                                    <img src={producto.imagen} alt={producto.titulo}></img>
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
