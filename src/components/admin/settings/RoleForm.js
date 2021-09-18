import React, {Component} from "react";
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
                <div className="w-75">
                    <form>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-6">
                                    <div className="form-group">
                                        <label className="mb-2">Role Name</label>
                                        <input type="text" className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-12 mt-3">
                                    <h6>Access Permissions</h6>
                                </div>

                                <div className="col-12">
                                    <div className="row">
                                        <div className="col-4">
                                            <div class="form-group form-check">
                                                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                                <label class="form-check-label" for="exampleCheck1">Access User Create</label>
                                            </div>
                                            <div class="form-group form-check">
                                                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                                <label class="form-check-label" for="exampleCheck1">Access User Update</label>
                                            </div>
                                            <div class="form-group form-check">
                                                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                                <label class="form-check-label" for="exampleCheck1">Access User View</label>
                                            </div>
                                            <div class="form-group form-check">
                                                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                                <label class="form-check-label" for="exampleCheck1">Access User Delete</label>
                                            </div>
                                        </div>

                                        <div className="col-4">
                                            <div class="form-group form-check">
                                                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                                <label class="form-check-label" for="exampleCheck1">Access Shop Create</label>
                                            </div>
                                            <div class="form-group form-check">
                                                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                                <label class="form-check-label" for="exampleCheck1">Access Shop Update</label>
                                            </div>
                                            <div class="form-group form-check">
                                                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                                <label class="form-check-label" for="exampleCheck1">Access Shop View</label>
                                            </div>
                                            <div class="form-group form-check">
                                                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                                <label class="form-check-label" for="exampleCheck1">Access Shop Delete</label>
                                            </div>
                                        </div>

                                        <div className="col-4">
                                            <div class="form-group form-check">
                                                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                                <label class="form-check-label" for="exampleCheck1">Access User Create</label>
                                            </div>
                                            <div class="form-group form-check">
                                                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                                <label class="form-check-label" for="exampleCheck1">Access User Update</label>
                                            </div>
                                            <div class="form-group form-check">
                                                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                                <label class="form-check-label" for="exampleCheck1">Access User View</label>
                                            </div>
                                            <div class="form-group form-check">
                                                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                                <label class="form-check-label" for="exampleCheck1">Access User Delete</label>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>

                                <div className="col-12 mt-5">
                                    <div className="form-group">
                                        <AnchorTag className="btn btn-warning" itemValue="Back" link="/admin/settings/role-list"/>
                                        <input type="submit" className="btn btn-success ml-3" value="Submit"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        
                    </form>
                </div>
                
            </div>
        ) 
    }
}

export default RoleForm;