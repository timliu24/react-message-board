import React, {useEffect, useState} from "react";
import axios from 'axios';
import {Link} from '@reach/router';


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
            <header>
                <h1>Message Board</h1>
                <Link to={"/new"}>Add a new message</Link>
            </header>

            {
                messageList.map((message, index) => (
                    <div key={index}>
                        <Link to={`/message/${message._id}`}>
                            <p>{message.title}</p>
                            <p>{message.comment}</p>
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}

export default AllMessages;