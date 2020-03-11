import React from 'react';
import Post from './Post';
import { Link } from 'react-router-dom';

const Posts = (props) => {
    const postsList = props.posts.map((post => 
        <Post key = {post.id} post = {post} deletePost = {props.deletePost} editPost = {props.editPost}/>))
    
        return (
            <div >
                <Link to = '/newpost'><button className='addPost-btn'>New Post</button></Link>
                <div className='all-post-container'>
                {postsList}
                </div>
            </div>
        )
    
    

}

export default Posts;
