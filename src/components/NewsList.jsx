import React from 'react';
import NewsItem from "./NewsItem";
import {useEffect, useState} from "react";
import axios from "axios";
import Title from "./Title";

const NewsList = (props) => {

    return (
        <div>

            <Title title={"//////// News List /////////"}/>
            {props.posts.map(post =>
                <NewsItem post={post} key={post.id }/>
            )}
        </div>
    );
};

export default NewsList;
