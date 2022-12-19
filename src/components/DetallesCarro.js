import { Component } from "react";


const style = {
    detallesCarro: {
        //display: {state},
        backgroundColor: "#fff",
        position: 'fixed',
        marginTop: 30,
        boxShadow: "1px 5px 5px rgb(0,0,0,0.3)",
        borderRadius: "5px",
    
        right: 10,
    },
    lista: {
        padding: 0,
        marging: 0,
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        listStyle: "none"
        
    },
    item: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        borderBottom: "solid 1px rgb(0,0,0,0.1)",
        padding: "10px 20px"
    },
    title: {
        padding: "0 20px"
    }
}


class DetallesCarro extends Component {
    render(){
        const { carro } = this.props
        console.log(carro.length)
        const addToPrice = []
        const total = 0
        return(
            <div style={style.detallesCarro}>
                <h4 style={style.title}>Agregados al Carrito:</h4>
                {
                    carro !== 0 
                    ?  <ul style={style.lista}>
                        
                            {carro.map(x => 
                                <li key={x.name} style={style.item}>
                                    <img alt={x.name} src={x.img} width="50" height="32"></img>
                                    {` ( ${x.cantidad} )`}
                                    <span>{`${x.name} $${x.cantidad*x.price}`}</span>
                                    {addToPrice.push(x.cantidad*x.price)}
                                    {console.log(addToPrice)}

                                </li>)
                            }
                                                       
                        </ul>
                    :
                    null
                }
                <h4 style={style.title}>{`Total: `}</h4>
            </div>
        )
    }
   
};

export default DetallesCarro