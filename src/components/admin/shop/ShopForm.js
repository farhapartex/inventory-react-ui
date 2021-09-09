import React, {Component} from "react";
import { Link } from "react-router-dom";
import "../../../style/admin.css";
import AnchorTag from "../../../components/Anchortag";


class ShopForm extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return (
            <div className="admin-content mx-auto">
                <div className="w-100 mb-5">
                    <AnchorTag link="/admin/settings/user-list" className="btn btn-primary float-right" itemValue="Back to Shop List"></AnchorTag>
                    <h4>Create Shop</h4>
                </div>
                <div className="w-75">
                    <form>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12">
                                    <p><b>Shop Owner Information</b></p>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label className="mb-2">First Name</label>
                                        <input type="text" className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label className="mb-2">Last Name</label>
                                        <input type="text" className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label className="mb-2">Email</label>
                                        <input type="text" className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <p><b>Shop Information</b></p>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label className="mb-2">Shop Name</label>
                                        <input type="text" className="form-control"/>
                                    </div>
                                </div>

                                <div className="col-12 mt-3">
                                    <div className="form-group">
                                        <AnchorTag className="btn btn-warning" itemValue="Back" link="/admin/shop/shop-list"/>
                                        <input type="submit" className="btn btn-success ml-3" value="Submit"/>
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

export default ShopForm;