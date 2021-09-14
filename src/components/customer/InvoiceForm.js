import React, {Component} from "react";
import { Link } from "react-router-dom";
import AnchorTag from "../../components/Anchortag";


class InvoiceForm extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return (
            <div className="admin-content mx-auto">
                <div className="w-100 mb-5">
                    <AnchorTag link="/app/shop/invoice/list" className="btn btn-primary float-right" itemValue="Back to Invoice List"></AnchorTag>
                    <h4>Create Invoice</h4>
                </div>
                <div className="w-75">
                    <form>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12">
                                    <div className="form-group">
                                        <label className="mb-2">Customer Name</label>
                                        <input type="text" className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label className="mb-2">From</label>
                                        <textarea className="form-control" rows="4"></textarea>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label className="mb-2">Bill To</label>
                                        <textarea className="form-control" rows="4"></textarea>
                                    </div>
                                </div>
                                
                                <div className="col-6">
                                    <div className="form-group">
                                        <label className="mb-2">Date</label>
                                        <input type="text" className="form-control"/>
                                    </div>
                                </div>

                                <div className="col-12 mt-3">
                                    <div className="form-group">
                                        <AnchorTag className="btn btn-warning" itemValue="Back" link="/app/shop/product/list"/>
                                        <button type="button" className="btn btn-success ml-3" data-toggle="modal" data-target="#exampleModalCenter">Add Item</button>
                                    </div>
                                </div>

                                <div className="col-12 mt-3">
                                    <div className="w-100 horizontal-line"></div>
                                </div>
                            </div>
                        </div>


                        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalCenterTitle">Add Product</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                ...
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
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

export default InvoiceForm;