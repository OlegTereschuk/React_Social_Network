import React from 'react';
import myPosts from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postElements = props.posts.map((p) => {
        return(
            <Post message={p.message} likesCount={p.likesCount} id={p.id} />
        )
    })

    return (
        <div className={myPosts.main}>
            <h3>My Posts </h3>
            <textarea name="" id="" cols="20" rows="6"></textarea>
            <button>Add post</button>
            <div className={myPosts.posts}>
                { postElements }
            </div>
        </div>
    );
}

export default MyPosts;