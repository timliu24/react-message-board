import { Link, navigate } from "@reach/router";
import React, {useState} from "react";
import axios from "axios";


const NewMessage = (props) => {

    const [topic, setTopic] = useState("");
    const [title, setTitle] = useState("");
    const [comment, setComment] = useState("");
    const [image, setImage] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/messages", {
            topic,
            title,
            comment,
            image
        })
        .then((res) => {
            console.log(res);
            console.log(res.data);
            navigate("/")
        })
        .catch((err) => {
            console.log(err)
        })
    }


    return(
        <div>
            <header>
                <Link to={"/"}>Return to Message Board</Link>
                <h1>Add a new message</h1>
            </header>

            <form onSubmit={submitHandler}>

                <div>
                    <label>Topic</label>
                    <select value={topic} onChange={(e)=>setTopic(e.target.value)} name="topic">
                        <option value="none" defaultValue hidden>Select a Topic</option>
                        <option value="Cars">Cars</option>
                        <option value="Comedy">Comedy</option>
                        <option value="Family">Family</option>
                        <option value="Fashion">Fashion</option>
                        <option value="Finance">Finance</option>
                        <option value="Food">Food</option>
                        <option value="Hobbies">Hobbies</option>
                        <option value="Home">Home</option>
                        <option value="Movies">Movies</option>
                        <option value="Music">Music</option>
                        <option value="Pets">Pets</option>
                        <option value="Sport">Sport</option>
                        <option value="Technology">Technology</option>
                        <option value="Travel">Travel</option>
                        <option value="Video Games">Video Games</option>
                    </select>
                </div>

                <div>
                    <label>Title</label>
                    <input value={title} onChange={(e)=>setTitle(e.target.value)} type="text"/>
                </div>

                <div>
                    <label>Comment</label>
                    <textarea value={comment} onChange={(e)=>setComment(e.target.value)} type="text"/>
                </div>

                <div>
                    <label>Image</label>
                    <input value={image} onChange={(e)=>setImage(e.target.value)} type="text" placeholder="Enter a link"/>
                </div>

                <button>Add Comment</button>

            </form>
        </div>
    )
}

export default NewMessage;