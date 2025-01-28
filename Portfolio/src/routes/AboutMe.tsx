// TODO: Create a component that will display information about the developer, including a brief bio and a photo.
import React from "react";
import Container from "../components/Container";

const AboutMe: React.FC = () => (
  <Container header="About Me">
    <p>
      Welcome! I am a junior developer passionate about building web
      applications.
    </p>
  </Container>
);

export default AboutMe;
