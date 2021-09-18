import React, {Component} from "react";
import "../../../style/admin.css";


class PasswordResetForm extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return (
            <div className="admin-content mx-auto">
                <div className="w-100 mb-5">
                    <h4>Password Reset</h4>
                </div>
                <div className="w-75">
                    <form>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-6">
                                    <div className="form-group">
                                        <label className="mb-2">Old Password</label>
                                        <input type="password" className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label className="mb-2">New Password</label>
                                        <input type="password" className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label className="mb-2">Confirm Password</label>
                                        <input type="password" className="form-control"/>
                                    </div>
                                </div>

                                <div className="col-12 mt-3">
                                    <div className="form-group">
                                        <input type="reset" className="btn btn-warning" value="Reset"/>
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

export default PasswordResetForm;