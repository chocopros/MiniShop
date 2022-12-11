import { Component } from "react";

const style = {
    container : {
        maxWidth: "1200px"
    },
    title: {
        marginBottom: "30px"
    }
}

class Title extends Component {
    render(){
        return(
            <div className="header">
                <h1 style={style.title}>Mini Shop</h1>
            </div>
        )
    }
}

export default Title