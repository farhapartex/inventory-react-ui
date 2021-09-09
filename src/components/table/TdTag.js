import React, {Component} from "react";
import AnchorTag from "../Anchortag";

class TdTag extends Component{
    constructor(props){
        super(props);
        console.log(this.props)
    }


    render(){
        if(this.props.isLinked=="false"){
            return <td scope="col">{this.props.value}</td>
        }
        else{
            return (
            <td scope="col">
                <AnchorTag link={`${this.props.linkPrefix}view/${this.props.value}`} className="" itemValue="View"/>
                <AnchorTag link={`${this.props.linkPrefix}edit/${this.props.value}`} className="ml-2" itemValue="Edit"/>
            </td>
            )
        }
    }
}

export default TdTag;