import axios from "axios";
import { useEffect, Component } from "react";
import useStateRef from "react-usestateref";
import FormSkeleton from "./FormSkeleton";
import UserInputForm from "./UserInputForm";

function DisplayUserInfo() {
    const [data, setData, dataRef] = useStateRef([])

    var config = {
        method: 'get',
        url: 'http://localhost:8080/api/all',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    useEffect(() => {
        axios(config)
            .then(function (response) {
                setData(response.data);
                // console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });

    },[]);
    console.log(data)

    return (
        <div>

        {data.map(({firstname, lastname, email, phoneNumber }) => {
        return <FormSkeleton firstname = {firstname} lastname = {lastname} email = {email} phoneNumber = {phoneNumber}/>
      })}

        <UserInputForm/>
        
        </div>

    );
}

export default DisplayUserInfo;
