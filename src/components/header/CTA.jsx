import React from "react";
// import CV from "../../assets/cv.pdf";
import resume from "../../assets/resume.pdf"

const CTA = () => {
  return (
    <div className="cta">
      <a href={resume} download className="btn">
        Download resume
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
