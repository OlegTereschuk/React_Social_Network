import React from 'react';
import profileInfo from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className={profileInfo.banner}>
            <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt=""/>
        </div>
    );
}

export default ProfileInfo;