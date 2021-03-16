import React from 'react';
import post from './Post.module.css';

const Post = (props) => {
    return (
        <div className={post.item}>
        
            <div >
                <img className={post.avatar} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnIZ65bUZfqwc204EF5GN3tpbfY5zQ2WiB1A&usqp=CAU" alt=""/>
                {props.message}
            </div>
            <div>
                <span className="like">like </span>{props.likesCount}
            </div>
        </div>
    );
}

export default Post;