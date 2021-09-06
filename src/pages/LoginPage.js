import React, {Component} from "react";
import "../style/auth.css";


class LoginPage extends Component{
    render(){
        return (
            <div className="auth mx-auto">
                <form className="mt-5">
                <div className="form-group">
                        <h3 className="text-center">User Login</h3>
                    </div>
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" className="form-control" id="username"/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" id="username"/>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary w-100 mt-2">Login</button>
                    </div>
                    <div>
                        <p>New user? <a href="">Click to Register</a></p>
                    </div>
                </form>
            </div>
        )
    }
}

export default LoginPage;