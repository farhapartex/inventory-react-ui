import React, {Component} from "react";
import AnchorTag from "../../components/Anchortag";


class ProductView extends Component{
    constructor(props){
        super(props);
        this.productDetails = "PERFECT GIFT IDEA: Works on wet, dry, Long, short, thick, curly, and straight hair. Perfect gift for Valentines Day, Mother's Day, Thanksgiving, Christmas, Anniversary and Birthday to your girlfriend, wife, mom, sister and friends. NOTE: Paddle brush is designed to have one missing pin on the bottom of the cushion. This is to help with air circulation and is not a product defect."
    }


    render(){
        return (
            <div className="admin-content mx-auto">
                <div className="w-100 mb-5">
                    <h4>Product Details</h4>
                </div>
                <div className="w-75">
                    <form>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12">
                                    <div className="form-group">
                                        <label className="mb-2">Name</label>
                                        <input type="text" className="form-control" value="Large Paddle Hair Brush Salon Hair Styling Tools" readOnly/>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <label className="mb-2">Description</label>
                                        <textarea className="form-control" value={this.productDetails} rows="10" readOnly/>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label className="mb-2">Category</label>
                                        <input type="text" className="form-control" value="Health & Beauty" readOnly/>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label className="mb-2">Price</label>
                                        <input type="text" className="form-control" value="1205" readOnly/>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label className="mb-2">Selling Price</label>
                                        <input type="text" className="form-control" value="1000" readOnly/>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label className="mb-2">Stock Amount</label>
                                        <input type="text" className="form-control" value="234" readOnly/>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label className="mb-2">Product Visibilty Status</label>
                                        <input type="text" className="form-control" value="Public" readOnly/>
                                    </div>
                                </div>

                                <div className="col-12 mt-4">
                                    <div className="form-group">
                                        <AnchorTag className="btn btn-warning" itemValue="Back to List" link="/app/shop/product/list"/>
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

export default ProductView;