import React, {Component} from "react";
import "../../style/admin.css";


class ProfilePage extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return (
            <div className="admin-content mx-auto">
                <div className="w-100 mb-5">
                    <h4>Personal Profile</h4>
                </div>
                <div className="w-75">
                    <form>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-6">
                                    <div className="form-group">
                                        <label className="mb-2">First Name</label>
                                        <input type="text" className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label className="mb-2">Last Name</label>
                                        <input type="text" className="form-control"/>
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
                                        <label className="mb-2">Role</label>
                                        <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                                            <option >Choose...</option>
                                            <option value="1">Super Admin</option>
                                            <option value="2">Admin</option>
                                            <option value="3">Editor</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label className="mb-2">Joined</label>
                                        <input type="text" className="form-control" value="23rd August, 2021" readOnly/>
                                    </div>
                                </div>

                                <div className="col-12 mt-3">
                                    <div className="form-group">
                                        <input type="submit" className="btn btn-warning" value="Update"/>
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

export default ProfilePage;