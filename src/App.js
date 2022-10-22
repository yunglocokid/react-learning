import Counter from "./components/Counter";
import InputComponent from "./components/InputComponent";
import "../src/css/App.css";

import NewsList from "./components/NewsList";
import MyButton from "./components/UI/button/MyButton";
import CreateNews from "./components/CreateNews";
import {useEffect, useState} from "react";
import axios from "axios";

function App() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        const apiUrl = 'https://jsonplaceholder.typicode.com/posts?_start=0&_limit=5';
        axios.get(apiUrl).then((resp) => {
            const allPosts = resp.data;
            setPosts(allPosts);
        });
    }, [setPosts]);

    const createPost = (newPost) => {
        console.log(newPost)
        setPosts([...posts, newPost])
    }

  return (
    <div className="App">
        <center>
            <Counter/>
            <InputComponent></InputComponent>
        </center>

        <NewsList posts={posts}></NewsList>

        <div className="create_post__container">
            <CreateNews create={createPost}></CreateNews>
        </div>

    </div>
  );
}

export default App;
