import React, {Component} from "react";


class PageHeader extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return (
                <div className="w-100 mb-5">
                    <h4>{this.props.headerText}</h4>
                </div>
        ) 
    }
}

export default PageHeader;