import React, {Component} from "react";
import AnchorTag from "../../components/Anchortag";
import InputFormGroup from "../input/InputFormGroup";
import PrimaryAlert from "../alerts/Primary";


class ShopEdit extends Component{
    constructor(props){
        super(props);
        this.state = {
            showSuccessMsg: false,
            showErrorMsg: false,
            shopName: ""
        }
        
    }



    handleShopUpdate(){
        this.setState({showSuccessMsg: true})
    }

    handleOnChange(e){
        this.setState({shopName: e.target.value});
    }


    render(){
        return (
            <div className="admin-content mx-auto">
                <div className="w-100 mb-5">
                    <h4>Shop Details</h4>
                </div>
                <div className="w-75">
                    <div className="container-fluid">
                        <div className="row">
                            <div className={"col-12 " + (this.state.showSuccessMsg ? "": "d-none")}>
                                <PrimaryAlert className="alert alert-primary" alertMessage="Shop name updated"/>
                            </div>

                            <div className="col-12 mt-3">
                                <p><b>Shop Information</b></p>
                            </div>
                            <div className="col-6">
                                <InputFormGroup labelClassName="mb-2" onChange={this.handleOnChange} inputClassName="form-control" label="Shop Name" value="Digital Camera Shop"/>
                            </div>

                            <div className="col-12 mt-4">
                                <div className="form-group">
                                    <AnchorTag className="btn btn-sm btn-warning mr-3" itemValue="View Shop" link="/app/shop/view"/>
                                    <input type="submit" className="btn btn-sm btn-primary" value="Update" onClick={() => this.handleShopUpdate()}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        ) 
    }
}

export default ShopEdit;