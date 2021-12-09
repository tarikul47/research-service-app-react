import React from "react";

const Feature = (props) => {
    const classes = `card-wrapper ${props.class}`;
  return (
    <div className="card col-12 col-md-6 col-lg-3">
      <div className={classes}>
        <div className="card-box align-left">
          <div className="iconfont-wrapper">
            <i className="fab fa-battle-net mbr-iconfont"></i>
          </div>
          <h5 className="card-title mbr-fonts-style display-5">{props.name}</h5>
          <p className="card-text mbr-fonts-style display-7">
            {props.description}
          </p>
          <h6 className="link mbr-fonts-style display-4">
            <a href="/" className="text-info">
              Read more
            </a>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Feature;
