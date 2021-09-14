import React, {Component} from "react";


class InputText extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return <input type="text" className={this.props.className}/>
    }
}

export default InputText;