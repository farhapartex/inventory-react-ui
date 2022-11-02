import React, {Component} from "react";
import AnchorTag from "../../components/Anchortag";
import Table from "../../components/table/Table";
import InputFormGroup from "../input/InputFormGroup";
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';
import './InvoiceList.Styles.css';



class InvoiceList extends Component{
    constructor(props){
        super(props);
        this.columnList = ["ID", "Customer", "Invoice ID", "Total", "Paid", "Date", "Action"];
        this.tableData = [
            {"id": 1, "customer": "Md Nazmul Hasan", "invoice_id": "201256", "total": "238.00", "is_paid": "Yes", "date": "20th July, 2021"},
            {"id": 2, "customer": "Farzana Yesmin", "invoice_id": "201256", "total": "980.00", "is_paid": "Yes", "date": "8th July, 2021"},
            {"id": 3, "customer": "Amit Shah", "invoice_id": "201256", "total": "305.00", "is_paid": "Yes", "date": "11th May, 2021"},
            {"id": 4, "customer": "Md Farhan Kabir", "invoice_id": "201256", "total": "139.00", "is_paid": "No", "date": "1st April, 2021"},
            {"id": 3, "customer": "Amit Shah", "invoice_id": "201256", "total": "305.00", "is_paid": "Yes", "date": "11th May, 2021"},
            {"id": 4, "customer": "Md Farhan Kabir", "invoice_id": "201256", "total": "139.00", "is_paid": "No", "date": "1st April, 2021"},
        ]
    }


    render(){
        return (
           
                <SpreadsheetComponent height="100vh" className="my-5"/>
                
        ) 
    }
}

export default InvoiceList;