import React, {Component} from "react";
import { Link } from "react-router-dom";
import "../../../style/admin.css";
import AnchorTag from "../../../components/Anchortag";


class RoleForm extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return (
            <div className="admin-content mx-auto">
                <div className="w-100 mb-5">
                    <AnchorTag link="/admin/settings/role-list" className="btn btn-primary float-right" itemValue="Back to Role List"></AnchorTag>
                    <h4>Create Role</h4>
                </div>
                <div className="w-50">
                    <form>
                        <div className="form-group">
                            <label className="mb-2">Role Name</label>
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <AnchorTag className="btn btn-warning" itemValue="Back" link="/admin/settings/role-list"/>
                            <input type="submit" className="btn btn-success ml-5" value="Submit" style={{marginLeft: 15 + 'px'}}/>
                        </div>
                    </form>
                </div>
                
            </div>
        ) 
    }
}

export default RoleForm;