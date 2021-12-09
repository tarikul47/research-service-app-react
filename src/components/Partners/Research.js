import React from "react";

const Research = (props) => {
    const bg = `card-wrapper ${props.class}`;
  return (
    <div className="col-12 col-lg-12">
      <div className={bg}>
        <div className="row">
          <div className="col-12 col-md-9">
            <div className="text-wrapper align-left">
              <h5 className="card-title mbr-fonts-style display-7">
                <strong>{props.name}</strong>
              </h5>
              <p className="mbr-text mbr-fonts-style mb-4 display-4">
                {props.description}
                <br />
              </p>
              <h6 className="card-subtitle mbr-fonts-style mb-2 display-4">
                <a href="/" className="text-white">
                  yoursite.com
                </a>
              </h6>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="img-wrapper align-center">
              <i className="fab fa-battle-net mbr-iconfont"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;
