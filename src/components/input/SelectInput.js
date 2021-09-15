import React, {Component} from "react";


class SelectInput extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return (
                <select className={this.props.className} id={this.props.id}>
                    <option>Choose...</option>
                    {
                        this.props.selectData.map((data, index) => {
                            return <option value={data.id} key={index}>{data.name}</option>
                        })
                    }
                </select>

        )
    }
}

SelectInput.defaultValue = {
    selectData: []
}

export default SelectInput;