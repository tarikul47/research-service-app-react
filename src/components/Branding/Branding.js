import React from "react";
import SingleBrand from "./SingleBrand";

const Branding = () => {

  const Brands = {
    S1:{
      name: "Marketing research",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
      feugiat libero rutrum dui aliquet, quis lacinia eros egestas.
      Donec finibus felis vel odio tempus, non sagittis augue
      mattis. Pellentesque habitant morbi tristique.`
    },
    S2:{
      name: "Design",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
      feugiat libero rutrum dui aliquet, quis lacinia eros egestas.
      Donec finibus felis vel odio tempus, non sagittis augue
      mattis. Pellentesque habitant morbi tristique.`
    },
    S3:{
      name: "Branding solutions",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
      feugiat libero rutrum dui aliquet, quis lacinia eros egestas.
      Donec finibus felis vel odio tempus, non sagittis augue
      mattis. Pellentesque habitant morbi tristique.`
    }
  }
  return (
    <section className="features6 cid-sg6XY0ZRRG" id="features06-2">
      <div className="container">
        <SingleBrand name={Brands.S1.name} description={Brands.S1.description}></SingleBrand>
        <SingleBrand name={Brands.S2.name} description={Brands.S2.description}></SingleBrand>
        <SingleBrand name={Brands.S3.name} description={Brands.S3.description}></SingleBrand>
      </div>
    </section>
  );
};

export default Branding;
