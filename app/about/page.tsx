'use client';

import {motion} from 'framer-motion';
import Image from 'next/image';
import {Code, Database, Globe, Layout, Server, Sparkles} from 'lucide-react';

const skills = [
  {
    category: 'Frontend Development',
    icon: Layout,
    items: ['Angular', 'Material', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    category: 'Backend Development',
    icon: Server,
    items: ['SpringBoot', 'Java'],
  },
  {
    category: 'Database',
    icon: Database,
    items: ['PostgreSQL', 'MySQL', 'PL/SQL', 'Prisma'],
  },
  {
    category: 'Tools & Others',
    icon: Code,
    items: ['Git', 'Docker'],
  },
];

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid md:grid-cols-2 gap-12 items-center mb-20"
      >
        <div>
          <h1 className="text-4xl font-bold text-blue-600 mb-6">About Me</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Hi! I&apos;m Rhett Harrison, a passionate full-stack developer with 3 years of
            experience in building web applications. I specialize in creating responsive,
            user-friendly websites using modern technologies.
          </p>
          <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
            <Globe className="w-5 h-5 text-blue-600" />
            <span>Based in Sonora, CA</span>
          </div>
        </div>
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?w=800&h=1000&fit=crop"
            alt="Rhett Harrison"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjEwMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjgwMCIgaGVpZ2h0PSIxMDAwIiBmaWxsPSIjZjNmNGY2Ii8+PC9zdmc+"
            className="object-cover"
          />
        </div>
      </motion.div>

      {/* Journey Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-20"
      >
        <h2 className="text-3xl font-bold text-blue-600 mb-8 flex items-center gap-3">
          <Sparkles className="w-6 h-6" />
          My Journey
        </h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            My journey in web development began during my computer science studies at Arizona State
            University. What started as a curiosity quickly turned into a passion for creating
            innovative digital solutions.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            Over the years, I&apos;ve had the privilege of working with startups and established
            agencies, helping them build scalable web applications and implement modern development
            practices. I&apos;m constantly learning and exploring new technologies to stay at the
            forefront of web development.
          </p>
        </div>
      </motion.div>

      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-3xl font-bold text-blue-600 mb-8">Technical Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map(skill => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.category}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="w-6 h-6 text-blue-600" />
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    {skill.category}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {skill.items.map(item => (
                    <li
                      key={item}
                      className="text-gray-600 dark:text-gray-300 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
