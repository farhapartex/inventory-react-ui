import React, {Component} from "react";
import { Link } from "react-router-dom";
import "../style/auth.css";
import LoginForm from "../components/auth/LoginForm";
import RegistrationForm from "../components/auth/RegistrationForm";
import PasswordResetVerifyForm from "../components/auth/PasswordResetVerifyForm";


class AuthPage extends Component{
    constructor(props){
        super(props)
        this.currentUrl = this.props.location.pathname;
    }

    render(){
        if(this.props.location.pathname == "/login"){
            return <LoginForm></LoginForm>
        }
        else if(this.props.location.pathname == "/registration"){
            return <RegistrationForm></RegistrationForm>
        }
        else if(this.props.location.pathname == "/password-reset-account-verify"){
            return <PasswordResetVerifyForm></PasswordResetVerifyForm>
        }
        
    }
}

export default AuthPage;