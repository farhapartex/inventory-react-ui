import React, {Component} from "react";


class PrimaryAlert extends Component{
    constructor(props){
        super(props);
        
    }

    render(){
        return (
            <div className={this.props.className} role="alert">{this.props.alertMessage}</div>
        ) 
    }
}

export default PrimaryAlert;