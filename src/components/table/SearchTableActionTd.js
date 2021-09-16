import React, {Component} from "react";
import AnchorTag from "../Anchortag";

class SearchActionTd extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return (
            <td>
                <div className="s-add-item">Add</div>
            </td>
        )
    }
}

export default SearchActionTd;