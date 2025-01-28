// TODO: Create a Resume component
// The Resume component should display a download link to the developer's resume.
// The Resume component should display a list of skills

import React from "react";
import Container from "../components/Container";

const Resume: React.FC = () => (
  <Container header="Resume">
    <p>
      You can download my resume{" "}
      <a href="/resume.pdf" target="_blank">
        here
      </a>
      .
    </p>
  </Container>
);

export default Resume;
