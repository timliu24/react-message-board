import React from "react";
import axios from "axios";
import { navigate } from "@reach/router";

const DeleteButton = (props) => {

    const {id, messageList, setMessageList} = props;

    const deleteFilter = (id) => {
        setMessageList(messageList.filter((message, index) => message._id !== id))
    }

    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/messages/${id}`)
        .then((res) =>{
            console.log(res);
            console.log(res.data);
            if(messageList){
                deleteFilter(id)
            }
            else{
                navigate("/")
            }
        })
        .catch((err) =>{
            console.log(err)
        })
    }

    return(
        <button onClick={deleteHandler}>Delete</button>
    )
}

export default DeleteButton;