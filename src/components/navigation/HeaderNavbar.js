import React, {Component} from "react";
import { Link } from "react-router-dom";
import NavLiTag from "../navigation/NavListTag";


class HeaderNavBar extends Component{
    constructor(props){
        super(props);
        this.userRole = "admin";
        var navbarText = "";
        if(this.userRole == "admin"){
            this.navbarText = "Inventory Management (Admin Portal)"
        }
        else{
            this.navbarText = "Inventory Management"
        }
    }


    render(){
            return (
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <Link className="navbar-brand px-3" to="/">{this.navbarText}</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <NavLiTag link="/" className="nav-link" itemValue="Home"></NavLiTag>
                            <NavLiTag link="/login" className="nav-link" itemValue="Logout"></NavLiTag>
                        </ul>
                    </div>
                </nav>
            )
        
    }
}

export default HeaderNavBar;