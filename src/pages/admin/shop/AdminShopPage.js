import React, {Component} from "react";
import { Route, Switch } from "react-router-dom";
import "../../../style/admin.css";
import ShopList from "../../../components/admin/shop/ShopList";
import ShopForm from "../../../components/admin/shop/ShopForm";
import ShopView from "../../../components/admin/shop/ShopView";


class AdminShopPage extends Component{
    constructor(props){
        super(props);
        this.userRole = "admin";
    }


    render(){
        return (
            <div className="w-100">
            <Switch>
                <Route exact path={`${this.props.match.path}/shop-list`} component={ShopList}/>
                <Route exact path={`${this.props.match.path}/shop-create`} component={ShopForm}/>
                <Route exact path={`${this.props.match.path}/view/:shopdId`} component={ShopView}/>
            </Switch>
            
        </div>
        ) 
    }
}

export default AdminShopPage;