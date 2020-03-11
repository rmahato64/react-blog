import React from 'react';
import { Link } from 'react-router-dom';

const AddPost = ({post,addPost,handleChange}) => {
    const {title,category,description} = post
    return (
        <div className = "form-container">
            <div>
                <h1>New Post</h1>
            </div>
            <div className="form-inner">
                 <div className="input-holder">
                    <span className="label"> Title:</span>
                    <input  className = "input-text" type = "text" name = 'title' value = {title} onChange = {handleChange}></input> 
                </div> 
                <div className="input-holder">
                    <span className="label"> Category:</span>
                    <input  className = "input-text" type = "text" name = 'category' value = {category} onChange = {handleChange}></input> 
                </div> 
                <div className = "input-holder">
                    <span className="label"> Write new post:</span> 
                    <textarea className="input-text" type = "text" name = 'description' value = {description} onChange = {handleChange}></textarea>
                </div>
                <div>
                    <Link to='/'><button className="postBtn" onClick = {addPost}>Add</button></Link>
                    <Link to='/'><button className ="cancelBtn">Cancel</button></Link>
                </div>
            </div>        
        </div>
    )
}

export default AddPost;


