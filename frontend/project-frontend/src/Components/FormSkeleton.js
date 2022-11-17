import axios from "axios";
import useStateRef from "react-usestateref";

function FormSkeleton(props) {

    
    return (
        <div align = "left">
            <div >Name: {props.firstname} {props.lastname}</div>
            <div>Email: {props.email}</div>
            <div>Phone number: {props.phoneNumber}</div>
            <br/>
            </div>


    );
}

export default FormSkeleton