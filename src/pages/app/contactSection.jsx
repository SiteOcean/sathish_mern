// components/ContactSection.js
import React, { useState } from 'react';
import { MdHome } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:your-email@example.com?subject=Contact%20Form%20Submission&body=First%20Name:%20${encodeURIComponent(formData.firstName)}%0ALast%20Name:%20${encodeURIComponent(formData.lastName)}%0AEmail:%20${encodeURIComponent(formData.email)}%0AMessage:%20${encodeURIComponent(formData.message)}`;

    window.location.href = mailtoLink;
  };

  return (
    <section data-aos="fade-up"
    data-aos-anchor-placement="top-center" data-aos-delay="100" className="bg-gradient-to-r w-full from-purple-100 to-blue-100 py-12 rounded-md">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-x-6">
       
        <div className="mt-3">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  autoComplete="given-name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  autoComplete="family-name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
                ></textarea>
              </div>
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full duration-300 inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-500 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="mt-3 bg-white p-3 md:p-8 rounded-lg shadow-lg font-medium text-gray-400">
          <h3 className="text-2xl font-extrabold text-purple-500">Contact Information</h3>
          <div className="mt-6 flex items-center gap-x-2">
            <p className="text-lg font-medium text-gray-500"><MdHome/></p>
            <p className="text-lg text-gray-600">Coimbatore, Tamilnadu, India</p>
          </div>
          <div className="mt-6 flex items-center gap-x-2">
            <p className="text-lg font-medium text-gray-500"><MdCall/></p>
            <p className="text-lg text-gray-500 ">+91 8122183129</p>
          </div>
          <div className="mt-6 flex items-center gap-x-2">
            <p className="text-lg font-medium text-gray-500"><MdEmail/></p>
            <p className="text-lg text-blue-600 underline hover:text-blue-800">sathish5888@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
