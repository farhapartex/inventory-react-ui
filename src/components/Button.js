import React, {Component} from "react";


class Button extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return <button className={this.props.className} data-target={this.props.dataTarget} data-toggle={this.props.dataToggle}>{this.props.text}</button>
    }
}


Button.defaultProps = {
    dataToggle: "",
    dataTarget: ""
}

export default Button;