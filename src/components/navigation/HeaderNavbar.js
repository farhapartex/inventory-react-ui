import React, {Component} from "react";
import { Link } from "react-router-dom";
import NavLiTag from "../navigation/NavListTag";


class HeaderNavBar extends Component{
    constructor(props){
        super(props);
        this.userRole = "admin2";
    }


    render(){
        if(this.userRole == "admin"){
            return (
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <Link className="navbar-brand px-3" to="/">Inventory Management (Admin Portal)</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto">
                            <NavLiTag link="/" className="nav-link" itemValue="Home"></NavLiTag>
                            <NavLiTag link="/admin/settings/role-list" className="nav-link" itemValue="Settings"></NavLiTag>
                            <NavLiTag link="/" className="nav-link" itemValue="Md Nazmul Hasan (Admin)"></NavLiTag>
                            <NavLiTag link="/login" className="nav-link" itemValue="Logout"></NavLiTag>
                        </ul>
                    </div>
                </nav>
            )
        }

        else return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand px-3" to="/">Invoice Management System</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <NavLiTag link="/" className="nav-link" itemValue="Md Nazmul Hasan (Owner)"></NavLiTag>
                        <NavLiTag link="/login" className="nav-link" itemValue="Logout"></NavLiTag>
                    </ul>
                </div>
            </nav>
        )
        
    }
}

export default HeaderNavBar;