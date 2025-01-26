// TODO: Create a Project component that takes in the following props and displays them in a card format:
// An image of the deployed application (either a GIF or a screenshot)
// The title of the project
// A link to the deployed application
// A link to the corresponding GitHub repository

interface ProjectProps {
  name: string;
  image: string;
  deployment: string;
  github: string;
  description: string;
}

export default function Project(props: ProjectProps) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.image} alt={props.name} />
      <p>{props.description}</p>
      <a href={props.deployment} target="_blank">
        Deployment
      </a>
      <a href={props.github} target="_blank">
        GitHub
      </a>
    </div>
  );
}
