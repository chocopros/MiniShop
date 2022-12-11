import { Component } from "react";
import Button from "./Button";


//>STYLE
const style = {
    producto: {
        border: '2px #eee solid',
        boxShadow: '0 5px 5px rgb(0,0,0,0.1)',
        width: '25%',
        minWidth: '200px',
        padding: '10px 15px',
        borderRadius: '5px'
    },
    img:{
        width: '100%'
    }
}

class Producto extends Component {
    render(){
        const { producto, agregarAlCarro } = this.props
        //console.log(producto)

        return(
            <div style={style.producto}>
                <img style={style.img} src={producto.img} alt={producto.name}></img>
                <h3>{producto.name}</h3>
                <h3>{producto.price}</h3>
                <Button onClick={()=> agregarAlCarro(producto)}>
                    Agregar al carro
                </Button>
            </div>
        )
    }
}

export default Producto