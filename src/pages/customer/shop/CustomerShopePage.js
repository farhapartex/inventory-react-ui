import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch, Link, useRouteMatch } from "react-router-dom";
import ShopView from "../../../components/customer/ShopView";


class CustomerShopPage extends Component{
    constructor(props){
        super(props);
        console.log(this.props);
    }


    render(){
        return (
            <div className="w-100">
            <Switch>
                <Route exact path={`${this.props.match.path}/view`} component={ShopView}/>
            </Switch>
            
        </div>
        ) 
    }
}

export default CustomerShopPage;