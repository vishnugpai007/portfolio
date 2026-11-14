import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Linkedin, Github, CheckCircle2, AlertCircle, Loader2, ArrowUpRight, MessageSquare } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { profileData } from '../data/profile';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'fallback' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState<string>('');

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.name.trim()) {
      errs.name = 'Please provide your name.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!emailRegex.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }

    if (!formData.subject.trim()) {
      errs.subject = 'Please enter a subject.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setStatusMessage('');

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const isEmailJSConfigured =
      Boolean(serviceId && templateId && publicKey) &&
      serviceId !== 'your_service_id_here' &&
      templateId !== 'your_template_id_here' &&
      publicKey !== 'your_public_key_here';

    if (!isEmailJSConfigured) {
      // Honest Fallback: Open in default mail client with prefilled details
      const mailtoUrl = `mailto:${profileData.contact.email}?subject=${encodeURIComponent(
        `[Portfolio] ${formData.subject}`
      )}&body=${encodeURIComponent(
        `Hi Vishnu,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
      )}`;

      window.location.href = mailtoUrl;

      setIsSubmitting(false);
      setSubmitStatus('fallback');
      setStatusMessage(
        'EmailJS environment keys are not configured in this environment (.env). Form details have been opened in your default email client via mailto fallback.'
      );
      return;
    }

    // Really send via EmailJS
    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        publicKey
      );

      // Only show genuine success after promise resolves cleanly
      setIsSubmitting(false);
      setSubmitStatus('success');
      setStatusMessage('Thank you for reaching out! Your message was sent successfully.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err: unknown) {
      setIsSubmitting(false);
      setSubmitStatus('error');
      const errorMsg =
        typeof err === 'object' && err !== null && 'text' in err
          ? String((err as { text: string }).text)
          : 'Failed to send message via EmailJS. Please try again or email directly.';
      setStatusMessage(errorMsg);
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative w-full py-24 sm:py-32 scroll-mt-20 overflow-hidden bg-bg"
    >
      {/* Background Subtle Gradient & Geometry */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-radial-glow from-accent/10 via-transparent to-transparent opacity-40 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card/70 backdrop-blur-sm text-accent text-xs font-mono mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span>06 / CONTACT</span>
          </div>
          <h2
            id="contact-heading"
            className="text-3xl sm:text-5xl md:text-6xl font-heading font-extrabold tracking-tight text-text leading-tight max-w-3xl"
          >
            Have an idea? Let's build something.
          </h2>
          <p className="mt-4 text-secondary-text max-w-2xl text-base sm:text-lg font-body leading-relaxed">
            I'm always interested in connecting with developers, collaborating on projects, exploring opportunities and learning from new challenges.
          </p>
        </motion.div>

        {/* 12-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: Direct Connect Channels */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-6 sm:p-8 rounded-2xl border border-border bg-card/60 backdrop-blur-sm space-y-6">
              <h3 className="font-heading font-bold text-xl text-text tracking-tight">
                Direct Channels
              </h3>
              <p className="text-sm font-body text-secondary-text leading-relaxed">
                Feel free to email directly, connect on LinkedIn, or inspect my repositories and active contributions on GitHub.
              </p>

              {/* Direct Buttons */}
              <div className="space-y-3">
                {/* Email Button */}
                <a
                  href={`mailto:${profileData.contact.email}`}
                  className="group w-full p-4 rounded-xl border border-border bg-secondary-bg/60 hover:bg-secondary-bg hover:border-accent/60 flex items-center justify-between transition-all duration-200"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg border border-border bg-card text-accent group-hover:scale-105 transition-transform">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <div className="text-[10px] font-mono text-secondary-text uppercase">Email</div>
                      <div className="text-xs sm:text-sm font-mono font-medium text-text">{profileData.contact.email}</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-secondary-text group-hover:text-accent transition-colors" />
                </a>

                {/* LinkedIn Button */}
                <a
                  href={profileData.contact.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full p-4 rounded-xl border border-border bg-secondary-bg/60 hover:bg-secondary-bg hover:border-accent/60 flex items-center justify-between transition-all duration-200"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg border border-border bg-card text-accent group-hover:scale-105 transition-transform">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <div className="text-[10px] font-mono text-secondary-text uppercase">LinkedIn</div>
                      <div className="text-xs sm:text-sm font-mono font-medium text-text">vishnu-g-pai</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-secondary-text group-hover:text-accent transition-colors" />
                </a>

                {/* GitHub Button */}
                <a
                  href={profileData.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full p-4 rounded-xl border border-border bg-secondary-bg/60 hover:bg-secondary-bg hover:border-accent/60 flex items-center justify-between transition-all duration-200"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg border border-border bg-card text-accent group-hover:scale-105 transition-transform">
                      <Github className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <div className="text-[10px] font-mono text-secondary-text uppercase">GitHub</div>
                      <div className="text-xs sm:text-sm font-mono font-medium text-text">vishnugpai007</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-secondary-text group-hover:text-accent transition-colors" />
                </a>
              </div>
            </div>

            {/* Academic Location Pill */}
            <div className="p-4 rounded-xl border border-border/80 bg-secondary-bg/40 text-xs font-mono text-secondary-text flex items-center justify-between">
              <span>LOCATION: FISAT, KERALA</span>
              <span className="text-accent font-semibold">UTC+05:30</span>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              noValidate
              className="p-6 sm:p-8 md:p-10 rounded-2xl border border-border bg-card/70 backdrop-blur-md shadow-2xl space-y-6"
            >
              <div className="flex items-center gap-2 pb-4 border-b border-border text-xs font-mono text-secondary-text">
                <MessageSquare className="w-4 h-4 text-accent" />
                <span>Send a Message</span>
              </div>

              {/* Status Banner (Never faked!) */}
              {submitStatus === 'success' && (
                <div
                  role="alert"
                  className="p-4 rounded-xl border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 text-xs sm:text-sm flex items-start gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{statusMessage}</span>
                </div>
              )}

              {submitStatus === 'fallback' && (
                <div
                  role="alert"
                  className="p-4 rounded-xl border border-accent/40 bg-accent/10 text-text text-xs sm:text-sm flex items-start gap-3 font-mono"
                >
                  <AlertCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span>{statusMessage}</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div
                  role="alert"
                  className="p-4 rounded-xl border border-red-500/40 bg-red-500/10 text-red-400 text-xs sm:text-sm flex items-start gap-3 font-mono"
                >
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{statusMessage}</span>
                </div>
              )}

              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-name" className="text-xs font-mono text-secondary-text block">
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    placeholder="e.g. Alex Johnson"
                    className={`w-full px-4 py-3 rounded-xl border bg-secondary-bg/80 text-text text-sm font-body placeholder:text-secondary-text/40 focus:outline-none focus:ring-2 focus:ring-accent transition-all ${
                      errors.name ? 'border-red-500/70' : 'border-border'
                    }`}
                  />
                  {errors.name && (
                    <p id="name-error" className="text-xs font-mono text-red-400 mt-1">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-email" className="text-xs font-mono text-secondary-text block">
                    Your Email *
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    placeholder="alex@example.com"
                    className={`w-full px-4 py-3 rounded-xl border bg-secondary-bg/80 text-text text-sm font-body placeholder:text-secondary-text/40 focus:outline-none focus:ring-2 focus:ring-accent transition-all ${
                      errors.email ? 'border-red-500/70' : 'border-border'
                    }`}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-xs font-mono text-red-400 mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label htmlFor="contact-subject" className="text-xs font-mono text-secondary-text block">
                  Subject *
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  aria-invalid={!!errors.subject}
                  aria-describedby={errors.subject ? 'subject-error' : undefined}
                  placeholder="e.g. Collaboration on a Web Project"
                  className={`w-full px-4 py-3 rounded-xl border bg-secondary-bg/80 text-text text-sm font-body placeholder:text-secondary-text/40 focus:outline-none focus:ring-2 focus:ring-accent transition-all ${
                    errors.subject ? 'border-red-500/70' : 'border-border'
                  }`}
                />
                {errors.subject && (
                  <p id="subject-error" className="text-xs font-mono text-red-400 mt-1">
                    {errors.subject}
                  </p>
                )}
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="contact-message" className="text-xs font-mono text-secondary-text block">
                  Message *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  placeholder="Describe your idea, project, or question..."
                  className={`w-full px-4 py-3 rounded-xl border bg-secondary-bg/80 text-text text-sm font-body placeholder:text-secondary-text/40 focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-y min-h-[120px] ${
                    errors.message ? 'border-red-500/70' : 'border-border'
                  }`}
                />
                {errors.message && (
                  <p id="message-error" className="text-xs font-mono text-red-400 mt-1">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-accent hover:opacity-90 text-bg font-mono text-xs uppercase tracking-wider font-bold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Transmitting Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
