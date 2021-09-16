import React, {Component} from "react";
import InputPassword from "./InputPassword";


class InputPasswordGroup extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return (
            <div className="form-group">
                <label className={this.props.labelClassName}>{this.props.label}</label>
                <InputPassword className={this.props.inputClassName} placeholder={this.props.placeholder}/>
            </div>
        )
    }
}

InputPasswordGroup.defaultProps = {
    inputClassName: "form-control",
    placeholder: "",
    label: ""
}


export default InputPasswordGroup;