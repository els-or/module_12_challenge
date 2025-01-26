// TODO: Set up the App component with react-router-dom to display the Portfolio, AboutMe, and Resume components.
// AboutMe should be displayed by default
// Header and Footer components should be displayed on all pages
// Header component should contain a navigation bar with links to the different pages of the website
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutMe from "./routes/AboutMe";
import Portfolio from "./routes/Portfolio";
import Resume from "./routes/Resume";
import Contact from "./routes/Contact";
import { BrowserRouter } from "react-router";
import { Routes, Route } from "react-router-dom";

function App() {
  const links = [
    { to: "/", text: "About Me" },
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
  const projects = [
    {
      name: "Project 1",
      image: "project1.jpg",
      deployment: "https://www.example.com",
      github: "https://www.github.com",
      description: "This is a project I worked on.",
    },
    {
      name: "Project 2",
      image: "project2.jpg",
      deployment: "https://www.example.com",
      github: "https://www.github.com",
      description: "This is another project I worked on.",
    },
    {
      name: "Project 3",
      image: "project3.jpg",
      deployment: "https://www.example.com",
      github: "https://www.github.com",
      description: "This is a third project I worked on.",
    },
    {
      name: "Project 4",
      image: "project4.jpg",
      deployment: "https://www.example.com",
      github: "https://www.github.com",
      description: "This is a fourth project I worked on.",
    },
    {
      name: "Project 5",
      image: "project5.jpg",
      deployment: "https://www.example.com",
      github: "https://www.github.com",
      description: "This is a fifth project I worked on.",
    },
    {
      name: "Project 6",
      image: "project6.jpg",
      deployment: "https://www.example.com",
      github: "https://www.github.com",
      description: "This is a sixth project I worked on.",
    },
  ];
  return (
    <>
      <Header links={links} devName={devName} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route
            path="/portfolio"
            element={<Portfolio projects={projects} />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </BrowserRouter>
      <Footer links={footerLinks} />
    </>
  );
}

export default App;
