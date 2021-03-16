import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import profile from './Profile.module.css';

const Profile = () => {
    return (
        <div className={profile.main}>
            <div className={profile.banner}>
                <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt=""/>
            </div>
            <MyPosts />

        </div>
    );
}

export default Profile;