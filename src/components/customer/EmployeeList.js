import React, {Component} from "react";
import AnchorTag from "../../components/Anchortag";
import Table from "../../components/table/Table";


class EmployeeList extends Component{
    constructor(props){
        super(props);
        this.columnList = ["ID", "Name", "Email", "Role", "Status", "Joined At", "Action"];
        this.tableData = [
            {"id": 1, "name": "Farhan Chowdhury", "email": "farhan.chowdhury@gmail.com", "role": "Sales", "status": "Active", "joined_at": "20th August, 2021"},
            {"id": 2, "name": "David Moree", "email": "david.moree.987@gmail.com", "role": "Sales", "status": "Active", "joined_at": "30th August, 2021"},
        ]
    }


    render(){
        return (
            <div className="admin-content mx-auto">
                <div className="w-100 mb-5">
                    <AnchorTag link="/app/shop/employee/create" className="btn btn-warning float-right" itemValue="Create Employee"></AnchorTag>
                    <h4>Employee List</h4>
                </div>
                <div className="row mb-5">
                    <div className="col-12">
                        <p><b>Search Box</b></p>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Employee email"/>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Employee name"/>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <select class="custom-select" id="inlineFormCustomSelectPref">
                                <option selected>Choose Role...</option>
                                <option value="1">Electronic Accessories</option>
                                <option value="2">Health & Beauty</option>
                                <option value="3">Home & Lifestyle</option>
                            </select>
                        </div>
                    </div>
                    
                    <div className="col">
                        <div className="form-group">
                            <input type="submit" className="btn btn-success" value="Search"/>
                        </div>
                    </div>
                </div>
                <Table className="table table-striped" columnList={this.columnList} tableData={this.tableData} actionLinkPrefix=""></Table>
            </div>
        ) 
    }
}

export default EmployeeList;