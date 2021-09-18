import React, {Component} from "react";
import { Route, Switch } from "react-router-dom";
import Profile from "../../../components/profile/Profile";
import PasswordResetForm from "../../../components/profile/PasswordReset";


class ProfileBasePage extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return (
            <div className="w-100">
            <Switch>
                <Route exact path={`${this.props.match.path}/me`} component={Profile}/>
                <Route exact path={`${this.props.match.path}/password-reset`} component={PasswordResetForm}/>
            </Switch>
            
        </div>
        ) 
    }
}

export default ProfileBasePage;