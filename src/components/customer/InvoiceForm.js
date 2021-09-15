import React, {Component} from "react";
import { Link } from "react-router-dom";
import AnchorTag from "../../components/Anchortag";
import Button from "../Button";


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
                    <div className="container-fluid">
                        <div className="row mb-5">
                            <div className="col-3">
                                <div className="form-group">
                                    <Button className="btn btn-success w-100" text="Add Item" dataToggle="modal" dataTarget="#exampleModalCenter"/>
                                </div>
                            </div>
                        </div>

                        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered" role="document">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalCenterTitle">Modal title</h5>
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

                    </div>
                </div>
            </div>
        ) 
    }
}

export default InvoiceForm;