import { Component } from 'react';
import Layout from './components/Layout';
import Productos from './components/Productos';
import Title from './components/Title';


class App extends Component {

  state = {
    productos: [
      {name: 'Tomate', price: 1500, img: './img/tomate.jpg'},
      {name: 'Arbejas', price: 2500, img: './img/arbejas.jpg'},
      {name: 'Lechuga', price: 500, img: './img/lechuga.jpg'}
    ]
  };

  render() {
    return(
      <div>
        <Layout>
          <Title />
          <Productos 
            agregarAlCarro={()=> console.log('In wait')}
            productos={this.state.productos}
          />
        </Layout>
      </div>
    )
  }
}


export default App;
