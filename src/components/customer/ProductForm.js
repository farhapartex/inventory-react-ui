import React, {Component} from "react";
import { Link } from "react-router-dom";
import AnchorTag from "../../components/Anchortag";
import InputFormGroup from "../input/InputFormGroup";
import TextAreaFormGroup from "../input/TextAreaFormGroup";


class ProductForm extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return (
            <div className="admin-content mx-auto">
                <div className="w-100 mb-5">
                    <AnchorTag link="/app/shop/product/list" className="btn btn-primary float-right" itemValue="Back to Product List"></AnchorTag>
                    <h4>Create Product</h4>
                </div>
                <div className="w-75">
                    <form>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12">
                                    <InputFormGroup labelClassName="mb-2" inputClassName="form-control" label="Name"/>
                                </div>
                                <div className="col-12">
                                    <TextAreaFormGroup label="Description"/>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label className="mb-2">Category</label>
                                        <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                                            <option selected>Choose...</option>
                                            <option value="1">Electronic Accessories</option>
                                            <option value="2">Health & Beauty</option>
                                            <option value="3">Home & Lifestyle</option>
                                        </select>
                                    </div>
                                </div>
                                
                                <div className="col-6">
                                    <InputFormGroup labelClassName="mb-2" label="Product Price"/>
                                    <div className="form-group">
                                        <label className="mb-2">Product Price</label>
                                        <input type="text" className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label className="mb-2">Selling Price</label>
                                        <input type="text" className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label className="mb-2">Stock Amount</label>
                                        <input type="number" className="form-control"/>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="form-group form-check">
                                        <input type="checkbox" className="form-check-input" id="publicOnCreation"/>
                                        <label className="form-check-label" for="publicOnCreation">Make public on creation</label>
                                    </div>
                                </div>

                                <div className="col-12 mt-3">
                                    <div className="form-group">
                                        <AnchorTag className="btn btn-warning" itemValue="Back" link="/app/shop/product/list"/>
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

export default ProductForm;