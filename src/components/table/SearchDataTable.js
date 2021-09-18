import React, {Component} from "react";
import SearchTableHead from "./SearchTableHead";
import TdTag from "./TdTag";
import SearchActionTd from "../table/SearchTableActionTd";


class SearchDataTable extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return (
            <table className={this.props.className}>
                <SearchTableHead columnList={this.props.columnList}></SearchTableHead>
                <tbody>
                    {
                        this.props.tableData.map((data, index) => {
                            return (
                            <tr key={index}>
                                {
                                    Object.keys(data).map((key, index) => {
                                        return <TdTag key={index} value={data[key]} isLinked="false"></TdTag>
                                    })
                                }
                                <SearchActionTd value={data["id"]} isLinked="true" linkPrefix={this.props.actionLinkPrefix}></SearchActionTd>
                            </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        ) 
    }
}

export default SearchDataTable;