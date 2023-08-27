import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import BackIcon from "../../Assets/Images/bx-arrow-back.svg";

const Contact = () => {
  const form = useRef();
  const [showModal, setShowModal] = useState(false);

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
          setShowModal(true); // Show the modal upon successful submission
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <React.Fragment>
      <div className="min-h-screen w-full">
        <Link to="/" className="bg-[#FFFBF6]">
          <motion.img
            src={BackIcon}
            alt="previous"
            title="previous"
            initial={{ x: 0 }}
            animate={{
              x: [-10, 10, -10],
              transition: { duration: 1.5, repeat: Infinity },
            }}
            whileHover={{ scale: 1.3, transition: { duration: 0.1 } }}
            className="p-[2rem] "
          />
        </Link>

        <div className="flex items-center justify-center  bg-white font-[archivo-regular]">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="w-[400px] shadow-md bg-[#1E1E1E] rounded px-8 pt-6 pb-8"
          >
            <div className="mb-4">
              <label
                className="block text-gray-300 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-gray-800"
                id="name"
                type="text"
                placeholder="Name"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-300 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-gray-800"
                id="email"
                type="email"
                placeholder="Email"
              />
            </div>

            <div className="mb-6">
              <label
                className="block text-gray-300 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-gray-800 h-32 resize-none"
                id="message"
                placeholder="Message"
              ></textarea>
            </div>

            <div className="flex items-center justify-end">
              <button
                className="bg-[#EDA921] hover:bg-[#F7B32B] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Send
              </button>
            </div>
          </form>

          {/* Modal */}
          {showModal && (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50 bg-gray-900">
              <div className="bg-white p-6 rounded shadow-md">
                <p className="text-xl font-semibold mb-2">
                  Thank you for your submission!
                </p>
                <p className="text-gray-700">
                  We will get back to you shortly.
                </p>
                <button
                  onClick={() => setShowModal(false)}
                  className="mt-4 bg-[#EDA921] hover:bg-[#F7B32B] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
