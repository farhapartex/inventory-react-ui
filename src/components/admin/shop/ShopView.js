import React, {Component} from "react";
import "../../../style/admin.css";
import AnchorTag from "../../../components/Anchortag";


class ShopView extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return (
            <div className="admin-content mx-auto">
                <div className="w-100 mb-5">
                    <AnchorTag link="/admin/shop/shop-list" className="btn btn-primary float-right" itemValue="Back to Shop List"></AnchorTag>
                    <h4>Shop Details</h4>
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
                                        <input type="text" className="form-control" value="Md Nazmul" readOnly/>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label className="mb-2">Last Name</label>
                                        <input type="text" className="form-control" value="Hasan" readOnly/>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label className="mb-2">Email</label>
                                        <input type="text" className="form-control" value="hasan08sust@gmail.com" readOnly/>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label className="mb-2">Status</label>
                                        <input type="text" className="form-control" value="Active" readOnly/>
                                    </div>
                                </div>


                                <div className="col-12">
                                    <p><b>Shop Information</b></p>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label className="mb-2">Shop Name</label>
                                        <input type="text" className="form-control" value="Digital Camera Shop" readOnly/>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label className="mb-2">Total Employee</label>
                                        <input type="text" className="form-control" value="25" readOnly/>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label className="mb-2">Total Products</label>
                                        <input type="text" className="form-control" value="245" readOnly/>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label className="mb-2">Status</label>
                                        <input type="text" className="form-control" value="Active" readOnly/>
                                    </div>
                                </div>

                                <div className="col-12 mt-3">
                                    <div className="form-group">
                                        <AnchorTag className="btn btn-warning" itemValue="Back" link="/admin/shop/shop-list"/>
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

export default ShopView;