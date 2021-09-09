import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch, Link, useRouteMatch } from "react-router-dom";
import "../../style/admin.css";
import HeaderNavBar from "../../components/navigation/HeaderNavbar";
import AnchorTag from "../../components/Anchortag";
import DashboardPage from "../../pages/customer/Dashboard";


class CustomerRootPage extends Component{
    constructor(props){
        super(props);
        this.userRole = "owner";
        console.log(this.props);
    }


    render(){
        return (
                <div>
                    <HeaderNavBar></HeaderNavBar>
                    <div className="admin-page mx-auto mt-5">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-2">
                                    <div className="list-group side-navigation">
                                        <AnchorTag link={`${this.props.match.path}`} liClassName="" className="list-group-item list-group-item-action" itemValue="Dashboard"></AnchorTag>
                                        <AnchorTag link={`${this.props.match.path}shop/view`} liClassName="" className="list-group-item list-group-item-action" itemValue="Shop"></AnchorTag>
                                        <AnchorTag link={`${this.props.match.path}product-category/list`} liClassName="" className="list-group-item list-group-item-action" itemValue="Product Category"></AnchorTag>
                                        <AnchorTag link={`${this.props.match.path}product/list`} className="list-group-item list-group-item-action" itemValue="Product"></AnchorTag>
                                        <AnchorTag link={`${this.props.match.path}invoice/list`} className="list-group-item list-group-item-action" itemValue="Invoice"></AnchorTag>
                                        <AnchorTag link={`${this.props.match.path}profile`} className="list-group-item list-group-item-action" itemValue="Profile"></AnchorTag>
                                        <AnchorTag link={`${this.props.match.path}settings/password-reset`} className="list-group-item list-group-item-action" itemValue="Password Reset"></AnchorTag>
                                    </div>
                                </div>
                                <div className="col-10">
                                    <Switch>
                                        <Route path={`${this.props.match.path}/`} component={DashboardPage}/>
                                    </Switch>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        ) 
    }
}

export default CustomerRootPage;