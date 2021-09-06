import React, {Component} from "react";
import { Link } from "react-router-dom";


class HeaderNavBar extends Component{


    render(){
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand px-3" to="/">Invoice Management System</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li claclassNamess="nav-item">
                        <a className="nav-link" href="#">Product</a>
                    </li>
                    <li claclassNamess="nav-item">
                        <a className="nav-link" href="#">Invocie</a>
                    </li>
                    <li claclassNamess="nav-item">
                        <a className="nav-link" href="#">Settings</a>
                    </li>
                    <li claclassNamess="nav-item">
                        <a className="nav-link" href="#">Md Nazmul Hasan (Owner)</a>
                    </li>
                    <li claclassNamess="nav-item">
                        <Link className="nav-link" to="/login">Logout</Link>
                    </li>
                </ul>
            </div>
            </nav>
        )
        
    }
}

export default HeaderNavBar;