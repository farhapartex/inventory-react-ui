import React, {Component} from "react";
import SelectInput from "./SelectInput";


class SelectFormGroup extends Component{
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


    render(){
        return (
            <div className="form-group">
                {this.renderLabel()}
                <SelectInput className={this.props.selectClassName} id="" selectData={this.props.selectData}/>
            </div>
        )
    }
}

export default SelectFormGroup;