import axios from "axios";
import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!form.email.trim()) e.email = "Please enter your email.";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Invalid email.";
    if (!form.message.trim()) e.message = "Please enter a message.";
    return e;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const eobj = validate();
    setErrors(eobj);
    if (Object.keys(eobj).length) return;

    try {
      const response = await axios.post("http://localhost:5000/api/contact", form);
      if (response.data.success) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          {/* left: contact form */}
          <div className="bg-gray-50 rounded-lg p-8 shadow">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              Contact SSC
            </h3>
            <p className="text-gray-600 mb-6">
              Questions about donation drives, partnerships, or student support?
              Send us a message and the Student Supreme Council (SSC) will
              respond.
            </p>

            <form onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 gap-4">
                <label className="block">
                  <span className="text-sm font-medium text-gray-700">
                    Name
                  </span>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-md border px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                      errors.name ? "border-red-400" : "border-gray-200"
                    }`}
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p className="text-sm text-red-500 mt-1">{errors.name}</p>
                  )}
                </label>

                <label className="block">
                  <span className="text-sm font-medium text-gray-700">
                    Email
                  </span>
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-md border px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                      errors.email ? "border-red-400" : "border-gray-200"
                    }`}
                    placeholder="you@example.com"
                    type="email"
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500 mt-1">{errors.email}</p>
                  )}
                </label>

                <label className="block">
                  <span className="text-sm font-medium text-gray-700">
                    Message
                  </span>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows="6"
                    className={`mt-1 block w-full rounded-md border px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                      errors.message ? "border-red-400" : "border-gray-200"
                    }`}
                    placeholder="How can we help?"
                  />
                  {errors.message && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.message}
                    </p>
                  )}
                </label>

                <div className="flex items-center space-x-3">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center px-5 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
                  >
                    Send Message
                  </button>

                  <a
                    href="mailto:ssc@donateflow.org"
                    className="inline-flex items-center justify-center px-4 py-2 rounded border border-gray-200 text-gray-700 hover:bg-gray-100 transition"
                  >
                    Email SSC
                  </a>
                </div>

                {status === "success" && (
                  <p className="text-sm text-green-600">
                    Email sent successfully! We will get back to you soon.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-sm text-red-600">
                    Oops — something went wrong. Try again or email
                    ssc@donateflow.org.
                  </p>
                )}
              </div>
            </form>
          </div>

          {/* right: contact info + map */}
          <div className="space-y-6">
            <div className="rounded-lg p-6 bg-gradient-to-r from-blue-50 to-white border border-gray-100 shadow-sm">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                Student Supreme Council (SSC)
              </h4>
              <p className="text-gray-700">
                Bukidnon State University — SSC Office
              </p>
              <p className="text-gray-700 mt-2">
                Email:{" "}
                <a className="text-blue-600" href="mailto:ssc@donateflow.org">
                  ssc@donateflow.org
                </a>
              </p>
              <p className="text-gray-700">
                Phone:{" "}
                <a className="text-blue-600" href="tel:+639123456789">
                  +63 912 345 6789
                </a>
              </p>
              <p className="text-gray-700 mt-2">
                Office Hours: Mon–Fri, 8:00 AM – 5:00 PM
              </p>
            </div>

            <div className="rounded-lg overflow-hidden border border-gray-100">
              {/* Replace src with an embedded Google Maps iframe when ready; this is a placeholder image */}
              <iframe
                title="SSC location"
                src="https://www.google.com/maps?q=Bukidnon%20State%20University&output=embed"
                className="w-full h-56 border-0"
                loading="lazy"
              />
            </div>

            <div className="text-sm text-gray-600">
              Prefer immediate assistance? Call SSC at{" "}
              <a className="text-blue-600" href="tel:+639123456789">
                +63 912 345 6789
              </a>{" "}
              or email{" "}
              <a className="text-blue-600" href="mailto:ssc@donateflow.org">
                ssc@donateflow.org
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
