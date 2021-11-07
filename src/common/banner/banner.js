import React, {Component} from "react";
import PropTypes from "prop-types";
import { ErrorSvg, WarringSvg, InfoSvg, SuccessSvg, ExitSvg } from "./icons";

class Banner extends Component{
    static propTypes = {
        type: PropTypes.oneOf(["error", "warning", "info", "success"]).isRequired,
        onClose: PropTypes.func,
        icon: PropTypes.node,
        message: PropTypes.string
    };

    static defaultProps = {
        onClose: () => {},
        icon: null,
        message: ""
    };

    types = {
        "error": {icon: <ErrorSvg />, exitButton:  <ExitSvg color="#BF1D08" />, className: "alert alert-danger"},
        "warning": {icon: <WarringSvg />, exitButton:  <ExitSvg color="#573B00" />, className: "alert alert-warning"},
        "info": {icon: <InfoSvg />, exitButton:  <ExitSvg color="#006FBB" />, className: "alert alert-info"},
        "success": {icon: <SuccessSvg />, exitButton:  <ExitSvg color="#108043" />, className: "alert alert-success"},
    }

    

    render(){
        const { type, onClose, icon, message } = this.props;
        const banner = this.types[type];

        return (
            <div className={banner.className} role="alert">
                <span>{message}</span>
                <button type="button" class="close" onClick={onClose}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        ) 
    }
}

export default Banner;