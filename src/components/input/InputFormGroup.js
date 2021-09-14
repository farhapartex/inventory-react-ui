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
                <InputText className={this.props.className}/>
            </div>
        )
    }
}

export default InputFormGroup;