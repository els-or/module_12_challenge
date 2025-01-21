// TODO: Create a Resume component
// The Resume component should display a download link to the developer's resume.
// The Resume component should display a list of skills

import React from "react";

const Resume: React.FC = () => (
  <div>
    <h1>Resume</h1>
    <p>
      You can download my resume{" "}
      <a href="/resume.pdf" target="_blank">
        here
      </a>
      .
    </p>
  </div>
);

export default Resume;
