import React, {Component} from "react";
import { Link } from "react-router-dom";
import "../../../style/admin.css";
import AnchorTag from "../../../components/Anchortag";
import Table from "../../../components/table/Table";


class RoleList extends Component{
    constructor(props){
        super(props);
        this.columnList = ["ID", "Name", "Assign User", "Status"];
        this.tableData = [
            {"id": 1, "role": "Super Admin", "users": 10, "status": "Active"},
            {"id": 2, "role": "Moderator", "users": 60, "status": "Active"},
            {"id": 3, "role": "Editor", "users": 6, "status": "Active"}
        ]
    }


    render(){
        return (
            <div className="admin-content mx-auto">
                <div className="w-100 mb-5">
                    <AnchorTag link="/" className="btn btn-primary float-right" itemValue="Create Role"></AnchorTag>
                    <h4>Role Management</h4>
                </div>
                <Table className="table table-striped" columnList={this.columnList} tableData={this.tableData}></Table>
            </div>
        ) 
    }
}

export default RoleList;