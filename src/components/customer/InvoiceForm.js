import React, {Component} from "react";
import { Link } from "react-router-dom";
import AnchorTag from "../../components/Anchortag";
import Button from "../Button";
import InputFormGroup from "../input/InputFormGroup";
import SelectFormGroup from "../input/SelectFormGroup";


class InvoiceForm extends Component{
    constructor(props){
        super(props);
        this.productCategory = [
            {
                "id": 1,
                "name": "Computer Accessories"
            },
            {
                "id": 2,
                "name": "Kitchen & Dining"
            },
            {
                "id": 2,
                "name": "Watch & Sunglasses"
            }
        ]
    }


    render(){
        return (
            <div className="admin-content mx-auto">
               <div className="w-100 mb-5">
                    <AnchorTag link="/app/shop/invoice/list" className="btn btn-primary float-right" itemValue="Back to Invoice List"></AnchorTag>
                    <h4>Create Invoice</h4>
                </div>
                <div className="w-75">
                    <div className="container-fluid">
                        <div className="row mb-5">
                            <div className="col-3">
                                <div className="form-group">
                                    <Button className="btn btn-success w-100" text="Add Item" dataToggle="modal" dataTarget="#exampleModalCenter"/>
                                </div>
                            </div>
                        </div>

                        <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div className="modal-dialog modal-xl modal-dialog-centered" role="document">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalCenterTitle">Search & Add Product</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="form-row mb-5 modal-search-box">
                                    <div className="col-12">
                                        <p><b>Search Box</b></p>
                                    </div>
                                    <div className="col-3">
                                        <InputFormGroup labelClassName="sr-only" inputClassName="form-control" placeholder="Product Name"/>
                                    </div>
                                    <div className="col-3">
                                        <InputFormGroup labelClassName="sr-only" inputClassName="form-control" placeholder="Product Code"/>
                                    </div>
                                    <div className="col-3">
                                        <SelectFormGroup labelClassName="sr-only" placeholder="Category" selectClassName="custom-select mr-sm-2" selectData={this.productCategory}/>
                                    </div>
                                    <div className="col-3">
                                        <Button className="btn btn-warning" text="Search"/>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                            </div>
                        </div>
                        </div>

                    </div>
                </div>
            </div>
        ) 
    }
}

export default InvoiceForm;