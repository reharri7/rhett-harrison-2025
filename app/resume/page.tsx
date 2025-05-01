'use client';

import React, {useState} from 'react';
import {Calendar, Download, Github, Linkedin, Mail, MapPin, Phone} from 'lucide-react';
import Link from 'next/link';

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

export default function Resume() {
  return (
    <div className="container mx-auto px-4 py-16">
      <ClientMotion>
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5}}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-theme-title mb-4">Resume</h1>
            <div className="flex justify-center gap-4 mb-6">
              <Link
                href="/resume/pdf"
                className="inline-flex items-center gap-2 bg-theme-primary text-white px-6 py-3 rounded-lg transition-colors"
              >
                <Download className="h-5 w-5"/>
                View PDF
              </Link>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-theme-card rounded-lg p-8 shadow-lg mb-8">
            <h2 className="text-3xl font-bold text-theme-title mb-4">Rhett Harrison</h2>
            <h3 className="text-xl text-theme-body mb-4">
              Senior Full Stack Software Engineer
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-2 text-theme-body">
                <MapPin className="h-5 w-5 text-theme-title"/>
                Sonora, CA
              </div>
              <div className="flex items-center gap-2 text-theme-body">
                <Mail className="h-5 w-5 text-theme-title"/>
                rhettharrison.dev@gmail.com
              </div>
              <div className="flex items-center gap-2 text-theme-body">
                <Phone className="h-5 w-5 text-theme-title"/>
                (209) 605-1908
              </div>
              <div className="flex items-center gap-4">
                <Link
                  href="https://github.com/reharri7"
                  className="text-theme-link"
                >
                  <Github className="h-5 w-5"/>
                </Link>
                <Link
                  href="https://linkedin.com/in/rhettharrison"
                  className="text-theme-link"
                >
                  <Linkedin className="h-5 w-5"/>
                </Link>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="bg-theme-card rounded-lg p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-theme-title mb-4">Professional Summary</h2>
            <p className="text-theme-body">
              Full Stack Software Engineer with three years of experience designing, developing, and
              maintaining innovative products across government and agriculture industries. My
              expertise spans various platforms and programming languages, enabling me to deliver
              high-quality solutions. I excel in self-management during independent projects, thrive
              in collaborative team settings, and have mentored multiple software engineers, fostering
              professional growth. Passionate about leveraging technology to solve complex problems.
            </p>
          </div>

          {/* Experience */}
          <div className="bg-theme-card rounded-lg p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-theme-title mb-6">Experience</h2>
            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-semibold text-theme-subtitle">
                      Senior Full Stack Software Engineer
                    </h3>
                    <p className="text-theme-title">Axiallon Software</p>
                  </div>
                  <div className="flex items-center gap-2 text-theme-body">
                    <Calendar className="h-4 w-4"/>
                    2021 - Present
                  </div>
                </div>
                <ul className="list-disc list-inside text-theme-body space-y-2">
                  <li>
                    Maintain a goal-tracking behavior system used for 2,000 youth to improve
                    self-regulation, attitude, engagement with peers, and social connections.
                  </li>
                  <li>
                    Cooperated with a team of youth leaders to create a management system used to
                    track 200 closely monitored youth and behavior daily.
                  </li>
                  <li>
                    Designed and implemented an incentive reward system for youth leaders to operate
                    with paired youth to encourage improvement in behavior.
                  </li>
                  <li>
                    Created a cross-platform mobile application using Angular and Ionic to serve as a
                    social network platform for over 3,000 agriculture enthusiasts.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="bg-theme-card rounded-lg p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-theme-title mb-6">Technical Skills</h2>
            <div className="flex flex-wrap gap-2">
              {[
                'JavaScript/TypeScript',
                'Angular',
                'React/Next.js',
                'SpringBoot',
                'Java',
                'Hibernate',
                'OracleDB',
                'PostgreSQL',
              ].map(skill => (
                <span
                  key={skill}
                  className="bg-theme-tag px-4 py-2 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="bg-theme-card rounded-lg p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-theme-title mb-6">Education</h2>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-semibold text-theme-subtitle">
                      Bachelor&apos;s of Software Engineering
                    </h3>
                    <p className="text-theme-title">Arizona State University</p>
                  </div>
                  <div className="flex items-center gap-2 text-theme-body">
                    <Calendar className="h-4 w-4"/>
                    2019 - Present
                  </div>
                </div>
                <ul className="list-disc list-inside text-theme-body space-y-2">
                  <li>Maintaining a cumulative GPA of 3.44 on a 4.0 scale</li>
                  <li>
                    Completed a comprehensive curriculum covering programming, software design and
                    development, database systems, data structures, algorithms, and computer
                    architecture.
                  </li>
                  <li>
                    Acquired hands-on experience through various software development projects,
                    working in teams, and applying Agile methodologies.
                  </li>
                  <li>
                    Developed expertise in multiple programming languages including Java and
                    TypeScript
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-theme-card rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-theme-title mb-6">Certifications</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-2 text-theme-body">
                <span className="w-1.5 h-1.5 bg-theme-primary rounded-full mt-2"/>
                Complete Angular Developer, Zero to Mastery
              </li>
              <li className="flex items-start gap-2 text-theme-body">
                <span className="w-1.5 h-1.5 bg-theme-primary rounded-full mt-2"/>
                Complete SQL + Databases, Zero to Mastery
              </li>
            </ul>
          </div>
        </motion.div>
      </ClientMotion>
    </div>
  );
}
