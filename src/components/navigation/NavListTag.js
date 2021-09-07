import React, {Component} from "react";
import { Link } from "react-router-dom";


class NavLiTag extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <li className="nav-item active">
                <Link className={this.props.className} to={this.props.link}>{this.props.itemValue}</Link>
            </li>
        )
        
    }
}

export default NavLiTag;