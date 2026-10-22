
import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Form Data:", formData);
    alert("Thank you! Your message has been submitted.");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="min-h-screen bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
            Get In Touch
          </p>

          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            Contact Us
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Have a question or need assistance? We'd love to hear from you.
            Send us a message and we'll get back to you soon.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid overflow-hidden rounded-2xl bg-white shadow-xl md:grid-cols-2">

          {/* Contact Information */}
          <div className="bg-blue-600 p-8 text-white sm:p-10 lg:p-12">
            <h2 className="text-2xl font-bold">
              Let's Talk
            </h2>

            <p className="mt-4 leading-7 text-blue-100">
              Feel free to contact us for questions, suggestions, or support.
              Our team is happy to help.
            </p>

            <div className="mt-10 space-y-8">

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white/15 text-xl">
                  ✉
                </div>
                <div>
                  <h3 className="font-semibold">Email Us</h3>
                  <a
                    href="mailto:contact@example.com"
                    className="mt-1 block break-all text-blue-100 hover:text-white"
                  >
                    contact@example.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white/15 text-xl">
                  ☎
                </div>
                <div>
                  <h3 className="font-semibold">Call Us</h3>
                  <a
                    href="tel:+911234567890"
                    className="mt-1 block text-blue-100 hover:text-white"
                  >
                    +91 12345 67890
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white/15 text-xl">
                  📍
                </div>
                <div>
                  <h3 className="font-semibold">Our Location</h3>
                  <p className="mt-1 text-blue-100">
                    Pune, Maharashtra, India
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-12 border-t border-white/20 pt-6">
              <h3 className="font-semibold">Follow Us</h3>

              <div className="mt-4 flex gap-3">
                {[
                  { name: "Facebook", url: "https://facebook.com" },
                  { name: "Instagram", url: "https://instagram.com" },
                  { name: "LinkedIn", url: "https://linkedin.com" },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.name}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-sm font-bold transition hover:bg-white hover:text-blue-600"
                  >
                    {social.name[0]}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 sm:p-10 lg:p-12">
            <h2 className="text-2xl font-bold text-gray-900">
              Send Us a Message
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Fill out the form below and we'll get back to you.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter message subject"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className="w-full resize-y rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full rounded-lg bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-md transition duration-300 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200"
              >
                Send Message →
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
