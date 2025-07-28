'use client';

import React, {useState} from 'react';
import {Github, Linkedin, MapPin, Send} from 'lucide-react';
import Link from 'next/link';
import {toast} from 'sonner';
import {sendContactEmail} from '@/actions/sendContactEmail';

// Import framer-motion directly
import {motion} from 'framer-motion';

// Create a client-only wrapper for framer-motion
const ClientMotion = ({children}: { children: React.ReactNode }) => {
  const [isMounted, setIsMounted] = useState(false);

  // Only show the motion components after mounting on the client
  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className="animate-pulse">{children}</div>;
  }

  return <>{children}</>;
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const emailIsValid = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!!formData.email && !!formData.message && !!formData.name && !!formData.subject) {
      if (!emailIsValid(formData.email)) {
        setSubmitStatus('error');
        setIsSubmitting(false);
        toast.error('Please enter a valid email address');
      } else {
        sendContactEmail(formData.email, formData.name, formData.subject, formData.message)
          .then(() => {
            setSubmitStatus('success');
            setIsSubmitting(false);
            toast.success('Message sent successfully!');
            setFormData({ name: '', email: '', subject: '', message: '' });
          })
          .catch(() => {
            setSubmitStatus('error');
            toast.error('Please fill out all fields');
          })
          .finally(() => {
            setSubmitStatus('idle');
            setIsSubmitting(false);
          });
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <ClientMotion>
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5}}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-theme-title mb-4">Get in Touch</h1>
          <p className="text-xl text-theme-body max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I&apos;d love to hear from you. Let&apos;s
            create something amazing together.
          </p>
        </motion.div>
      </ClientMotion>

      <div className="grid md:grid-cols-2 gap-12">
        <ClientMotion>
          <motion.div
            initial={{opacity: 0, x: -20}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 0.5, delay: 0.2}}
          >
            <div className="bg-theme-card rounded-lg p-8 shadow-lg">
              <h2 className="text-2xl font-semibold text-theme-title mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-theme-tag p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-theme-title"/>
                  </div>
                  <div>
                    <p className="text-sm text-theme-body">Location</p>
                    <p className="text-theme-body font-medium">Sonora, CA</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold text-theme-subtitle mb-4">
                  Follow Me
                </h3>
                <div className="flex gap-4">
                  <Link
                    href="https://github.com/reharri7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-theme-tag p-3 rounded-full hover:bg-opacity-80 transition-colors"
                  >
                    <Github className="h-6 w-6 text-theme-title"/>
                  </Link>
                  <Link
                    href="https://linkedin.com/in/rhettharrison"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-theme-tag p-3 rounded-full hover:bg-opacity-80 transition-colors"
                  >
                    <Linkedin className="h-6 w-6 text-theme-title"/>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </ClientMotion>

        <ClientMotion>
          <motion.div
            initial={{opacity: 0, x: 20}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 0.5, delay: 0.2}}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-theme-card rounded-lg p-8 shadow-lg"
            >
              <h2 className="text-2xl font-semibold text-theme-title mb-6">Send Message</h2>
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-theme-body mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-theme-muted bg-theme-input focus:outline-none focus:ring-2 focus:ring-theme-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-theme-body mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-theme-muted bg-theme-input focus:outline-none focus:ring-2 focus:ring-theme-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-theme-body mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-theme-muted bg-theme-input focus:outline-none focus:ring-2 focus:ring-theme-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-theme-body mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-theme-muted bg-theme-input focus:outline-none focus:ring-2 focus:ring-theme-primary"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center gap-2 bg-theme-primary text-white px-6 py-3 rounded-lg transition-colors ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <Send className="h-5 w-5"/>
                    </>
                  )}
                </button>
                {submitStatus === 'success' && (
                  <p
                    className="text-emerald-600 dark:text-emerald-400 theme-cyberpunk:text-emerald-400 theme-forest:text-emerald-400 text-center">Message
                    sent successfully!</p>
                )}
                {submitStatus === 'error' && (
                  <p
                    className="text-red-600 dark:text-red-400 theme-cyberpunk:text-red-400 theme-forest:text-red-400 text-center">
                    Failed to send message. Please try again.
                  </p>
                )}
              </div>
            </form>
          </motion.div>
        </ClientMotion>
      </div>
    </div>
  );
}
