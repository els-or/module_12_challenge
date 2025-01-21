// TODO: Create a Portfolio component that displays a list of projects you've worked on.
// The Portfolio component should display at six projects using the project component.
// The project information should be hardcoded in an array of objects in the Portfolio component.
// The project information should be processed with the map function to display each project.

import React from "react";

const Portfolio: React.FC = () => (
  <div>
    <h1>Portfolio</h1>
    <p>Here are some of the projects I've worked on:</p>
    <ul>
      <li>Project 1</li>
      <li>Project 2</li>
      <li>Project 3</li>
    </ul>
  </div>
);
export default Portfolio;
