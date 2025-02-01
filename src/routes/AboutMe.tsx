// TODO: Create a component that will display information about the developer, including a brief bio and a photo.
import React from "react";
import Container from "../components/Container";

const AboutMe: React.FC = () => (
  <Container header="About Me">
    <div className="flex flex-col md:flex-row items-center gap-4">
      <img
        className="rounded-lg"
        src="https://static.wikia.nocookie.net/princessbride/images/c/c3/Humperdinck_%28film%29.jpg"
        alt="Prince Humperdinck"
      ></img>
      <p>
        Greetings, subjects and admirers alike. I am Prince Humperdinck, heir to
        the throne of Florin, master huntsman, and unparalleled strategist. My
        pursuits are vast—whether tracking the most elusive game in the kingdom,
        commanding armies with unmatched precision, or orchestrating political
        alliances to secure my inevitable rule. Some may call me ruthless; I
        prefer efficient. Here, you shall witness a showcase of my cunning, my
        vision, and my undeniable superiority. Should you find yourself
        impressed (as you undoubtedly will), know that it is only natural. After
        all, I always get what I want.
      </p>
    </div>
  </Container>
);

export default AboutMe;
