import React, {Component} from "react";
import InputText from "./InputText";


class InputFormGroup extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return (
            <div className="form-group">
                <label className={this.props.labelClassName}>{this.props.label}</label>
                <InputText className={this.props.inputClassName} placeholder={this.props.placeholder}/>
            </div>
        )
    }
}

InputFormGroup.defaultProps = {
    inputClassName: "form-control",
    placeholder: "",
    label: ""
}

console.log(InputFormGroup.defaultProps);

export default InputFormGroup;