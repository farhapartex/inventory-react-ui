import React, {Component} from "react";
import TextArea from "./TextArea";


class TextAreaFormGroup extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return (
            <div className="form-group">
                <label className={this.props.labelClassName}>{this.props.label}</label>
                <TextArea className={this.props.inputClassName} rows={this.props.rows} cols={this.props.cols}/>
            </div>
        )
    }
}

TextAreaFormGroup.defaultProps = {
    rows: 3,
    cols: 10,
    className: "form-control"
}

export default TextAreaFormGroup;