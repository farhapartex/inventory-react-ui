import React, {Component} from "react";
import InputPasswordGroup from "../../components/input/InputPasswordGroup";

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
                                <div className="col-4">
                                    <InputPasswordGroup inputClassName="form-control form-control-sm" labelClassName="mb-2" label="Old Password"/>
                                </div>
                                <div className="col-4">
                                    <InputPasswordGroup inputClassName="form-control form-control-sm" labelClassName="mb-2" label="New Password"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-4">
                                    <InputPasswordGroup inputClassName="form-control form-control-sm" labelClassName="mb-2" label="Confirm Password"/>
                                </div>
                            </div>
                            <div className="row">

                                <div className="col-12 mt-3">
                                    <div className="form-group">
                                        <input type="reset" className="btn btn-sm btn-warning" value="Reset"/>
                                        <input type="submit" className="btn btn-sm btn-success ml-3" value="Submit"/>
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