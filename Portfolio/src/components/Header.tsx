// TODO: React component for the Header of the protfolio that will be displayed on every page
// TODO: The Header must contain:
// - The name of the developer

import Navigation from "./Navigation";

// - A navigation bar with links to the different pages of the website
interface HeaderProps {
  links: Array<{
    text: string;
    to: string;
  }>;
  devName: string;
}
export default function Header(props: HeaderProps) {
  return (
    <header>
      <h1>{props.devName}</h1>
      <Navigation links={props.links} />
    </header>
  );
}
