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
      const response = await fetch(`${import.meta.env.VITE_API_URL}/contact`, {
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
    <section id="contact" className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,#3b0764_0%,#1e1b4b_35%,#09090f_100%)] py-28">
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-purple-500/25 blur-[130px]"></div>
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-indigo-500/25 blur-[150px]"></div>
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/10 blur-[110px]"></div>

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="rounded-[2rem] overflow-hidden shadow-[0_0_45px_rgba(250,204,21,0.18)] flex flex-col md:flex-row border border-white/10 bg-white/[0.06] backdrop-blur-2xl">
          <div className="relative overflow-hidden p-10 md:w-1/2 text-white">
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-yellow-400/10 blur-3xl"></div>

            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              Get in{" "}
              <span className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Touch
              </span>
            </h2>

            <p className="text-slate-300 mb-8 leading-8 text-lg">
              Have questions about UGC-NET, JK-SET, JKSSB, Career, or Life? We are here to help you succeed.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.07] p-4 backdrop-blur-xl transition-all duration-500 hover:border-yellow-400/50 hover:bg-white/[0.11] hover:shadow-[0_0_25px_rgba(250,204,21,0.18)]">
                <Phone className="text-yellow-300" />
                <a href="tel:+916005703389" className="hover:text-yellow-300 transition font-semibold">
                  +91 6005703389
                </a>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.07] p-4 backdrop-blur-xl transition-all duration-500 hover:border-yellow-400/50 hover:bg-white/[0.11] hover:shadow-[0_0_25px_rgba(250,204,21,0.18)]">
                <Mail className="text-yellow-300" />
                <a href="mailto:tocsi.in@gmail.com" className="hover:text-yellow-300 transition font-semibold">
                  tocsi.in@gmail.com
                </a>
              </div>
              

              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4 text-yellow-300">
                  Follow Us On
                </h3>

                <div className="flex flex-wrap gap-4">
                
                
                {[
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/arun-singh-katoch-32b688393"
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/tocsi_17/"
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/channel/UCe4zSbqxGtGXZ0gBp2Ooerg"
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/tocsi"
  }
].map((item) => (
  <a
    key={item.name}
    href={item.url}
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-full border border-yellow-400/30 bg-yellow-400/10 px-5 py-2.5 font-bold text-yellow-300 transition hover:bg-yellow-400 hover:text-slate-950 hover:shadow-[0_0_25px_rgba(250,204,21,0.25)]"
  >
    {item.name}
  </a>
))}

                </div>
              </div>
            </div>
          </div>

          <div className="p-10 md:w-1/2 bg-slate-950/80 backdrop-blur-2xl border-t md:border-t-0 md:border-l border-white/10">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block mb-2 text-sm font-semibold text-yellow-300">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-4 rounded-2xl border border-white/10 bg-white/[0.07] text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-semibold text-yellow-300">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-4 rounded-2xl border border-white/10 bg-white/[0.07] text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-semibold text-yellow-300">
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="How can we help you?"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-4 rounded-2xl border border-white/10 bg-white/[0.07] text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition resize-none"
                  required
                ></textarea>
              </div>

              {status.text && (
                <div
                  className={`p-4 rounded-2xl text-sm font-medium ${
                    status.type === "success"
                      ? "bg-green-500/10 text-green-300 border border-green-400/30"
                      : "bg-red-500/10 text-red-300 border border-red-400/30"
                  }`}
                >
                  {status.text}
                </div>
              )}

              <button
                type="submit"
                className="w-full rounded-full border border-yellow-400/30 bg-yellow-400/10 px-5 py-4 font-bold text-yellow-300 transition hover:bg-yellow-400 hover:text-slate-950 hover:shadow-[0_0_35px_rgba(250,204,21,0.28)] cursor-pointer"
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

export default Contact;