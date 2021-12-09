import React from "react";
import Item from "./Item";
import SocialItem from "./SocialItem";

const Footer = () => {
  const socilLink = {
    s1:{
      name:'socicon-facebook',
      link: 'https://facebook.com/mobirise',
    },
    s2:{
      name:'socicon-twitter',
      link: 'https://twitter.com/mobirise',
    },
    s3:{
      name:'socicon-vimeo',
      link: 'https://vimeo.com/mobirise',
    },
    s4:{
      name:'socicon-skype',
      link: 'https://skype.com/mobirise',
    },
  }
  return (
    <section className="footer1 form cid-sg6YjZvF7K text-start" id="footer01-a">
      <div className="container">
        <div className="row mbr-white">
          <div className="col-12 col-md-6 col-lg-6">
            <p className="mbr-text mbr-fonts-style mb-4 display-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              feugiat libero rutrum dui aliquet, quis lacinia eros egestas.
              Donec finibus felis vel odio tempus, sagittis augue mattis.
              Pellentesque morbi tristique.
            </p>
          </div>
          <div className="col-12 col-md-3 col-lg-2">
            <ul className="list mbr-fonts-style display-4">
              <Item name="Home"></Item>
              <Item name="Work"></Item>
              <Item name="Services"></Item>
              <Item name="Info"></Item>
            </ul>
          </div>
          <div className="col-12 col-md-3 col-lg-2">
            <ul className="list mbr-fonts-style display-4">
              <Item name="Work"></Item>
              <Item name="Contact"></Item>
              <Item name="Features"></Item>
              <Item name="Culture"></Item>
            </ul>
          </div>
          <div className="col-12 col-md-12 soc-col col-lg-2">
            <div className="social-row display-7">
              <SocialItem name={socilLink.s1.name} link={socilLink.s1.link}></SocialItem>
              <SocialItem name={socilLink.s2.name} link={socilLink.s2.link}></SocialItem>
              <SocialItem name={socilLink.s3.name} link={socilLink.s3.link}></SocialItem>
              <SocialItem name={socilLink.s4.name} link={socilLink.s4.link}></SocialItem>
            </div>
          </div>
          <div className="col-lg-4">
            <p className="mbr-text mb-3 mbr-fonts-style copyright align-left display-4">
              © Copyright 2025 Mobirise
            </p>
          </div>
          <div className="col-lg-4 mx-auto mbr-form" data-form-type="formoid">
            <h5 className="mbr-section-subtitle mbr-fonts-style p-0 m-0 display-4">
              <strong>SUBSCRIBE FOR UPDATES</strong>
            </h5>

            <form
              action="https://mobirise.eu/"
              method="POST"
              className="mbr-form form-with-styler"
              data-form-title="Form Name"
            >
              <input type="hidden" name="email" data-form-email="true" />
              <div className="form-row">
                <div
                  hidden="hidden"
                  data-form-alert=""
                  className="alert alert-success col-12"
                >
                  Thanks for filling out the form!
                </div>
                <div
                  hidden="hidden"
                  data-form-alert-danger=""
                  className="alert alert-danger col-12"
                >
                  Oops...! some problem!
                </div>
              </div>
              <div className="dragArea form-row">
                <div className="col form-group" data-for="email">
                  <input
                    type="email"
                    name="email"
                    placeholder="test@email.com"
                    data-form-field="email"
                    className="form-control display-7"
                    id="email-footer01-a"
                  />
                </div>
                <div className="col-auto">
                  <button
                    type="submit"
                    className="btn btn-primary-outline display-7"
                  >
                    <i className="fab fa-battle-net mbr-iconfont"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
