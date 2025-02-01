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
    <header className="border-b border-border bg-primary-light">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-primary-content sm:text-3xl">
              {props.devName}
            </h1>
          </div>
          <div>
            <Navigation links={props.links} />
          </div>
        </div>
      </div>
    </header>
  );
}
