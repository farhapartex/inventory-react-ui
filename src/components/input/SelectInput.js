import React, {Component} from "react";


class SelectInput extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return (
                <select class={this.props.className} id={this.props.id}>
                    <option selected>Choose...</option>
                    {
                        this.props.selectData.map((data, index) => {
                            return <option value={data.id}>{data.name}</option>
                        })
                    }
                </select>

        )
    }
}

export default SelectInput;