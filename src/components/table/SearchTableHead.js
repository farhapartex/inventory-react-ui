import React, {Component} from "react";
import ThTag from "./ThTag";


class SearchTableHead extends Component{
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

export default SearchTableHead;