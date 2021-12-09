import React from "react";

const SingleBrand = (props) => {
  return (
    <div className="card-wrapper">
      <div className="row">
        <div className="col-lg-2 col-md-2 align-center icon-col">
          <i className="fab fa-battle-net mbr-iconfont"></i>
        </div>
        <div className="col-12 col-lg-10 col-md-10">
          <div className="text-box">
            <h4 className="mbr-title align-left mbr-fonts-style pb-2 display-5">
              <strong>{props.name}</strong>
            </h4>
            <p className="mbr-text align-left mbr-fonts-style pb-2 display-7">
            {props.description}
            </p>

            <div className="link-wrap align-left">
              <h5 className="mbr-sub-title align-left mbr-fonts-style display-4">
                View this service in action:
              </h5>

              <h6 className="link align-left mbr-fonts-style pb-2 display-4">
                View Case Now
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBrand;
