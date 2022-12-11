import { Component } from "react";
import Producto from "./Producto";

//> STYLE
const style = {
    productos: {
        display: 'flex',
        flexWrap: "wrap",
        justifyContent: 'center',
        alignItems: 'center',
        gap: "35px"
    }
}


class Productos extends Component {

    render(){
        const { productos, agregarAlCarro} = this.props

        return(
            <div className="containerProducts" style={style.productos}>
                {
                    productos.map(producto =>
                        <Producto
                            key={producto.name}
                            agregarAlCarro={agregarAlCarro}
                            producto={producto}
                        />
                    )
                }
            </div>
        )

    }



}

export default Productos