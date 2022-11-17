import axios from "axios";
import { useEffect, useState, Component } from "react";
import useStateRef from "react-usestateref";
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
        return <div align = "left">
            <div >Name: {firstname} {lastname}</div>
            <div>Email: {email}</div>
            <div>Phone number: {phoneNumber}</div>
            <br/>
            </div>
      })}

        <UserInputForm/>
        
        </div>

    );
}

export default DisplayUserInfo;
