import React, {Component} from "react";
import { Link } from "react-router-dom";


class ThTag extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return (
            <th scope="col">{this.props.value}</th>
        ) 
    }
}

export default ThTag;