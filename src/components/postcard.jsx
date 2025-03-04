import React from "react";
import LikeButton from "./LikeButton";
import "./postcard.css";

const PostCard = ({ profileImage, username, content }) => {
  return (
    <div className="post-card">
      <img src={profileImage} alt={username} className="profile-pic" />
      <div className="post-content">
        <h3>{username}</h3>
        <p>{content}</p>
        <LikeButton />
      </div>
    </div>
  );
};

export default PostCard;