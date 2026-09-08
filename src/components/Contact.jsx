import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import supabase from "../config/supabaseConfig";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError("");

    const { error } = await supabase
      .from("contact_messages")
      .insert([{
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      }]);

    if (error) {
      setSubmitError(error.message);
      setSubmitting(false);
      return;
    }

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }, 800);
  };

  const fieldCls = "input-hard";

  return (
    <div className="bg-paper min-h-screen pt-32 pb-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <p className="label-mono flex items-center gap-3 mb-4">
            <span className="inline-block w-12 h-1 bg-punk" aria-hidden="true" />
            Contact
          </p>
          <h1 className="font-display text-4xl sm:text-6xl uppercase leading-none">
            Get in <span className="outline-word">touch</span>
          </h1>
          <p className="mt-4 max-w-xl font-medium text-ink/70">
            Have questions or want to collaborate? Reach out to us and we'll get
            back to you soon.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* ─── INFO PANEL ─── */}
          <motion.div
            className="lg:col-span-2 order-2 lg:order-1"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="border-[3px] border-ink bg-paper shadow-[9px_9px_0_0_var(--color-ink)] p-7 h-full flex flex-col">
              <div className="sec-head !border-0 !pb-3 !mb-4">
                <h2 className="font-display text-2xl uppercase">Base info</h2>
              </div>

              <div className="space-y-6 mb-8 flex-1">
                <div className="flex items-start gap-4">
                  <span className="grid place-items-center h-11 w-11 border-[3px] border-ink bg-zing text-ink shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="label-mono text-ink">Phone</h3>
                    <p className="font-medium text-sm text-ink/70 mt-0.5">+91 7989842906</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="grid place-items-center h-11 w-11 border-[3px] border-ink bg-zing text-ink shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="label-mono text-ink">Email</h3>
                    <p className="font-medium text-sm text-ink/70 mt-0.5">codeoholics@cmrtc.ac.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="grid place-items-center h-11 w-11 border-[3px] border-ink bg-zing text-ink shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="label-mono text-ink">Base</h3>
                    <p className="font-medium text-sm text-ink/70 mt-0.5">CMRTC, Hyderabad — N17.50 / E78.53</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="label-mono text-ink mb-4">Connect with us</h3>
                <div className="flex gap-3">
                  <a
                    href="https://www.instagram.com/codeoholics"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="h-11 w-11 grid place-items-center border-[3px] border-ink bg-paper hover:bg-zing transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/codeoholics-club-cmrtc/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="h-11 w-11 grid place-items-center border-[3px] border-ink bg-paper hover:bg-zing transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ─── FORM ─── */}
          <motion.div
            className="lg:col-span-3 order-1 lg:order-2"
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="border-[3px] border-ink bg-paper shadow-[9px_9px_0_0_var(--color-ink)] p-7 sm:p-9">
              <h2 className="font-display text-2xl sm:text-3xl uppercase mb-7">
                Send a <span className="text-punk">message</span>
              </h2>

              {submitted ? (
                <motion.div
                  className="text-center py-16"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <span className="inline-grid place-items-center h-16 w-16 border-[3px] border-ink bg-acid text-ink mb-5 font-display text-2xl">
                    ✓
                  </span>
                  <h3 className="font-display text-3xl uppercase mb-2">Message sent!</h3>
                  <p className="font-medium text-ink/70">Thank you for reaching out. We'll get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="label-mono block mb-2">Your name *</label>
                      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className={fieldCls} placeholder="John Doe" />
                    </div>
                    <div>
                      <label htmlFor="email" className="label-mono block mb-2">Email address *</label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className={fieldCls} placeholder="john@example.com" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="label-mono block mb-2">Subject *</label>
                    <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required className={fieldCls} placeholder="How can we help you?" />
                  </div>

                  <div>
                    <label htmlFor="message" className="label-mono block mb-2">Your message *</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows="5" className={`${fieldCls} resize-none`} placeholder="Please describe your inquiry..."></textarea>
                  </div>

                  {submitError && (
                    <div className="border-[3px] border-ink bg-punk text-paper px-4 py-3 label-mono !text-[11px]">
                      Couldn't send your message: {submitError}
                    </div>
                  )}

                  <button type="submit" disabled={submitting} className={`btn w-full ${submitting ? "btn-outline opacity-60 cursor-not-allowed" : "btn-solid"}`}>
                    {submitting ? (
                      <><span className="inline-block w-4 h-4 border-2 border-ink border-t-transparent animate-spin" aria-hidden="true" /> Sending message...</>
                    ) : "Send message"}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* ─── FAQ ─── */}
        <div className="mt-24">
          <div className="sec-head">
            <h2 className="font-display text-4xl sm:text-5xl uppercase">FAQ</h2>
            <span className="label-mono hidden sm:block text-ink/60">FREQUENTLY ASKED</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { q: "When do you host events?", a: "We host events throughout the academic year. Check our Events page for the latest schedule and upcoming opportunities." },
              { q: "How can I join the club?", a: "Membership applications are open at the beginning of each semester. Follow us on social media or contact us directly for the latest intake information." },
              { q: "Do you offer mentorship programs?", a: "Yes, we connect junior members with experienced seniors and industry professionals for guidance in various tech domains." },
              { q: "Can I volunteer for your events?", a: "Absolutely! We're always looking for enthusiastic volunteers. Fill out the contact form above or email us directly to express your interest." },
            ].map((faq, i) => (
              <motion.div
                key={i}
                className={`border-[3px] border-ink p-6 ${i % 2 ? "bg-zing" : "bg-paper"}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
              >
                <h3 className="label-mono mb-2 text-ink uppercase">
                  <span className="text-signal mr-2">Q{i + 1}.</span>{faq.q}
                </h3>
                <p className="font-medium text-sm text-ink/75 leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;