import React, { useRef } from "react";
import { Form } from "antd";
//import emailjs from '@emailjs/browser';
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9qd1taj",
        "template_su0puwl",
        form.current,
        "3gNpWLcL-g32TfqK0"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    /*    <form ref={form} onSubmit={sendEmail} className="grid">
      <label for="user_name">Name</label>
      <input type="text" name="user_name" />
      <label for="email">Email</label>
      <input type="email" name="user_email" />
      <label for="message">Message</label>
      <textarea name="message" />
      <button type="submit"  className="w-[20px] border-none bg-grey">Send</button>
    </form>*/
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col w-[400px] shadow-md bg-white rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2 text-[#FFFFFF]"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="name"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="email@example.com"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            rows="4"
            placeholder="message"
          ></textarea>
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
