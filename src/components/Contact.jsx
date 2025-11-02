import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaDownload
} from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus("Sending...");

  try {
    const response = await fetch("https://portfolio-backend-d6ma.onrender.com/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }),
    });

    if (response.ok) {
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("Failed to send message. Try again!");
    }
  } catch (error) {
    console.error(error);
    setStatus("Error sending message!");
  }
};

  return (
    <section
      id="contact"
      className="py-20 px-6 bg-[#070F2B] text-white flex flex-col items-center"
    >
      {" "}
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-start">
        {/* Left Side */}{" "}
        <div>
          {" "}
          <h2 className="text-3xl font-bold mb-4">
            Let’s <span className="text-[#A5B3FF]">Connect!</span>{" "}
          </h2>{" "}
          <p className="text-gray-300 mb-6 leading-relaxed">
            I’m always open to new opportunities, collaborations, and learning.
            Reach out or download my resume to know more about me.{" "}
          </p>
          <div className="space-y-3 text-white-300">
            <p className="flex items-center gap-2">
              <a className="inline-flex items-center gap-2"
              href="mailto:sahupinky918@gmail.com">
              <FaEnvelope className="text-[#A5B3FF]" /> sahupinky918@gmail.com</a>
            </p>
            <p className="flex items-center gap-2">
               <a className="inline-flex items-center gap-2"
            href="/resume.pdf"
            download="Pinky_Sahu_Resume.pdf">
              <FaDownload className="text-[#A5B3FF]" /> Download Resume</a>
            </p>
          </div>
          {/* Social Icons */}
        </div>
        {/* Right Side (Form) */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#1B1A55]/70 backdrop-blur-md p-6 rounded-xl shadow-lg"
        >
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full mb-3 px-4 py-3 rounded-lg bg-[#070F2B] text-white focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full mb-3 px-4 py-3 rounded-lg bg-[#070F2B] text-white focus:outline-none"
          />

          <textarea
            name="message"
            placeholder="Enter Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full mb-3 px-4 py-3 rounded-lg bg-[#070F2B] text-white focus:outline-none h-32"
          />
          <button
            type="submit"
            className="w-full py-3 mt-2 bg-[#535C91] hover:bg-[#6C72B8] active:shadow-[0_0_10px_#9290c3] text-white font-semibold rounded-lg transition-all duration-200"
          >
            Submit
          </button>
          <p className="text-gray-400 mt-3 text-center">{status}</p>
        </form>
      </div>
    </section>
  );
}

export default Contact;
