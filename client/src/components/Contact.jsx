<<<<<<< HEAD
import React, { useState } from "react";
import { Mail, Phone } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    type: "",
    text: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus({ type: "", text: "" });

    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus({
          type: "success",
          text: "Thank you for contacting TOCSI🙏. We have received your message successfully. Our team will get back to you soon.!!",
        });

        setFormData({
          name: "",
          email: "",
          message: "",
        });

        setTimeout(() => {
          setStatus({ type: "", text: "" });
        }, 5000);
      } else {
        setStatus({
          type: "error",
          text: "Something went wrong. Please try again.",
        });

        setTimeout(() => {
          setStatus({ type: "", text: "" });
        }, 3000);
      }
    } catch (error) {
      setStatus({
        type: "error",
        text: "Server not connected. Please try again later.",
      });

      setTimeout(() => {
        setStatus({ type: "", text: "" });
      }, 3000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-[#1a1a2e] via-[#241435] to-[#301934]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-white/10 bg-white/10 backdrop-blur-xl">
          <div className="p-10 md:w-1/2 text-white">
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>

            <p className="text-purple-200 mb-8">
              Have questions about UGC-NET, JK-SET, JKSSB, Career, or Life? We are here to help you succeed.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Phone className="text-yellow-400" />
                <a href="tel:+916005703389" className="hover:text-yellow-300 transition">
                  +91 6005703389
                </a>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="text-yellow-400" />
                <a href="mailto:tocsi.in@gmail.com" className="hover:text-yellow-300 transition">
                  tocsi.in@gmail.com
                </a>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4 text-yellow-400">
                  Follow Us On
                </h3>

                <div className="flex flex-wrap gap-4">
                  {["LinkedIn", "Instagram", "YouTube", "Facebook"].map((item) => (
                    <a
                      key={item}
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/10 px-4 py-2 rounded-lg hover:bg-yellow-400 hover:text-purple-900 transition"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="p-10 md:w-1/2 bg-white">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block mb-2 text-sm font-semibold text-slate-700">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg border border-slate-300 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-semibold text-slate-700">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg border border-slate-300 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-semibold text-slate-700">
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="How can we help you?"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg border border-slate-300 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-600 resize-none"
                  required
                ></textarea>
              </div>

              {status.text && (
                <div
                  className={`p-3 rounded-lg text-sm font-medium ${
                    status.type === "success"
                      ? "bg-green-100 text-green-700 border border-green-300"
                      : "bg-red-100 text-red-700 border border-red-300"
                  }`}
                >
                  {status.text}
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-purple-700 text-white py-3 rounded-lg font-bold hover:bg-purple-800 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

=======
import React, { useState } from "react";
import { Mail, Phone } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    type: "",
    text: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus({ type: "", text: "" });

    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus({
          type: "success",
          text: "Thank you for contacting TOCSI🙏. We have received your message successfully. Our team will get back to you soon.!!",
        });

        setFormData({
          name: "",
          email: "",
          message: "",
        });

        setTimeout(() => {
          setStatus({ type: "", text: "" });
        }, 5000);
      } else {
        setStatus({
          type: "error",
          text: "Something went wrong. Please try again.",
        });

        setTimeout(() => {
          setStatus({ type: "", text: "" });
        }, 3000);
      }
    } catch (error) {
      setStatus({
        type: "error",
        text: "Server not connected. Please try again later.",
      });

      setTimeout(() => {
        setStatus({ type: "", text: "" });
      }, 3000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-[#1a1a2e] via-[#241435] to-[#301934]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-white/10 bg-white/10 backdrop-blur-xl">
          <div className="p-10 md:w-1/2 text-white">
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>

            <p className="text-purple-200 mb-8">
              Have questions about UGC-NET, JK-SET, JKSSB, Career, or Life? We are here to help you succeed.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Phone className="text-yellow-400" />
                <a href="tel:+916005703389" className="hover:text-yellow-300 transition">
                  +91 6005703389
                </a>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="text-yellow-400" />
                <a href="mailto:tocsi.in@gmail.com" className="hover:text-yellow-300 transition">
                  tocsi.in@gmail.com
                </a>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4 text-yellow-400">
                  Follow Us On
                </h3>

                <div className="flex flex-wrap gap-4">
                  {["LinkedIn", "Instagram", "YouTube", "Facebook"].map((item) => (
                    <a
                      key={item}
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/10 px-4 py-2 rounded-lg hover:bg-yellow-400 hover:text-purple-900 transition"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="p-10 md:w-1/2 bg-white">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block mb-2 text-sm font-semibold text-slate-700">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg border border-slate-300 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-semibold text-slate-700">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg border border-slate-300 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-semibold text-slate-700">
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="How can we help you?"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg border border-slate-300 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-600 resize-none"
                  required
                ></textarea>
              </div>

              {status.text && (
                <div
                  className={`p-3 rounded-lg text-sm font-medium ${
                    status.type === "success"
                      ? "bg-green-100 text-green-700 border border-green-300"
                      : "bg-red-100 text-red-700 border border-red-300"
                  }`}
                >
                  {status.text}
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-purple-700 text-white py-3 rounded-lg font-bold hover:bg-purple-800 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

>>>>>>> 338b2c97f7e46148fc166ca8077e8278819aa3ad
export default Contact;