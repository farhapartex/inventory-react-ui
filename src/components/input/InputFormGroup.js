import React, {Component} from "react";
import InputText from "./InputText";


class InputFormGroup extends Component{
    constructor(props){
        super(props);
    }

    renderLabel(){
        if(this.props.label == "" || this.props.label == null){
            return ""
        }
        else{
            return <label className={this.props.labelClassName}>{this.props.label}</label>
        }
        
    }

    renderInputText(){
        if(this.props.isReadOnly == true){
            return <input type="text" className={this.props.inputClassName} placeholder={this.props.placeholder} defaultValue={this.props.value} readOnly/>
        }
        else{
            return <InputText className={this.props.inputClassName} onChange={this.props.onChange} placeholder={this.props.placeholder} value={this.props.value} ref={this.props.ref}/>
        }
    }


    render(){
        return (
            <div className="form-group">
                {this.renderLabel()}
                {this.renderInputText()}
                
            </div>
        )
    }
}

InputFormGroup.defaultProps = {
    inputClassName: "form-control",
    placeholder: "",
    label: "",
    value: "",
    isReadOnly: false
}

export default InputFormGroup;