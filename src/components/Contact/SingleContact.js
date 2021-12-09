import React from "react";

const SingleContact = (props) => {
    const bg = `card-wrapper align-left ${props.class}`;
  return (
    <div className="col-12 card col-lg-6">
      <div className={bg}>
        <span className="mbr-iconfont mobi-mbri-chat mobi-mbri"></span>
        <div className="text-wrapper">
          <h5 className="card-title1 mbr-fonts-style display-5">
            <strong>{props.name}</strong>
          </h5>
          <p className="mbr-text1 mbr-fonts-style mb-4 display-4">
          {props.description}
          </p>
          <h6 className="card-subtitle1 mbr-fonts-style mb-2 display-4">
          {props.email}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default SingleContact;
