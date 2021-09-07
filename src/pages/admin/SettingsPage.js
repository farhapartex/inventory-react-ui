import React, {Component} from "react";
import { Link } from "react-router-dom";
import "../../style/admin.css";
import HeaderNavBar from "../../components/navigation/HeaderNavbar";
import AnchorTag from "../../components/Anchortag";


class AdminSettingsPage extends Component{
    constructor(props){
        super(props);
        this.userRole = "admin";
    }


    render(){
        return (
            <div>
                <HeaderNavBar></HeaderNavBar>
                <div className="admin-page mx-auto mt-5">
                    <div classNamecontainer-fluid>
                        <div className="row">
                            <div className="col-3">
                                <div class="list-group">
                                    <AnchorTag link="/" liClassName="" className="list-group-item list-group-item-action" itemValue="Role"></AnchorTag>
                                    <AnchorTag link="/" liClassName="" className="list-group-item list-group-item-action" itemValue="System User"></AnchorTag>
                                    <AnchorTag link="/" liClassName="" className="list-group-item list-group-item-action" itemValue="Role"></AnchorTag>
                                </div>
                            </div>
                            <div className="col-9">
                            <table class="table table-borderless">
                                <thead>
                                    <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Handle</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    </tr>
                                    <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    </tr>
                                    <tr>
                                    <th scope="row">3</th>
                                    <td colspan="2">Larry the Bird</td>
                                    <td>@twitter</td>
                                    </tr>
                                </tbody>
                            </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ) 
    }
}

export default AdminSettingsPage;