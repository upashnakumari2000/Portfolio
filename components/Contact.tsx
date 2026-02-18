'use client'
import { useState } from "react";
import { Send } from "lucide-react";
import { CONTACT_EMAIL } from "@/constants";

type FormStatus = "idle" | "sending" | "success" | "error";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Something went wrong");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMessage("Could not reach the server. Please try again.");
    }
  };

  const buttonContent = {
    idle: <><Send className="w-5 h-5"/></>,
    sending: "Sending...",
    success: "Message sent! Yay!!!",
    error: "Try again",
  };

  return (
    <section id="contact" className="bg-linear-to-b from-[#D7DE8C]/20 to-[#F0A0B5]/20 py-20">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl text-[#F0A0B5] mb-4">Let Me Help You!</h2>
          <p className="text-gray-700 text-lg">Have something on your mind? I&apos;d love to hear about it ✨</p>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm text-gray-700 mb-2">Your Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border-2 border-[#F0A0B5]/30 focus:border-[#F0A0B5] focus:outline-none transition-colors"
                placeholder="Jane Doe"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border-2 border-[#F0A0B5]/30 focus:border-[#F0A0B5] focus:outline-none transition-colors"
                placeholder="hello@email.com"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm text-gray-700 mb-2">Your Message</label>
              <textarea
                id="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border-2 border-[#F0A0B5]/30 focus:border-[#F0A0B5] focus:outline-none transition-colors resize-none"
                placeholder="Reach out with any queries..."
                required
              />
            </div>

            {status === "error" && (
              <p className="text-red-500 text-sm">{errorMessage}</p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-[#F0A0B5] text-white px-8 py-4 rounded-full
             hover:bg-[#E08FA3] transition-colors shadow-lg
             flex items-center justify-center gap-2
             disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {buttonContent[status]}
            </button>
          </form>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Or reach out directly:</p>
          <a href="mailto:upashnakumari2000@gmail.com" className="text-[#F0A0B5] hover:text-[#E08FA3] text-lg font-medium">
            {CONTACT_EMAIL}
          </a>
        </div>
      </div>
    </section>
  );
}
