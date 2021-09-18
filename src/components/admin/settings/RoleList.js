import React, {Component} from "react";
import "../../../style/admin.css";
import AnchorTag from "../../../components/Anchortag";
import Table from "../../../components/table/Table";


class RoleList extends Component{
    constructor(props){
        super(props);
        this.columnList = ["ID", "Name", "Permissions", "Assign User", "Status", "Action"];
        this.tableData = [
            {"id": 1, "role": "Super Admin", "permissions": 105, "users": 10, "status": "Active"},
            {"id": 2, "role": "Moderator", "permissions": 25, "users": 60, "status": "Active"},
            {"id": 3, "role": "Editor", "permissions": 15, "users": 6, "status": "Active"}
        ]
    }


    render(){
        return (
            <div className="admin-content mx-auto">
                <div className="w-100 mb-5">
                    <AnchorTag link="/admin/settings/role-create" className="btn btn-warning float-right" itemValue="Create Role"></AnchorTag>
                    <h4>Role Management</h4>
                </div>
                <Table className="table table-striped" columnList={this.columnList} tableData={this.tableData} actionLinkPrefix="role/"></Table>
            </div>
        ) 
    }
}

export default RoleList;