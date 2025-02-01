// TODO: Create a Portfolio component that displays a list of projects you've worked on.
// The Portfolio component should display at six projects using the project component.
// The project information should be hardcoded in an array of objects in the Portfolio component.
// The project information should be processed with the map function to display each project.

import Project from "../components/Project";
import Container from "../components/Container";

interface PortfolioProps {
  projects: Array<{
    name: string;
    image: string;
    deployment: string;
    github: string;
    description: string;
  }>;
}

export default function Portfolio(props: PortfolioProps) {
  return (
    <Container header="Portfolio">
      <div className="flex flex-wrap justify-center">
        {props.projects.map((project, index) => (
          <Project
            key={index}
            name={project.name}
            image={project.image}
            deployment={project.deployment}
            github={project.github}
            description={project.description}
          />
        ))}
      </div>
    </Container>
  );
}
