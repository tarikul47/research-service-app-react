import React from "react";
import SectionTitle from "../Shared/SectionTitle";
import Research from "./Research";

const Partner = () => {
    const research = {
        R1:{
            name: 'Branding Research',
            description: `Lorem ipsum dolor sit amet, semper elit. Aliquam at
            sollicitudin lorem.`,
            class:'card1'
        },
        R2:{
            name: 'Branding Research',
            description: `Lorem ipsum dolor sit amet, semper elit. Aliquam at
            sollicitudin lorem.`,
            class:'card2'
        }
    }
  return (
    <section className="clients2 cid-sg6Ye9Nxhl" id="clients02-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 md-pb">
            <h4 className="mbr-title mbr-fonts-style pb-4 display-2">
             <SectionTitle class="text-start" title='We choose our' t2='partners carefully.'></SectionTitle>
            </h4>
            <p className="mbr-main-text align-left mbr-fonts-style pb-2 display-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              at sollicitudin lorem. Quisque mauris purus, dapibus pharetra
              fermentum sed, semper vitae ipsum. In sed sapien dolor.&nbsp;
              <br />
              <br />
              Nam mollis sed nisi vitae suscipit. Nam sit amet velit sed nisi
              elementum tempor eget et ex. Maecenas urna dui, mollis sed mi vel,
              lobortis rhoncus dolor. Duis egestas, mauris varius tristique
              placerat.
            </p>
          </div>
          <div className="col-lg-6">
            <div className="row">
              <Research name={research.R1.name} description={research.R1.description} class={research.R1.class}></Research>
              <Research name={research.R1.name} description={research.R1.description} class={research.R2.class}></Research>        
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partner;
