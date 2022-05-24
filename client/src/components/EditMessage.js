import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";
import Form from "./Form";
import Header from "./Header";

const EditMessage = (props) => {

    const {id} = props;
    const [errors, setErrors] = useState({});
    const [editedMessage, setEditedMessage] = useState({
        topic: "",
        title: "",
        comment: "",
        image: ""
    })

    useEffect(() => {
        axios.get(`http://localhost:8000/api/messages/${id}`)
        .then((res) => {
            console.log(res);
            console.log(res.data);
            setEditedMessage(res.data)
        })
        .catch((err) => console.log(err))
    }, [])

    const submitEditHandler = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:8000/api/messages/${id}`, editedMessage)
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
            titleText={"Edit a new message"}
            />

            <hr />

            <Form 
            message = {editedMessage}
            setMessage = {setEditedMessage}
            submitHandler = {submitEditHandler}
            errors = {errors}
            />

        </div>
    )
}

export default EditMessage;