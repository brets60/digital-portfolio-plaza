import React, { useState } from 'react';
import { Send, User, AtSign, Terminal, ExternalLink, ShieldCheck } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/Icons';
import { DEVELOPER_PROFILE } from '../../data/portfolioContent';
import { useTheme } from '../../context/ThemeContext';
import confetti from 'canvas-confetti';

interface ContactSectionProps {
  onAddToast: (type: 'success' | 'error' | 'info', title: string, message: string) => void;
}

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onAddToast }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: 'Project Consultation / Job Opportunity',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(DEVELOPER_PROFILE.socialLinks.email);
      setCopiedEmail(true);
      onAddToast('success', 'Email Copied', `${DEVELOPER_PROFILE.socialLinks.email} copied to clipboard.`);
      setTimeout(() => setCopiedEmail(false), 3000);
    } catch {
      onAddToast('info', 'Developer Email', DEVELOPER_PROFILE.socialLinks.email);
    }
  };

  const validate = (): boolean => {
    const errs: FormErrors = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = 'Please provide your name (minimum 2 characters).';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please provide a message of at least 10 characters.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      onAddToast('error', 'Form Incomplete', 'Please correct the highlighted fields before submitting.');
      return;
    }

    setIsSubmitting(true);
    try {
      // Simulate API route payload dispatch
      await new Promise((res) => setTimeout(res, 800));

      setIsSuccess(true);
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#3B82F6', '#6366F1', '#10B981'],
      });

      onAddToast(
        'success',
        'Message Dispatched',
        `Thank you ${formData.name}! Your message payload has been logged. Tristan will follow up promptly.`
      );

      setFormData({
        name: '',
        email: '',
        subject: 'Project Consultation / Job Opportunity',
        message: '',
      });
      setErrors({});
    } catch {
      onAddToast('error', 'Transmission Failure', 'Failed to transmit message. Please send direct email instead.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={`py-24 border-t transition-colors ${
      isDark ? 'bg-[#0B0F19] border-slate-800/80' : 'bg-slate-50/50 border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 pb-6 border-b border-slate-800/60 dark:border-slate-800 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Let&apos;s Connect
            </h2>
          </div>
          <p className={`text-sm max-w-md ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Open to full-stack engineering roles, technical architecture consulting, and high-impact software contracts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Communication Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className={`p-6 sm:p-8 rounded-2xl border transition-all ${
              isDark ? 'bg-[#111827] border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <h3 className={`text-xl font-bold tracking-tight mb-2 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                Ready to build something reliable?
              </h3>
              <p className={`text-xs sm:text-sm leading-relaxed mb-6 ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}>
                Whether you have an upcoming project, a challenging full-stack position, or simply want to exchange ideas on software architecture, feel free to reach out.
              </p>

              {/* Direct Email Card */}
              <div className={`p-4 rounded-xl border mb-6 ${
                isDark ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'
              }`}>
                <span className={`text-[11px] font-mono block mb-1 font-medium ${
                  isDark ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  DIRECT EMAIL ENDPOINT:
                </span>
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-xs sm:text-sm text-blue-500 font-semibold truncate">
                    {DEVELOPER_PROFILE.socialLinks.email}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className={`px-2.5 py-1 rounded-lg border text-xs font-mono transition-all shrink-0 active:scale-95 ${
                      isDark
                        ? 'bg-slate-800 border-slate-700 text-slate-300 hover:text-white'
                        : 'bg-white border-slate-300 text-slate-700 hover:text-slate-900 shadow-sm'
                    }`}
                    title="Copy email"
                  >
                    {copiedEmail ? 'Copied' : 'Copy'}
                  </button>
                </div>
              </div>

              {/* Social Channels */}
              <div className="space-y-2">
                <span className={`text-[11px] font-mono block font-medium ${
                  isDark ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  VERIFIED CHANNELS:
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={DEVELOPER_PROFILE.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-between p-3 rounded-xl border text-xs font-mono transition-all ${
                      isDark
                        ? 'bg-slate-950 border-slate-800 text-slate-200 hover:border-slate-700 hover:text-white'
                        : 'bg-white border-slate-200 text-slate-800 hover:border-slate-300 hover:text-slate-900 shadow-sm'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <GithubIcon className="w-4 h-4" />
                      <span>GitHub</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                  </a>

                  <a
                    href={DEVELOPER_PROFILE.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-between p-3 rounded-xl border text-xs font-mono transition-all ${
                      isDark
                        ? 'bg-slate-950 border-slate-800 text-blue-400 hover:border-slate-700 hover:text-blue-300'
                        : 'bg-white border-slate-200 text-blue-600 hover:border-slate-300 hover:text-blue-700 shadow-sm'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <LinkedinIcon className="w-4 h-4" />
                      <span>LinkedIn</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                  </a>
                </div>
              </div>

              {/* SLA Guarantee */}
              <div className="mt-6 pt-4 border-t border-slate-800/60 dark:border-slate-800/80 flex items-center gap-2 text-xs font-mono text-emerald-500">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>Response SLA: Within 24 hours</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className={`p-6 sm:p-8 rounded-2xl border transition-all ${
              isDark ? 'bg-[#111827] border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800/60 dark:border-slate-800 mb-6">
                <div className="flex items-center gap-2 font-mono text-xs font-semibold text-blue-500">
                  <Terminal className="w-4 h-4" />
                  <span>TRANSMISSION_FORM.API</span>
                </div>
                <span className="text-[10px] font-mono text-emerald-500">CLIENT_VALIDATED</span>
              </div>

              {isSuccess && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 text-xs flex items-center justify-between">
                  <span>Message sent successfully! Thank you for reaching out.</span>
                  <button onClick={() => setIsSuccess(false)} className="underline font-bold">
                    Reset
                  </button>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Name */}
                <div>
                  <label htmlFor="contact-name" className={`block text-xs font-mono mb-1 font-medium ${
                    isDark ? 'text-slate-300' : 'text-slate-700'
                  }`}>
                    Full Name / Organization *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      id="contact-name"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: undefined });
                      }}
                      placeholder="e.g. Alex Rivera or Technology Corp"
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm transition-colors ${
                        isDark ? 'bg-slate-950 text-white placeholder:text-slate-600' : 'bg-slate-50 text-slate-900 placeholder:text-slate-400'
                      } ${
                        errors.name ? 'border-rose-500 focus:ring-1 focus:ring-rose-500' : 'border-slate-700/60 dark:border-slate-800 focus:border-blue-500'
                      }`}
                      aria-invalid={errors.name ? 'true' : 'false'}
                    />
                  </div>
                  {errors.name && <p className="text-xs text-rose-500 mt-1 font-mono">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="contact-email" className={`block text-xs font-mono mb-1 font-medium ${
                    isDark ? 'text-slate-300' : 'text-slate-700'
                  }`}>
                    Email Address *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                      <AtSign className="w-4 h-4" />
                    </div>
                    <input
                      type="email"
                      id="contact-email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      placeholder="alex@example.com"
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm transition-colors ${
                        isDark ? 'bg-slate-950 text-white placeholder:text-slate-600' : 'bg-slate-50 text-slate-900 placeholder:text-slate-400'
                      } ${
                        errors.email ? 'border-rose-500 focus:ring-1 focus:ring-rose-500' : 'border-slate-700/60 dark:border-slate-800 focus:border-blue-500'
                      }`}
                      aria-invalid={errors.email ? 'true' : 'false'}
                    />
                  </div>
                  {errors.email && <p className="text-xs text-rose-500 mt-1 font-mono">{errors.email}</p>}
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="contact-subject" className={`block text-xs font-mono mb-1 font-medium ${
                    isDark ? 'text-slate-300' : 'text-slate-700'
                  }`}>
                    Inquiry Subject
                  </label>
                  <select
                    id="contact-subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors ${
                      isDark ? 'bg-slate-950 text-white border-slate-800' : 'bg-slate-50 text-slate-900 border-slate-200'
                    }`}
                  >
                    <option value="Project Consultation / Job Opportunity">Full-Stack Role (Remote / Hybrid)</option>
                    <option value="Business Management System Project">Business Management System Development</option>
                    <option value="Hardware / IoT Prototyping">Hardware / IoT Systems Prototyping</option>
                    <option value="General Technical Inquiry">General Engineering Inquiry</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className={`block text-xs font-mono mb-1 font-medium ${
                    isDark ? 'text-slate-300' : 'text-slate-700'
                  }`}>
                    Message Scope *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: undefined });
                    }}
                    placeholder="Briefly describe your objectives, timeline, or technical stack..."
                    className={`w-full p-4 rounded-xl border text-sm resize-none transition-colors ${
                      isDark ? 'bg-slate-950 text-white placeholder:text-slate-600' : 'bg-slate-50 text-slate-900 placeholder:text-slate-400'
                    } ${
                      errors.message ? 'border-rose-500 focus:ring-1 focus:ring-rose-500' : 'border-slate-700/60 dark:border-slate-800 focus:border-blue-500'
                    }`}
                    aria-invalid={errors.message ? 'true' : 'false'}
                  />
                  {errors.message && <p className="text-xs text-rose-500 mt-1 font-mono">{errors.message}</p>}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-blue-600 hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] active:scale-[0.99] disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Transmitting Payload...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
