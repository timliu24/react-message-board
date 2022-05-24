import { Link, navigate } from "@reach/router";
import React, {useState} from "react";
import axios from "axios";


const Form = (props) => {

    const {message, setMessage, submitHandler, errors} = props;

    const onChangeHandler = (e) =>{
        const newStateObject = {...message};
        newStateObject[e.target.name] = e.target.value;
        console.log("e.target.name = ", e.target.name);
        console.log("e.target.value = ", e.target.value);
        setMessage(newStateObject)
    }

    return(
        <div>
            <form onSubmit={submitHandler}>

                <div>
                    <label>Topic</label>
                    <select value={message.topic} name="topic" onChange={onChangeHandler}>
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
                {
                    errors.topic?
                    <span>{errors.topic.message}</span>
                    :null
                }

                <div>
                    <label>Title</label>
                    <input value={message.title} name="title" onChange={onChangeHandler} type="text"/>
                </div>
                {
                    errors.title?
                    <span>{errors.title.message}</span>
                    :null
                }

                <div>
                    <label>Comment</label>
                    <textarea value={message.comment} name="comment"onChange={onChangeHandler} type="text"/>
                </div>
                {
                    errors.comment?
                    <span>{errors.comment.message}</span>
                    :null
                }

                <div>
                    <label>Image</label>
                    <input value={message.image} name="image" onChange={onChangeHandler} type="text" placeholder="Enter a link"/>
                </div>

                <button>Submit</button>

            </form>
        </div>
    )
}

export default Form;