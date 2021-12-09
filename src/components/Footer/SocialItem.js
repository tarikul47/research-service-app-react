import React from "react";

const SocialItem = (props) => {
    const icon = `mbr-iconfont socicon ${props.name}`;
  return (
    <div className="soc-item">
      <a href={props.link} rel="noreferrer" target="_blank">
        <span className={icon}></span>
      </a>
    </div>
  );
};

export default SocialItem;
