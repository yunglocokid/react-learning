import React, {useRef} from 'react';
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";
import MyTextarea from "./UI/textarea/MyTextarea";
import {useState} from "react";
import axios from "axios";

const CreateNews = (props) => {
    let [title, setTitle] = useState('')
    let [body, setBody] = useState('')
    let [addedPost, setAddedPost] = useState({})


    function addNews(){
        if (title !== '' && body !== '') {
            // fetch('https://jsonplaceholder.typicode.com/posts', {
            //     method: 'POST',
            //     body: JSON.stringify({
            //         title: title,
            //         body: body,
            //         userId: 1,
            //     }),
            //     headers: {
            //         'Content-type': 'application/json; charset=UTF-8',
            //     },
            // })
            //     .then((response) => response.json())
            //     .then((json) => {
                    try{
                        const jsonSpread = {
                            body: body,
                            title: title,
                            id: Date.now()
                        }
                        console.log(jsonSpread)
                        setAddedPost(jsonSpread)

                        const newPost = {
                            ...jsonSpread,
                        }
                        console.log(newPost)
                        props.create(newPost)
                    } catch {
                        console.log("Попробуйте еще раз")
                    }

                // }
                // .catch(err => console.error(err));
        }
        else {
            console.warn("Обнаружено путое поле")
        }
    }
     return (
        <div>
            <MyInput value={title} onChange={event => setTitle(title = event.target.value)} type="text" placeholder="Название новости"/>
            <MyTextarea value={body} onChange={event => setBody(body = event.target.value)} type="text" placeholder="Тело новости"/>
            <center>
                <MyButton onClick={addNews}>Создать новость</MyButton>
            </center>
        </div>
    );
};

export default CreateNews;
