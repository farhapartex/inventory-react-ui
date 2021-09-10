import React, {Component} from "react";
import { Link } from "react-router-dom";
import AnchorTag from "../../components/Anchortag";


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
                                    <div className="form-group">
                                        <label className="mb-2">Shop Name</label>
                                        <input type="text" className="form-control" value="Digital Camera Shop"/>
                                    </div>
                                </div>

                                <div className="col-12 mt-4">
                                    <div className="form-group">
                                        <AnchorTag className="btn btn-warning mr-3" itemValue="View Shop" link="/app/shop/view"/>
                                        <input type="submit" className="btn btn-primary" value="Update"/>
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