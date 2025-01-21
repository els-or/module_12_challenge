// TODO: Create a navigation bar that will be used to navigate between the different pages of the website.
// TODO: Navigation bar links should be using react-router to link to other pages.

interface NavbarProps {
  links: Array<{
    text: string;
    to: string;
  }>;
}

export default function Navigation(props: NavbarProps) {
  return (
    <nav>
      <ul>
        {props.links.map((link, index) => (
          <li key={index}>{link.text}</li>
        ))}
      </ul>
    </nav>
  );
}
