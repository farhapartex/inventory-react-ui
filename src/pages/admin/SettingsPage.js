import React, {Component} from "react";
import { Link } from "react-router-dom";
import "../../style/admin.css";
import HeaderNavBar from "../../components/navigation/HeaderNavbar";
import AnchorTag from "../../components/Anchortag";
import Table from "../../components/table/Table";


class AdminSettingsPage extends Component{
    constructor(props){
        super(props);
        this.userRole = "admin";
        this.columnList = ["ID", "Name", "Assign User", "Status"];
        this.tableData = [
            {"id": 1, "role": "Super Admin", "users": 10, "status": "Active"},
            {"id": 2, "role": "Moderator", "users": 60, "status": "Active"},
            {"id": 3, "role": "Editor", "users": 6, "status": "Active"}
        ]
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
                                <div className="admin-content mx-auto">
                                    <div className="w-100 mb-5">
                                    
                                    <AnchorTag link="/" className="btn btn-primary float-right" itemValue="Create Role"></AnchorTag>
                                    <h4>Role Management</h4>
                                    </div>
                                    <Table className="table table-striped" columnList={this.columnList} tableData={this.tableData}></Table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ) 
    }
}

export default AdminSettingsPage;