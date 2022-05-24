import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";
import DeleteButton from "./DeleteButton";

const OneMessage = (props) => {

    const {id} = props;
    const [message, setMessage] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/messages/${id}`)
            .then ((res) => {
                console.log(res);
                console.log(res.data);
                setMessage(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [id])

    return(
        <div>
            <Link to={"/"}>Return to Message Board</Link>
            <h1>{message.title}</h1>
            <p>{message.comment}</p>
            <img src={message.image} alt="message image"/>
            {/* <p>{message.createdBy}</p> */}
            <p>{message.createdAt}</p>
            <DeleteButton
            id={message._id}
            />
        </div>
    )
}

export default OneMessage;