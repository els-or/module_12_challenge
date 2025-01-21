// TODO: React component for the footer of the portfolio that will be displayed on every page
// TODO: The footer must contain:
// - Links to the developer's GitHub, LinkedIn, and Twitter profiles

interface footerProps {
  links: {
    github: string;
    linkedin: string;
    twitter: string;
  };
}

export default function Footer(props: footerProps) {
  return (
    <footer>
      <a href={props.links.github}>GitHub</a>
      <a href={props.links.linkedin}>LinkedIn</a>
      <a href={props.links.twitter}>Twitter</a>
    </footer>
  );
}
