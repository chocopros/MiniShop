import { Component } from 'react';
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import Productos from './components/Productos';
import Title from './components/Title';



class App extends Component {

  state = {
    productos: [
      {name: 'Tomate', price: 1500, img: './img/tomate.jpg'},
      {name: 'Arbejas', price: 2500, img: './img/arbejas.jpg'},
      {name: 'Lechuga', price: 500, img: './img/lechuga.jpg'}
    ],
    carro: [
      ///{name: 'Tomate', price: 1500, img: './img/tomate.jpg', cantidad: 1}
    ]
  };

  agregarAlCarro = (producto) => {
    console.log(producto)
  }

  render() {
    return(
      <div>
        <Navbar />
        <Layout>
          <Title />
          <Productos 
            agregarAlCarro={this.agregarAlCarro}
            productos={this.state.productos}
          />
        </Layout>
      </div>
    )
  }
}


export default App;
