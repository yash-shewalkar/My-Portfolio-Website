"use client";

import React, { useState } from "react";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    attachment: null as File | null,
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      setFormData((prev) => ({ ...prev, attachment: files[0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("message", formData.message);
      if (formData.attachment) {
        formDataToSend.append("attachment", formData.attachment);
      }

      const response = await fetch("/api/sendmail", {
        method: "POST",
        body: formDataToSend,
      });

      const result = await response.json();
      if (response.ok) {
        setSuccess("Email sent successfully!");
        setFormData({ name: "", email: "", message: "", attachment: null });
      } else {
        setError(result.message || "Failed to send email.");
      }
    } catch (error) {
      setError("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-10 bg-slate-950 p-5 rounded-xl shadow-lg">
      <p className="font-semibold text-3xl text-center mb-5">Contact Me</p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-neutral-400">
        <div>
          <label htmlFor="name" className="block font-medium mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 rounded-lg bg-slate-900 border border-white focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <div>
          <label htmlFor="email" className="block font-medium mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 rounded-lg bg-slate-900 border border-white focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <div>
          <label htmlFor="message" className="block font-medium mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full p-2 rounded-lg bg-slate-900 border border-white focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <div>
          <label htmlFor="attachment" className="block font-medium mb-2">Attachment</label>
          <input
            type="file"
            id="attachment"
            name="attachment"
            onChange={handleFileChange}
            className="w-full text-neutral-400"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-3 p-2 bg-blue-600 hover:bg-teal-500 transition-all duration-300 text-white rounded-lg shadow-lg"
        >
          {loading ? "Sending..." : "Submit"}
        </button>

        {success && <p className="text-green-500 text-center">{success}</p>}
        {error && <p className="text-red-500 text-center">{error}</p>}
      </form>
    </div>
  );
};

export default ContactForm;
