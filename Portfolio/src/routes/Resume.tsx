// TODO: Create a Resume component
// The Resume component should display a download link to the developer's resume.
// The Resume component should display a list of skills

import React from "react";
import Container from "../components/Container";

const Resume: React.FC = () => (
  <Container header="Resume">
    <p>
      If you wish to fully grasp the extent of my brilliance and undeniable
      qualifications,{" "}
      <a
        className="text-primary-content underline"
        href="/HumperdinckResume.pdf"
        target="_blank"
      >
        download my resume immediately
      </a>
      —and consider yourself privileged to do so.
    </p>
  </Container>
);

export default Resume;
