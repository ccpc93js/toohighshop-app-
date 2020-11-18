

// import { connect } from 'mongoose'
import React, { Component } from 'react'
import {connect} from 'react-redux'
import {filtradorProductos, clasificacionProductos} from "../action/productActions"
class Filtrador extends Component {
    render() {
        return (
            !this.props.filteredProductos?(
                <div>Loading...</div>
            ):(
            <div className="filtrador">
                <div className="filtrador-resultado">{this.props.filteredProductos.length} Productos</div>
                <div className="filtrador-clasificacion">
                    Ordenar por precio{"    "}
                    <select className="select" value={this.props.clasificacion} onChange={(e)=>this.props.clasificacionProductos(this.props.filteredProductos, e.target.value)}>
                    
                    
                        <option value="ultimo">Ultimo </option>
                        <option value="menor">Menor</option>
                        <option value="mayor">Mayor</option>
                    </select>
                    <i className="fas fa-chevron-circle-down"></i>
                </div>
                <div className="filtrador-talla">
                    Filtrar por talla{"    "}
                    <select className="select" value={this.props.talla} onChange={(e)=>this.props.filtradorProductos(this.props.productos, e.target.value)}>
                        <option value="">Todas</option>
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                    </select>
                    <i className="fas fa-chevron-circle-down"></i>
                </div>
            </div>
        )
         ) }
}

export default connect((state)=>({
    talla: state.productos.talla,
    clasificacion: state.productos.clasificacion,
    productos:state.productos.items,
    filteredProductos: state.productos.filteredItems
}),
{
    filtradorProductos,
    clasificacionProductos,
})(Filtrador);