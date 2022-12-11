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
      ///? ESTRUCTURA {name: 'Tomate', price: 1500, img: './img/tomate.jpg', cantidad: 1}
    ]
  };

  agregarAlCarro = (producto) => {
    
    const { carro } = this.state
    if (carro.find(x => x.name === producto.name)) {
      const newCarro = carro.map(x => x.name === producto.name
        ? ({
          ...x,
          cantidad: x.cantidad + 1
        })
        : x )
        return this.setState({carro: newCarro})  
    }

    return this.setState({
      carro: this.state.carro.concat({
        ...producto,
        cantidad: 1,
      })
    })

  }

  render() {
    console.log(this.state.carro)
    return(
      <div>
        <Navbar carro = {this.state.carro} />
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
