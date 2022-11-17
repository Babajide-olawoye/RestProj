import axios from "axios";
import { Component, useCallback, useEffect } from "react";
import useStateRef from "react-usestateref";

function FormSkeleton(props) {
    const [id, setId, idRef] = useStateRef(0)


    useEffect(() => {
        setId(props.id)
    }, [])

    const useHandleDeleteReq = (e) => {
        e.preventDefault();
        var deleteConfig = {
            method: 'delete',
            url: 'http://localhost:8080/api/del/' + idRef.current,
            headers: {
                'Content-Type': 'application/json'
            }

        };

        axios(deleteConfig)
            .then(res => console.log(res))
            .catch(err => console.log(err))

        window.location.reload(false)

    }



    return (
        <div align="left">
            <div >Name: {props.firstname} {props.lastname}</div>
            <div>Email: {props.email}</div>
            <div>Phone number: {props.phoneNumber} <button id={props.id} onClick={useHandleDeleteReq}>Delete</button></div>

            <br />
        </div>


    );
}

export default FormSkeleton