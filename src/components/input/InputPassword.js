import React, {Component} from "react";


class InputPassword extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return <input type="password" className={this.props.className} placeholder={this.props.placeholder}/>
    }
}

InputPassword.defaultProps = {
    placeholder: ""
}

export default InputPassword;