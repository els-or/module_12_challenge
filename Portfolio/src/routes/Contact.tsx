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
    <p>
      If you possess matters of great importance—or simply wish to bask in the
      glory of my wisdom—you may send your inquiries to{" "}
      <a
        href="mailto:RoyalDecrees@FlorinCastle.gov"
        className="text-primary-content underline"
      >
        RoyalDecrees@FlorinCastle.gov
      </a>
      .
    </p>
    <p>Do not waste my time.</p>
  </Container>
);

export default Contact;
