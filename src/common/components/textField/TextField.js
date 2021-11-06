import React, {Component} from "react";


class TextField extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return <input type={this.props.inputType} onChange={this.props.onChange} className={this.props.className} placeholder={this.props.placeholder} defaultValue={this.props.value}/>
    }
}

export default TextField;