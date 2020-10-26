// componetes-productos 1
import React from 'react';
import data from "./data.json";
import Products from "./components/Products"


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      products: data.produts,
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
          <div className="main">products<products products={this.state.products}></products></div>
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
