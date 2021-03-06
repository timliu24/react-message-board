import { Link, navigate } from "@reach/router";
import React, {useState} from "react";
import axios from "axios";
import Form from "./Form";
import Header from "./Header";


const NewMessage = (props) => {
    
    const [errors, setErrors] = useState({});
    const [newMessage, setNewMessage] = useState({
        topic: "",
        title: "",
        comment: "",
        image: ""
    })

    const submitNewHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/messages", newMessage)
        .then((res) => {
            console.log(res);
            console.log(res.data);
            navigate("/")
        })
        .catch((err) => {
            console.log(err);
            console.log("err.response:", err.response);
            console.log("err.response.data:", err.response.data);
            console.log("err.response.data.errors:", err.response.data.errors);
            setErrors(err.response.data.errors)
        })
    }

    return(
        <div>
            <Header
            link={"/"}
            linkText={"Return Home"}
            titleText={"Add a new message"}
            />

            <hr />

            <Form 
            message = {newMessage}
            setMessage = {setNewMessage}
            submitHandler = {submitNewHandler}
            errors = {errors}
            />

        </div>
    )
}

export default NewMessage;