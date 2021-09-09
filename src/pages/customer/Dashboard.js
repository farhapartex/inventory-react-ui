import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch, Link, useRouteMatch } from "react-router-dom";


class DashboardPage extends Component{
    constructor(props){
        super(props);
        this.userRole = "owner";
        console.log(this.props);
    }


    render(){
        return (
                <div>
                    <h2>Dashboard</h2>
                </div>
        ) 
    }
}

export default DashboardPage;