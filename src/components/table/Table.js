import React, {Component} from "react";
import { Link } from "react-router-dom";
import TableHead from "./TableHead";
import TdTag from "./TdTag"


class Table extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return (
            <table className={this.props.className}>
                <TableHead columnList={this.props.columnList}></TableHead>
                <tbody>
                    <tr>
                        <TdTag value="1"></TdTag>
                        <TdTag value="System admin"></TdTag>
                        <TdTag value="10"></TdTag>
                    </tr>
                </tbody>
            </table>
        ) 
    }
}

export default Table;