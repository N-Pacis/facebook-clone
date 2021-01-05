import React,{useState,useEffect} from 'react';
import "./feed.css";
import StoryReel from "./storyReel";
import CreatePost from "./createPost";
import Posts from "./Posts";
import db from "./firebase"

function Feed() {
    const[posts,setPosts] = useState([])

    useEffect(() => {
        db.collection("posts").orderBy('timestamp','desc').onSnapshot((snapshot)=>
           setPosts(snapshot.docs.map((doc)=>({id:doc.id,data:doc.data()})))
        );
    }, []);

    return (
        <div className="feed">
            {/* Story component*/}
            <StoryReel />
            {/* Create post component*/}
            <CreatePost />
            {/* posts component */}
            {posts.map((post)=>(
                    <Posts
                       key = {post.id}
                       profilePic = {post.data.profilePic}
                       message = {post.data.message}
                       timestamp = {post.data.timestamp}
                       username = {post.data.username}
                       image = {post.data.image} 
                    />
            ))}
        </div>
    )
}

export default Feed;
