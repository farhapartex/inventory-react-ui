import React, {Component} from "react";
import AnchorTag from "../../components/Anchortag";
import Table from "../../components/table/Table";


class ProductCategoryList extends Component{
    constructor(props){
        super(props);
        this.columnList = ["ID", "Name", "Total Product", "Action"];
        this.tableData = [
            {"id": 1, "name": "Electronic Accessories", "total_products": "12"},
            {"id": 2, "name": "Clothing", "total_products": "30"},
            {"id": 3, "name": "Health & Beauty", "total_products": "30"},
            {"id": 4, "name": "Home & Lifestyle", "total_products": "30"}
        ]
    }


    render(){
        return (
            <div className="admin-content mx-auto">
                <div className="w-100 mb-5">
                    <AnchorTag link="/app/shop/product-category/create" className="btn btn-warning float-right" itemValue="Create Category"></AnchorTag>
                    <h4>Product Category List</h4>
                </div>
                <Table className="table table-striped" columnList={this.columnList} tableData={this.tableData} actionLinkPrefix=""></Table>
            </div>
        ) 
    }
}

export default ProductCategoryList;