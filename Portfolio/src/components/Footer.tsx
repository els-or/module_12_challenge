// TODO: React component for the footer of the portfolio that will be displayed on every page
// TODO: The footer must contain:
// - Links to the developer's GitHub, LinkedIn, and Twitter profiles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

interface footerProps {
  links: {
    github: string;
    linkedin: string;
    twitter: string;
  };
}

export default function Footer(props: footerProps) {
  return (
    <footer className="border-b border-border bg-primary-light">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="flex flex-row-reverse gap-4">
          <div>
            <a href={props.links.github}>
              <FontAwesomeIcon icon={faGithub} /> GitHub
            </a>
          </div>
          <div>
            <a href={props.links.github}>
              <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
            </a>
          </div>
          <div>
            <a href={props.links.github}>
              <FontAwesomeIcon icon={faTwitter} /> Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
