import React, {Component} from "react";
import "../../../style/admin.css";
import AnchorTag from "../../../components/Anchortag";


class UserView extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return (
            <div className="admin-content mx-auto">
                <div className="w-100 mb-5">
                    <AnchorTag link="/admin/settings/user-list" className="btn btn-primary float-right" itemValue="Back to User List"></AnchorTag>
                    <h4>User Details</h4>
                </div>
                <div className="w-75">
                    <form>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-6">
                                    <div className="form-group">
                                        <label className="mb-2">First Name</label>
                                        <input type="text" className="form-control" value="Md Nazmul" readOnly/>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label className="mb-2">Last Name</label>
                                        <input type="text" className="form-control" value="Hasan" readOnly/>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label className="mb-2">Email</label>
                                        <input type="text" className="form-control" value="hasan08sust@gmail.com" readOnly/>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label className="mb-2">Role</label>
                                        <input type="text" className="form-control" value="Super Admin" readOnly/>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label className="mb-2">Account Verification</label>
                                        <input type="text" className="form-control" value="Completed" readOnly/>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label className="mb-2">Status</label>
                                        <input type="text" className="form-control" value="Active" readOnly/>
                                    </div>
                                </div>

                                <div className="col-12 mt-3">
                                    <div className="form-group">
                                        <AnchorTag className="btn btn-warning" itemValue="Back" link="/admin/settings/user-list"/>
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

export default UserView;