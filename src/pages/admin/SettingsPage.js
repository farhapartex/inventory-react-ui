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
        this.columnList = ["ID", "Name", "Assign User"];
        this.tableData = [
            {"id": 1, "role": "System Admin", "users": 10},
            {"id": 2, "role": "Developer", "users": 60},
            {"id": 3, "role": "QA Engineer", "users": 6}
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
                                    <AnchorTag link="/" liClassName="" className="list-group-item list-group-item-action" itemValue="System User"></AnchorTag>
                                    <AnchorTag link="/" liClassName="" className="list-group-item list-group-item-action" itemValue="Role"></AnchorTag>
                                </div>
                            </div>
                            <div className="col-9">
                                <div className="admin-content mx-auto">
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