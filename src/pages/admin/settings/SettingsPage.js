import React, {Component} from "react";
import { Route, Switch } from "react-router-dom";
import "../../../style/admin.css";
import RoleList from "../../../components/admin/settings/RoleList";
import RoleForm from "../../../components/admin/settings/RoleForm";
import UserList from "../../../components/admin/settings/UserList";
import UserForm from "../../../components/admin/settings/UserForm";
import UserView from "../../../components/admin/settings/UserView";
import PasswordResetForm from "../../../components/admin/settings/PasswordResetForm";


class AdminSettingsPage extends Component{
    constructor(props){
        super(props);
        this.userRole = "admin";
    }


    render(){
        return (
            <div className="w-100">
            <Switch>
                <Route exact path={`${this.props.match.path}/role-list`} component={RoleList}/>
                <Route exact path={`${this.props.match.path}/role-create`} component={RoleForm}/>
                <Route exact path={`${this.props.match.path}/user-list`} component={UserList}/>
                <Route exact path={`${this.props.match.path}/user-create`} component={UserForm}/>
                <Route exact path={`${this.props.match.path}/user/view/:userId`} component={UserView}/>
                <Route exact path={`${this.props.match.path}/user/edit/:userId`} component={UserForm}/>
                <Route exact path={`${this.props.match.path}/password-reset`} component={PasswordResetForm}/>
            </Switch>
            
        </div>
        ) 
    }
}

export default AdminSettingsPage;