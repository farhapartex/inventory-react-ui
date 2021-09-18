import React, {Component} from "react";
import AnchorTag from "../../components/Anchortag";
import InputFormGroup from "../input/InputFormGroup";
import SelectFormGroup from "../input/SelectFormGroup";


class EmployeeForm extends Component{
    constructor(props){
        super(props);
        this.role = [
            {
                "id": 1,
                "name": "Sales"
            },
            {
                "id": 2,
                "name": "Editor"
            }
        ]
    }


    render(){
        return (
            <div className="admin-content mx-auto">
                <div className="w-100 mb-5">
                    <AnchorTag link="/app/shop/employee/list" className="btn btn-primary float-right" itemValue="Back to Employee List"></AnchorTag>
                    <h4>Create Employee</h4>
                </div>
                <div className="w-75">
                    <form>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-6">
                                    <InputFormGroup labelClassName="mb-2" inputClassName="form-control" label="First Name"/>
                                </div>
                                <div className="col-6">
                                    <InputFormGroup labelClassName="mb-2" inputClassName="form-control" label="Last Name"/>
                                </div>
                                <div className="col-6">
                                    <InputFormGroup labelClassName="mb-2" inputClassName="form-control" label="Email"/>
                                </div>
                                <div className="col-6">
                                    <SelectFormGroup labelClassName="mb-2" label="Role" selectClassName="custom-select my-1 mr-sm-2" selectData={this.role}/>
                                </div>
                                

                                <div className="col-12 mt-3">
                                    <div className="form-group">
                                        <AnchorTag className="btn btn-warning" itemValue="Back" link="/app/shop/employee/list"/>
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

export default EmployeeForm;