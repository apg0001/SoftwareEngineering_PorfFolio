import React from "react";
import doraImage from "../assets/dora.jpg";

const ProfileCard = () => {
  return (
    <div className="profile">
      <img src={doraImage} alt="프로필" />
      <div className="profile-info">
        <h3>박기찬</h3>
        <p>안녕하세요! 저는 기술로 가치를 전하는 개발자입니다!</p>
      </div>
    </div>
  );
};

export default ProfileCard; 