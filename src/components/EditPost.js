import React from 'react';
import {Link} from 'react-router-dom';

const EditPost = ({id,editPost,handleChange,post}) => {
     const {title,category,description} = post;
    return (
     <div>
         Title : <input type = "text" name = 'title' value = {title} onChange = {handleChange}></input>
         Category: <input type = "text" name = 'category' value = {category} onChange = {handleChange}></input>
         Description :<textarea type = "text" name = 'description' value = {description} onChange = {handleChange}></textarea>
         <Link to = {`/post/${id}`}><button className = 'cancelBtn'>Cancel</button></Link>
         <Link to='/'><button onClick = {() => editPost(id)} className>Save</button></Link>
         
     </div>
    )
}

export default EditPost;
