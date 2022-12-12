import {Component} from 'react'
import BubbleAlert from './BubbleAlert'
import DetallesCarro from './DetallesCarro'



const style = {
    carro: {
        backgroundColor: '#359A2C',
        color: "white",
        border: "none",
        padding: "10px 15px",
        borderRadius: "15px",
        cursor: "pointer"

    },
    bubble:{
        position: 'relative',
        left: 12,
        top: 20
    },
    container: {
        
    }
}


class Carro extends Component {
    render(){
        const {carro} = this.props
        const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0)
        return(
            <div style={style.container}>
                <span style={style.bubble}>

                    {
                        cantidad !== 0 
                        ? <BubbleAlert value={cantidad} />
                        :
                        null
                    }
                    
                </span>
                <button style={style.carro}>
                    Carrito
                </button>
                {
                    carro.length !== 0 
                    ? <DetallesCarro carro={carro} />
                    :
                    null
                }
                
            </div>
            
        )
    }
}

export default Carro