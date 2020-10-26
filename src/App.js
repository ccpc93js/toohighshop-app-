// componetes-productos 1
import React from 'react';
import Productos from './components/Productos';
import data from "./data.json";


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      productos:  data.productos,
      talla:"",
      clasificar:"",
    };
  }
  render(){
    return (
    <div className="grid-container">
      <header>
        <a href="/">TooHigh shop </a>
      </header>

      <main>
        <div className="content">
          <div className="main"><Productos productos={this.state.productos}></Productos></div>
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
