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



    const useHandleDeleteReq = (id, e) => {
        e.preventDefault();
        var deleteConfig = {
            method: 'delete',
            url: 'http://localhost:8080/api/del/' + id,
            headers: {
                'Content-Type': 'application/json'
            }

        };

        axios(deleteConfig)
            .then(res => console.log(res))
            .catch(err => console.log(err))


    }


    useEffect(() => {
        axios(config)
            .then(function (response) {
                setData(response.data);
                // console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });

    }, []);
    console.log(data)

    return (
        <div>

            {data.map(({ firstname, lastname, email, phoneNumber, id }) => {
                return <div>
                    <FormSkeleton firstname={firstname} lastname={lastname} email={email} phoneNumber={phoneNumber} id={id} del={useHandleDeleteReq} />

                </div>
            })}

            <UserInputForm />

        </div>

    );
}

export default DisplayUserInfo;
