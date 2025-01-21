// TODO: Set up the App component with react-router-dom to display the Portfolio, AboutMe, and Resume components.
// AboutMe should be displayed by default
// Header and Footer components should be displayed on all pages
// Header component should contain a navigation bar with links to the different pages of the website
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const links = [
    { to: "/about", text: "About Me" },
    { to: "/portfolio", text: "Portfolio" },
    { to: "/contact", text: "Contact" },
    { to: "/resume", text: "Resume" },
  ];
  const devName = "Rachel Sutton";
  const footerLinks = {
    github: "",
    linkedin: "",
    twitter: "",
  };

  return (
    <>
      <Header links={links} devName={devName} />
      <Footer links={footerLinks} />
    </>
  );
}

export default App;
