'use client'
import { useState } from "react";
import { Send } from "lucide-react";
import { CONTACT_EMAIL } from "@/constants";
import { ScrollReveal } from "@/components/ScrollReveal";

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
    idle: "Send message",
    sending: "Sending...",
    success: "Message sent!",
    error: "Try again",
  };

  return (
    <section id="contact" className="bg-linear-to-b from-[#D7DE8C]/20 to-[#F0A0B5]/20 py-20">
      <div className="mx-w-5xl mx-auto px-4">
        <ScrollReveal>
        <div className="mb-10 text-center">
            <p className="text-xs tracking-[0.24em] text-[#97A53E]">CONTACT</p>
            <h2 className="mt-3 text-4xl text-[#F0A0B5] md:text-5xl">Let&apos;s build something meaningful</h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-700">
              Tell me about the role, team, or product challenge. I&apos;ll get back with thoughtful
              ideas and next steps.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-[1.05fr_0.95fr]">
          <ScrollReveal>
            <div className="rounded-3xl border border-white/70 bg-white/90 p-8 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-[#F0A0B5]/35 px-4 py-3 focus:border-[#F0A0B5] focus:outline-none"
                    placeholder="Jane Doe"
                    required
                  />
                </div>

            <div>
                  <label htmlFor="email" className="mb-2 block text-sm text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-[#F0A0B5]/35 px-4 py-3 focus:border-[#F0A0B5] focus:outline-none"
                    placeholder="you@company.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full resize-none rounded-xl border border-[#F0A0B5]/35 px-4 py-3 focus:border-[#F0A0B5] focus:outline-none"
                    placeholder="What are you hiring for, and what outcomes matter most?"
                    required
                  />
                </div>

                {status === 'error' && <p className="text-sm text-red-500">{errorMessage}</p>}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#F0A0B5] px-8 py-3 text-white shadow-lg transition-colors hover:bg-[#E08FA3] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  <Send className="h-4 w-4" />
                  {buttonContent[status]}
                </button>
              </form>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.06}>
            <div className="flex h-full flex-col justify-between rounded-3xl border border-[#97A53E]/25 bg-white/80 p-7 shadow-lg">
              <div>
                <h3 className="text-3xl text-[#97A53E]">Quick contact</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-700">
                  Prefer direct email? Reach me here for interviews, full-time roles, contract
                  work, or collaboration opportunities.
                </p>
              </div>

<div className="mt-6 rounded-2xl bg-[#D7DE8C]/25 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-[#97A53E]">Email</p>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="mt-2 block text-base text-gray-800 underline-offset-4 transition-colors hover:text-[#F0A0B5] hover:underline"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}