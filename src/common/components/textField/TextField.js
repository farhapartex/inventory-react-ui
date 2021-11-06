import React, {Component} from "react";
import PropTypes from "prop-types";


class TextField extends Component{
    static propType = {
        inputType: PropTypes.string,
        id: PropTypes.string,
        className : PropTypes.string,
        placeholder: PropTypes.string,
        value: PropTypes.string,
        onChange: PropTypes.func
    }

    static defaultProps = {
        inputType: "text",
        id: "",
        className: "form-control",
        placeholder: "",
        value: "",
        onChange: () => {}
    }


    render(){
        const {inputType, id, className, placeholder, value, onChange}  = this.props;

        return <input type={inputType} onChange={onChange} id={id} className={className} placeholder={placeholder} value={value}/>
    }
}

export default TextField;