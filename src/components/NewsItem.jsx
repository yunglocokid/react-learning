import React from 'react';
import MyButton from "./UI/button/MyButton";

const NewsItem = (props) => {

    function removeTodo(e){
        console.log(e.target.id)
    }
    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.post.id + ". " + props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className="post__buttons">
                <MyButton onClick={removeTodo} id={"news-delete-" + props.post.id}>Удалить</MyButton>
            </div>
        </div>
    );
};

export default NewsItem;
