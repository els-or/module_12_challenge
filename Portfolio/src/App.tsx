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
  const devName = "Prince Humperdinck";
  const footerLinks = {
    github: "https://github.com/HumperdinckTheGreat",
    linkedin: "https://www.linkedin.com/in/PrinceHumperdinck",
    twitter: "https://twitter.com/SupremeRulerFlorin",
  };
  const projects = [
    {
      name: "Comprehensive Strategic Alliance with Florin and Guilder",
      image:
        "https://static.wikia.nocookie.net/princessbride/images/c/ce/Florin.png",
      deployment: "https://princessbride.fandom.com/wiki/Florin",
      github: "https://www.github.com",
      description:
        "Negotiated political maneuvers to unify the kingdoms of Florin and Guilder through an elaborate marriage alliance.",
    },
    {
      name: "Feasibility Study: Conflict Creation for Kingdom Expansion",
      image:
        "https://static.wikia.nocookie.net/princessbride/images/b/b7/Vizzini_planting_fabric_from_a_Gulider_army_uniform_on_Buttercup%27s_horse.png",
      deployment: "https://princessbride.fandom.com/wiki/Guilder",
      github: "https://www.github.com",
      description:
        "Designed and executed an innovative strategy to incite war between Florin and Guilder as a pretext for military and economic expansion.",
    },
    {
      name: "Wildlife Acquisition and Management Initiative",
      image:
        "https://vignette.wikia.nocookie.net/eef8afc5-7f3f-4b87-9597-3481621520a4/scale-to-width-down/1200",
      deployment: "https://princessbride.fandom.com/wiki/R.O.U.S.",
      github: "https://www.github.com",
      description:
        "Spearheaded the capture, breeding, and training of exotic animals, including the legendary Rodents of Unusual Size (ROUS).",
    },
    {
      name: "The Pit of Despair Development Program",
      image:
        "https://static.wikia.nocookie.net/princessbride/images/e/e6/Pit_of_Despair.png",
      deployment: "https://princessbride.fandom.com/wiki/Pit_of_Despair",
      github: "https://www.github.com",
      description:
        "Oversaw the design and construction of a state-of-the-art interrogation and research facility.",
    },
    {
      name: "Public Relations and Image Management",
      image:
        "https://static.wikia.nocookie.net/princessbride/images/c/c3/Humperdinck_%28film%29.jpg",
      deployment: "https://princessbride.fandom.com/wiki/Humperdinck",
      github: "https://www.github.com",
      description:
        "Maintained the image of a noble and eligible ruler while discreetly executing covert operations.",
    },
    {
      name: "Specialized Military Training Program: Florin’s Elite Forces",
      image:
        "https://static.wikia.nocookie.net/princessbride/images/c/c2/Vizzini_%28film%29.jpg",
      deployment: "https://princessbride.fandom.com/wiki/Vizzini",
      github: "https://www.github.com",
      description:
        "Led the recruitment and development of specialized combat units skilled in unconventional warfare.",
    },
  ];
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <BrowserRouter>
        <Header links={links} devName={devName} />
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route
            path="/portfolio"
            element={<Portfolio projects={projects} />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer links={footerLinks} />
      </BrowserRouter>
    </div>
  );
}

export default App;
