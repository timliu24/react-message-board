import React, {useEffect, useState} from "react";
import axios from 'axios';
import {Link} from '@reach/router';
import Header from "./Header";
import DeleteButton from "./DeleteButton";


const AllMessages = (props) => {

    const[messageList, setMessageList] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/messages")
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setMessageList(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return(
        <div>
            <Header
            link={"/new"}
            linkText={"Add a new message"}
            titleText={"Message Board"}
            />

            <hr />

            {
                messageList.map((message, index) => (
                    <div key={index}>
                        <Link to={`/message/${message._id}`}>
                            <h2>{message.title}</h2>
                            <p>{message.comment}</p>
                        </Link>
                        <Link to={`/message/edit/${message._id}`}>Edit Message</Link>
                        <DeleteButton
                        id={message._id}
                        messageList={messageList}
                        setMessageList={setMessageList}
                        />
                    </div>
                ))
            }
        </div>
    )
}

export default AllMessages;