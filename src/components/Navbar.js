import { Component } from "react";
import Logo from "./Logo";
import Carro from "./Carro";


const style = {
    navbar: {
        height: '75px',
        display: "flex",
        alignItems: 'center',
        justifyContent: 'space-around',
        boxShadow: '0 2px 3px 10px rgb(0,0,0)'

    },
    options: {
        display: "flex",
        gap: "20px",
        listStyle: "none"

    },
    logo :{

    }
}

class Navbar extends Component {
    render(){
        const { carro, carroVisible, mostrarCarro } = this.props
        return(
            <div className="Navbar" style={style.navbar}>
                <Logo/>
                <ul style={style.options}>
                    <li>Categorias</li>
                    <li>Projectos</li>
                    <li>Acerca de</li>
                    <li>Contactos</li>  
                </ul>
                <Carro 
                    carro={carro} 
                    carroVisible={carroVisible} 
                    mostrarCarro={mostrarCarro} 
                />
            </div>
        )
    }
}

export default Navbar