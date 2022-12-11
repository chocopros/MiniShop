import { Component } from "react";

//>Style Button
const style ={
    button : {
        backgroundColor: "Black",
        color: 'white',
        borderRadius: '5px',
        padding: '10px 15px',
        border: 'none',
        cursor: 'pointer'
    }
}

class Button extends Component {
    
    render(){
        const { children, onClick } = this.props
        return(
            <button style={style.button} onClick={onClick} type="button">
                {children}
            </button>
        )
    }
}

export default Button