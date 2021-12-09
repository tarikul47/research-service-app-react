import React from "react";

const SectionTitle = (props) => {
  const align = props.class ? props.class: 'align-center';
  const titleAlign = `mbr-section-title mbr-fonts-style ${align} mb-0 display-1`;
  return (
    <h3 className={titleAlign}>
      <strong>{props.title}</strong><br />
      {props.t2}
    </h3>
  );
};

export default SectionTitle;
