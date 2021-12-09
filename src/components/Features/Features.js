import React from "react";
import SectionTitle from "../Shared/SectionTitle";
import Feature from "./Feature";

const Features = () => {
const features = {
  F1:{
    name: 'Marketing',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link:'/',
    class: 'card1'
  },
  F2:{
    name: 'Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link:'/',
    class:"card2"
  },
  F3:{
    name: 'Research',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link:'/',
    class:"card3"
  },
  F4:{
    name: 'Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link:'/',
    class:"card4"
  },
  F5:{
    name: 'Branding',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link:'/',
    class:"card5"
  },
}

  return (
    <section className="features8 cid-sg6XYTl25a" id="features08-3">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 pb-5">
            <SectionTitle title="Our Features"></SectionTitle>
          </div>
        </div>
        <div className="row">
         <Feature name={features.F1.name} description={features.F1.description} class={features.F1.class}></Feature>
         <Feature name={features.F2.name} description={features.F2.description} class={features.F2.class}></Feature>
         <Feature name={features.F3.name} description={features.F3.description} class={features.F3.class}></Feature>
         <Feature name={features.F4.name} description={features.F4.description} class={features.F4.class}></Feature>
         <Feature name={features.F5.name} description={features.F5.description} class={features.F5.class}></Feature>
        </div>
      </div>
    </section>
  );
};

export default Features;
