import React, {Component} from "react";


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