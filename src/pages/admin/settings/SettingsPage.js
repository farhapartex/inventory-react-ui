import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch, Link, useRouteMatch } from "react-router-dom";
import "../../../style/admin.css";
import HeaderNavBar from "../../../components/navigation/HeaderNavbar";
import AnchorTag from "../../../components/Anchortag";
import RoleList from "../../../components/admin/settings/RoleList";
import RoleForm from "../../../components/admin/settings/RoleForm";


class AdminSettingsPage extends Component{
    constructor(props){
        super(props);
        this.userRole = "admin";
        
        let {path, url} = this.props.match;

        console.log(this.props);
    }


    render(){
        return (
                <div>
                    <HeaderNavBar></HeaderNavBar>
                    <div className="admin-page mx-auto mt-5">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-3">
                                    <div className="list-group">
                                        <AnchorTag link="/admin/settings/role-list" liClassName="" className="list-group-item list-group-item-action" itemValue="Role"></AnchorTag>
                                        <AnchorTag link="/" className="list-group-item list-group-item-action" itemValue="System User"></AnchorTag>
                                        <AnchorTag link="/" className="list-group-item list-group-item-action" itemValue="Role"></AnchorTag>
                                    </div>
                                </div>
                                <div className="col-9">
                                    <Switch>
                                        <Route exact path={`${this.props.match.path}/role-list`} component={RoleList}/>
                                        <Route exact path={`${this.props.match.path}/role-create`} component={RoleForm}/>
                                    </Switch>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        ) 
    }
}

export default AdminSettingsPage;