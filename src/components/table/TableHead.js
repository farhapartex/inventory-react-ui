import React, {Component} from "react";
import ThTag from "./ThTag";


class TableHead extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return (
            <thead>
                <tr>
                    {
                        this.props.columnList.map((value, index) => {
                            return <ThTag value={value} key={index}></ThTag>
                        })
                    }
                </tr>
            </thead>
        ) 
    }
}

export default TableHead;