import {Component} from 'react'
import BubbleAlert from './BubbleAlert'


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
    }
}


class Carro extends Component {
    render(){
        return(
            <div>
                <span style={style.bubble}>
                    <BubbleAlert value={5} />
                </span>
                <button style={style.carro}>
                    Carro
                </button>
            </div>
        )
    }
}

export default Carro