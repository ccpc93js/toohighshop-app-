import React, { Component } from 'react'
import data from "../data.json"; 
import "./Home.css"

// import Fade from 'react-reveal/Fade';



class  Home extends Component {
    constructor(){
          super();
          this.state = {
            colecciones:  data.colecciones,
            
           };
    }
    
    render() {
        return (

            
            <div className="coleccion-img " >
                {
                    this.state.colecciones.map(coleccion =>{
                    return <div className="container">
                    <div className="row"> 
                                    <div className="col-4 card">
                                    <a href="/coleccion">
                                    <img src={coleccion.imagen} alt="imagen de la coleccion" className=""></img>
                                    </a>
                                    </div>
                                    <div className="col-4 card">
                                    <a href="/coleccion">
                                    <img src={coleccion.imagen} alt="imagen de la coleccion" className=""></img>
                                    </a>
                                    </div>
                                    <div className="col-4 card">
                                    <a href="/coleccion">
                                    <img src={coleccion.imagen} alt="imagen de la coleccion" className=""></img>
                                    </a>
                                    </div>
                            </div>
                            <div className="row"> 
                                    <div className="col-4 card">
                                    <a href="/coleccion">
                                    <img src={coleccion.imagen} alt="imagen de la coleccion" className=""></img>
                                    </a>
                                    </div>
                                    <div className="col-4 card">
                                    <a href="/coleccion">
                                    <img src={coleccion.imagen} alt="imagen de la coleccion" className=""></img>
                                    </a>
                                    </div>
                                    <div className="col-4 card">
                                    <a href="/coleccion">
                                    <img src={coleccion.imagen} alt="imagen de la coleccion" className=""></img>
                                    </a>
                                    </div>
                            </div>
                            </div>
                })}
                
            </div>
            
        )
    }
}

export default Home
