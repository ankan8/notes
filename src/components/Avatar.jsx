import React from "react";
import "./Avatarstyles.css";

const Avatar = (props) => {
  return <img className="circle-img" src={props.im} alt="avatar_img" />;
};

export default Avatar;
