import React, { Component } from 'react'
import formatCurrency from '../util';

export default class Cart extends Component {
    constructor(props){
        super(props);
        this.state = {
            email:"",
            nombre:"",
            direccion:"",
            showCheckout: false}
    }

    handleinput=(e)=>{
        this.setState({[e.target.name]: e.target.value });

    };
    createOrder=(e)=>{
        e.preventDefault();
        const order ={
            email: this.state.email,
            nombre: this.state.nombre,
            direccion: this.state.direccion,
            cartItems: this.props.cartItems
        }
        this.props.createOrder(order);
    }

    render() {
        const {cartItems}=this.props;
        return (
            <div>
                {cartItems.length === 0?(<div className="cart cart-header">Carrito vacio</div>
                ):(
                <div className="cart cart-header">Tienes {cartItems.length} en el carrito{""}
                </div>
                )}
                <div>
                 <div className="cart">
                    <ul className="cart-items">
                        {cartItems.map(item =>(
                            <li key={item._id}>
                                <div>
                                    <img src={item.imagen} alt={cartItems.titulo}></img>
                                </div>
                                <div>
                                    <div>{item.titulo}</div>
                                    <div className="right">
                                        {formatCurrency(item.precio)} x {item.count}{""}
                                        <button 
                                         className="button"
                                         onClick={()=>this.props.removerDeCarrito(item)}>Remover</button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                 </div> 
                 {cartItems.length !== 0 &&(
                     <div>
                    <div className="cart">
                    <div className="total">
                        Total:{""}
                        {formatCurrency(
                            cartItems.reduce((a,c) => a + c.precio * c.count, 0)
                        )}
                    </div>
                    <button onClick={()=>{
                        this.setState({showCheckout:true})
                    }} className="button primary">Continuar</button>
                 </div>
                 {this.state.showCheckout && (
                     <div className="cart">
                        <form onSubmit={this.createOrder}>
                            <ul className="form-container">
                                <li>
                                    <label>Email</label>
                                    <input
                                    name="email" 
                                    type="email" 
                                    required 
                                    onChange={this.handleinput}>
                                    </input>
                                </li>
                                
                                <li>
                                <label>Nombre</label>
                                <input 
                                name="nombre" 
                                type="text" 
                                required 
                                onChange={this.handleinput}>
                                </input>
                            </li>

                            <li>
                            <label>Direccion</label>
                            <input 
                            name="direccion"
                            type="text" 
                            required 
                            onChange={this.handleinput}>
                            </input>
                        </li>
                        <li>
                            <button className="button primary btn-person" type="submit">Listo</button>
                        </li>
                            </ul>
                        </form>
                     </div>
                 )}
                 </div>
                 )}    
            </div>
            </div>
            
        );
    }
}
