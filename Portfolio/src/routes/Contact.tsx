// TODO: Create a contact form to send emails to the email provided
// The contact form should include the following fields:
// Name
// Email
// Message
// All fields should display an error message if they are left blank
// Email address field should validate that the email address is in the correct format
// The form should have a submit button that sends the email
// The form should display a success message when the email is sent successfully

import Container from "../components/Container";
import React from "react";

export default function Contact() {
  const ref = React.useRef<HTMLFormElement>(null);
  function submitHandler(e: React.FormEvent) {
    e.preventDefault();
    ref.current?.reset();
    alert("Message sent successfully!");
  }
  return (
    <Container header="Contact">
      <p>
        If you possess matters of great importance—or simply wish to bask in the
        glory of my wisdom—you may fill out this form.
      </p>
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <form ref={ref} onSubmit={submitHandler} className="space-y-8">
          <div>
            <label className="block mb-2 text-sm font-medium text-primary-content">
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="name@florinisgreat.com"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block mb-2 text-sm font-medium text-primary-content">
              Your message
            </label>
            <textarea
              id="message"
              rows={6}
              className="block p-2.5 w-full text-sm text-gray-900 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
              placeholder="Do not waste my time."
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center rounded-lg sm:w-fit border focus:ring-4 focus:outline-none focus:ring-primary-300"
          >
            Send message
          </button>
        </form>
      </div>
    </Container>
  );
}
