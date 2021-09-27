import React, {Component} from "react";
import AnchorTag from "../../components/Anchortag";
import InputFormGroup from "../input/InputFormGroup";


class ShopEdit extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return (
            <div className="admin-content mx-auto">
                <div className="w-100 mb-5">
                    <h4>Shop Details</h4>
                </div>
                <div className="w-75">
                    <form>
                        <div className="container-fluid">
                            <div className="row">

                                <div className="col-12 mt-3">
                                    <p><b>Shop Information</b></p>
                                </div>
                                <div className="col-6">
                                    <InputFormGroup labelClassName="mb-2" inputClassName="form-control" label="Shop Name" value="Digital Camera Shop"/>
                                </div>

                                <div className="col-12 mt-4">
                                    <div className="form-group">
                                        <AnchorTag className="btn btn-sm btn-warning mr-3" itemValue="View Shop" link="/app/shop/view"/>
                                        <input type="submit" className="btn btn-sm btn-primary" value="Update"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </form>
                </div>
                
            </div>
        ) 
    }
}

export default ShopEdit;