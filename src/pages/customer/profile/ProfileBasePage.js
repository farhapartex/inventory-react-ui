import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch, Link, useRouteMatch } from "react-router-dom";
import Profile from "../../../components/profile/Profile";


class ProfileBasePage extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return (
            <div className="w-100">
            <Switch>
                <Route exact path={`${this.props.match.path}/me`} component={Profile}/>
            </Switch>
            
        </div>
        ) 
    }
}

export default ProfileBasePage;