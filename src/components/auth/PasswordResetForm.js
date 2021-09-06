import React, {Component} from "react";
import { Link } from "react-router-dom";


class PasswordResetForm extends Component{

    render(){
        return (
            <div className="auth mx-auto">
                <form className="">
                    <div className="form-group">
                        <h3 className="text-center pb-3">Password Reset</h3>
                    </div>
                    <div className="form-group">
                        <label>New Password</label>
                        <input type="password" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input type="password" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-warning w-100 mt-2">Reset Password</button>
                    </div>
                    <div>
                        <p>Back to Login. <Link to="/login">Login</Link></p>
                    </div>
                </form>
            </div>
        )
    }
}

export default PasswordResetForm;