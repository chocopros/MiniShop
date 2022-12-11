import { Component } from "react";

const style = {
    layout: {
        backgroundColor: '#fff',
        color:'#0A283E',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '100vh'
    
    },
    container: {
        maxWidth: "1200px"
    }
}

class Layout extends Component {
    render() {
        return(
            <div className="primary" style={style.layout}>
                <div className="secundary" style={style.container}>
                    {this.props.children}           
                </div>
                contenido
            </div>
        )
    }
};

export default Layout