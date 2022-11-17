import axios from "axios";
import useStateRef from "react-usestateref";

function UserInputForm() {

    const [firstnameInput, setfirstnameInput, firstnameInputRef ] = useStateRef("")
    const [lastnameInput, setlastnameInput, lastnameInputRef ] = useStateRef("")
    const [phoneInput, setPhoneInput, phoneInputRef ] = useStateRef()
    const [email, setEmail, emailRef ] = useStateRef("")


    var data = JSON.stringify({
        "firstname": firstnameInputRef.current,
        "lastname": lastnameInputRef.current,
        "email": emailRef.current,
        "phoneNumber": phoneInputRef.current
    });

    var config = {
        method: 'post',
        url: 'http://localhost:8080/api/new/Info',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };

    const handleFirstNameInput = (e) =>{
        setfirstnameInput(e.target.value)
        console.log(e.target.value);

    }
    const handlesetLastnameInput = (e) =>{
        setlastnameInput(e.target.value)
        console.log(e.target.value);

    }
    const handlePhoneInput = (e) =>{
        setPhoneInput(e.target.value)
        console.log(e.target.value);

    }
    const handleEmailInput = (e) =>{
        setEmail(e.target.value)
        console.log(e.target.value);

    }

    const submitHandler = () => {
        console.log(firstnameInputRef.current);

        axios(config)
            .then(function (response) {
                console.log("JSON.stringify(response.data)");
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    return (
        <div>
            <form onSubmit={submitHandler}>
                <label>First name</label>
                <input type="text" id="firstname" placeholder="Please input first name" onChange={handleFirstNameInput}/>
                <label>Last name</label>
                <input type="text" id="lastname" placeholder="Please input last name" onChange={handlesetLastnameInput}/>
                <label>Phone number</label>
                <input type="text" id="phone" placeholder="Please input phone number" onChange={handlePhoneInput}/>
                <label>Email</label>
                <input type="text" id="email" placeholder="Please input email" onChange={handleEmailInput}/>
                <button>Submit</button>
            </form>


            

        </div>





    );
}

export default UserInputForm;
