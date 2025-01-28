// TODO: Create a contact form to send emails to the email provided
// The contact form should include the following fields:
// Name
// Email
// Message
// All fields should display an error message if they are left blank
// Email address field should validate that the email address is in the correct format
// The form should have a submit button that sends the email
// The form should display a success message when the email is sent successfully

import React from "react";
import Container from "../components/Container";

const Contact: React.FC = () => (
  <Container header="Contact">
    <p>Feel free to reach out via email at: example@example.com</p>
  </Container>
);

export default Contact;
