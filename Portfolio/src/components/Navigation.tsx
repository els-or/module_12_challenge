// TODO: Create a navigation bar that will be used to navigate between the different pages of the website.
// TODO: Navigation bar links should be using react-router to link to other pages.

import { useLocation } from "react-router-dom";

interface NavbarProps {
  links: Array<{
    text: string;
    to: string;
  }>;
}

export default function Navigation(props: NavbarProps) {
  const location = useLocation().pathname;
  const navStyle =
    "inline-flex items-center justify-center border border-border bg-background px-5 py-3 text-primary-content transition hover:text-primary focus:outline-none focus:ring";
  return (
    <nav>
      <ul>
        {props.links.map((link, index) => (
          <li
            className={navStyle + (location === link.to ? " bg-primary" : "")}
            key={index}
          >
            <a href={link.to}>{link.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
