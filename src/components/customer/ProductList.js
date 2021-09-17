import React, {Component} from "react";
import AnchorTag from "../../components/Anchortag";
import Table from "../../components/table/Table";
import InputFormGroup from "../../components/input/InputFormGroup";
import SelectFormGroup from "../../components/input/SelectFormGroup";


class ProductList extends Component{
    constructor(props){
        super(props);
        this.columnList = ["ID", "Name", "Category", "Price", "Stock Amount", "Action"];
        this.tableData = [
            {"id": 1, "name": "USB 2.0 to Sata 7+15 Pin 2.5 Converter ..", "category": "Computer Accessories", "price": "238.00", "stock": 20},
            {"id": 2, "name": "FANTECH VX7 CRYPTO GAMING MOUSE ..", "category": "Computer & Laptop", "price": "980.00", "stock": 34},
            {"id": 3, "name": "Cake decoration turntable - 28cm and 3 pieces set ..", "category": "Kitchen & Dining", "price": "305.00", "stock": 14},
            {"id": 4, "name": "Stylish White Sunglasses ..", "category": "Watch & Sunglasses", "price": "139.00", "stock": 40},
        ]

        this.selectData = [
            {"id": 1, "name": "Electronic Accessories"},
            {"id": 2, "name": "Health & Beauty"},
            {"id": 3, "name": "Home & Lifestyle"}
        ]
    }


    render(){
        return (
            <div className="admin-content mx-auto">
                <div className="w-100 mb-5">
                    <AnchorTag link="/app/shop/product/create" className="btn btn-sm btn-warning float-right" itemValue="Create Product"></AnchorTag>
                    <h4>Product List</h4>
                </div>
                <div className="row mb-5">
                    <div className="col-12">
                        <p><b>Search Box</b></p>
                    </div>
                    <div className="col-2">
                        <InputFormGroup labelClassName="mb-2" label="" inputClassName="form-control form-control-sm" placeholder="Product Name"/>
                    </div>
                    <div className="col-2">
                        <SelectFormGroup labelClassName="mb-2" label="" selectClassName="custom-select custom-select-sm" selectData={this.selectData}/>
                    </div>
                    <div className="col-2">
                        <InputFormGroup labelClassName="mb-2" inputClassName="form-control form-control-sm" placeholder="Product Price"/>
                    </div>
                    <div className="col-2">
                        <div className="form-group">
                            <input type="submit" className="w-100 btn btn-sm btn-success" value="Search"/>
                        </div>
                    </div>
                </div>
                <Table className="table table-striped" columnList={this.columnList} tableData={this.tableData} actionLinkPrefix=""></Table>
            </div>
        ) 
    }
}

export default ProductList;