'use client';

import { motion } from 'framer-motion';
import { Download, Calendar, MapPin, Mail, Phone, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function Resume() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">Resume</h1>
          <div className="flex justify-center gap-4 mb-6">
            <Link
              href="/resume/pdf"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Download className="h-5 w-5" />
              View PDF
            </Link>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg mb-8">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">John Doe</h2>
          <h3 className="text-xl text-gray-600 dark:text-gray-300 mb-4">Senior Full Stack Developer</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
              <MapPin className="h-5 w-5 text-blue-600" />
              San Francisco, CA
            </div>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
              <Mail className="h-5 w-5 text-blue-600" />
              john@example.com
            </div>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
              <Phone className="h-5 w-5 text-blue-600" />
              (123) 456-7890
            </div>
            <div className="flex items-center gap-4">
              <Link href="https://github.com" className="text-blue-600 hover:text-blue-700">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="https://linkedin.com" className="text-blue-600 hover:text-blue-700">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Professional Summary</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Senior Full Stack Developer with 5+ years of experience in building scalable web applications.
            Specialized in React, Node.js, and cloud technologies. Proven track record of leading teams
            and delivering high-impact projects.
          </p>
        </div>

        {/* Experience */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-6">Experience</h2>
          <div className="space-y-8">
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Senior Full Stack Developer</h3>
                  <p className="text-blue-600">Tech Innovators Inc.</p>
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                  <Calendar className="h-4 w-4" />
                  2022 - Present
                </div>
              </div>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Led development of microservices-based architecture serving 1M+ users</li>
                <li>Implemented CI/CD pipelines reducing deployment time by 60%</li>
                <li>Mentored junior developers and conducted code reviews</li>
              </ul>
            </div>
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Full Stack Developer</h3>
                  <p className="text-blue-600">Digital Solutions Ltd.</p>
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                  <Calendar className="h-4 w-4" />
                  2020 - 2022
                </div>
              </div>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Developed and maintained multiple client projects using React and Node.js</li>
                <li>Improved application performance by 40% through optimization</li>
                <li>Implemented responsive designs and accessibility features</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-6">Technical Skills</h2>
          <div className="flex flex-wrap gap-2">
            {['JavaScript/TypeScript', 'React/Next.js', 'Node.js/Express', 'Python/Django',
              'PostgreSQL/MongoDB', 'AWS/Docker', 'GraphQL', 'CI/CD'].map((skill) => (
              <span
                key={skill}
                className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-4 py-2 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-6">Education</h2>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Master of Science in Computer Science</h3>
                  <p className="text-blue-600">Stanford University</p>
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                  <Calendar className="h-4 w-4" />
                  2018 - 2020
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">Focus on Software Engineering and Distributed Systems</p>
            </div>
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Bachelor of Science in Computer Science</h3>
                  <p className="text-blue-600">University of California, Berkeley</p>
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                  <Calendar className="h-4 w-4" />
                  2014 - 2018
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">Minor in Mathematics</p>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-blue-600 mb-6">Certifications</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2" />
              AWS Certified Solutions Architect - Amazon Web Services (2023)
            </li>
            <li className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2" />
              Professional Scrum Master I - Scrum.org (2022)
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}