import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import profile from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div className={profile.main}>
            <ProfileInfo />
            <MyPosts posts={props.posts}/>

        </div>
    );
}

export default Profile;