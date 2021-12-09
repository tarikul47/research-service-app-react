import React from "react";
import SingleContact from "./SingleContact";

const Contact = () => {
  const contact = {
    C1: {
      name:'Contact',
      description:` Pellentesque eu consectetur nunc, in laoreet risus. In
      hendrerit est nec neque ultricies finibus. Cras malesuada
      volutpat dapibus. Nulla in dui sagittis, tempus dolor a,
      viverra mauris.`,
      class: 'card1',
      email:'contact@yoursite.com',
    },
    C2: {
      name:'Support',
      description:` Pellentesque eu consectetur nunc, in laoreet risus. In
      hendrerit est nec neque ultricies finibus. Cras malesuada
      volutpat dapibus. Nulla in dui sagittis, tempus dolor a,
      viverra mauris.`,
      class: 'card2',
      email:'support@yoursite.com',
    }
  }
  return (
    <section className="contacts3 cid-sg6YiRPHGz" id="contacts03-8">
      <div className="container">
        <div className="row">
          <SingleContact name={contact.C1.name} description={contact.C1.description} email={contact.C1.email} class={contact.C1.class}></SingleContact>
          <SingleContact name={contact.C2.name} description={contact.C2.description} email={contact.C2.email} class={contact.C2.class}></SingleContact>
        </div>
      </div>
    </section>
  );
};

export default Contact;
