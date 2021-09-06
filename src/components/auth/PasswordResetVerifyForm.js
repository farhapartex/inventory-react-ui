import React, {Component} from "react";
import { Link } from "react-router-dom";


class PasswordResetVerifyForm extends Component{

    render(){
        return (
            <div className="auth mx-auto">
                <form className="">
                    <div className="form-group">
                        <h3 className="text-center pb-3">Account Verify</h3>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="text" className="form-control" id="username"/>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-warning w-100 mt-2">Login</button>
                    </div>
                    <div>
                        <p>Back to Login. <Link to="/login">Login</Link></p>
                    </div>
                </form>
            </div>
        )
    }
}

export default PasswordResetVerifyForm;