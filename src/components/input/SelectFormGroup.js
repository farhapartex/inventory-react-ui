import React, {Component} from "react";
import SelectInput from "./SelectInput";


class SelectFormGroup extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return (
            <div className="form-group">
                <label className={this.props.labelClassName}>{this.props.label}</label>
                <SelectInput className={this.props.selectClassName} id="" selectData={this.props.selectData}/>
            </div>
        )
    }
}

export default SelectFormGroup;