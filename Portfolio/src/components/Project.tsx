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
    <div className="block max-w-sm p-3 m-3 bg-primary border rounded-lg shadow-lg min-h-50 min-w-50 max-w-50">
      <h3 className="text-l font-semibold text-primary-content sm:text-xl">
        {props.name}
      </h3>
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
