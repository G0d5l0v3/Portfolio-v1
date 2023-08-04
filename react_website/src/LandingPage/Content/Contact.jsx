import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceId = 'service_9qd1taj';
    const templateId = 'template_su0puwl';
    const userId = 'YOUR_EMAILJS_USER_ID';

    emailjs.sendForm(serviceId, templateId, formData, userId)
      .then((result) => {
        console.log('Message sent successfully!', result.text);
        // You can show a success message or close the popup here
      })
      .catch((error) => {
        console.error('Error sending the message:', error);
        // Handle the error, maybe show an error message to the user
      });
  };

  return (
    <>
      <button
        onClick={() => setShowPopup(true)}
        className="bg-black text-white py-2 px-4 rounded"
      >
        Contact Us
      </button>
      {showPopup && (
        <div className="modal fixed top-0 left-0 w-full font-[archivo-regular] text-[1rem] h-full flex items-center justify-center">
          <div className="bg-white text-black p-6 rounded shadow-lg w-2/3 sm:w-1/2 md:w-1/3">
            <form onSubmit={handleSubmit}>
              <label className="block mb-4">
                Name:
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-gray-100 border-2 border-gray-300 py-2 px-4 rounded"
                />
              </label>
              <label className="block mb-4">
                Email:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-gray-100 border-2 border-gray-300 py-2 px-4 rounded"
                />
              </label>
              <label className="block mb-4">
                Message:
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-gray-100 border-2 border-gray-300 py-2 px-4 rounded"
                />
              </label>
              <button
                type="submit"
                className="bg-yellow-500 text-white py-2 px-4 rounded"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;

