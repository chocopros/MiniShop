import { Component } from "react";

const style = {
    detallesCarro: {
        backgroundColor: "#fff",
        position: 'fixed',
        marginTop: 30,
        boxShadow: "1px 5px 5px rgb(0,0,0,0.3)",
        borderRadius: "5px",
        width: "300px",
        right: 10,
    },
    lista: {
        listStyle: "none"
    }
}

class DetallesCarro extends Component {
    render(){
        const { carro } = this.props
        console.log(carro.length)
        return(
            <div style={style.detallesCarro}>
                {
                    carro !== 0 
                    ?  <ul style={style.lista}>
                            {carro.map(x => 
                                <li key={x.name}>
                                    <img alt={x.name} src={x.img} width="50" height="32"></img>
                                    {x.name}
                                    {` (${x.cantidad})`}
                                </li>)}
                        </ul>
                    :
                    null
                }
               
            </div>
        )
    }
};

export default DetallesCarro