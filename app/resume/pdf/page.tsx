'use client';

import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

import dynamic from "next/dynamic";

const PDFViewer = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFViewer),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  },
);

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Helvetica',
  },
  header: {
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    marginBottom: 5,
    color: '#2563eb',
  },
  title: {
    fontSize: 16,
    marginBottom: 5,
    color: '#4b5563',
  },
  contact: {
    fontSize: 12,
    color: '#6b7280',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    marginBottom: 10,
    color: '#2563eb',
  },
  experienceItem: {
    marginBottom: 15,
  },
  companyTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  period: {
    fontSize: 12,
    color: '#6b7280',
    marginBottom: 5,
  },
  description: {
    fontSize: 12,
    marginBottom: 3,
  },
  skills: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 5,
  },
  skill: {
    fontSize: 12,
    backgroundColor: '#dbeafe',
    padding: '4 8',
    borderRadius: 12,
    color: '#2563eb',
  },
});

const ResumePDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.title}>Senior Full Stack Developer</Text>
        <Text style={styles.contact}>
          San Francisco, CA • john@example.com • (123) 456-7890
        </Text>
      </View>

      {/* Summary */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Professional Summary</Text>
        <Text style={styles.description}>
          Senior Full Stack Developer with 5+ years of experience in building scalable web applications.
          Specialized in React, Node.js, and cloud technologies. Proven track record of leading teams
          and delivering high-impact projects.
        </Text>
      </View>

      {/* Experience */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Experience</Text>
        <View style={styles.experienceItem}>
          <Text style={styles.companyTitle}>Senior Full Stack Developer</Text>
          <Text style={styles.period}>Tech Innovators Inc. • 2022 - Present</Text>
          <Text style={styles.description}>• Led development of microservices-based architecture serving 1M+ users</Text>
          <Text style={styles.description}>• Implemented CI/CD pipelines reducing deployment time by 60%</Text>
          <Text style={styles.description}>• Mentored junior developers and conducted code reviews</Text>
        </View>
        <View style={styles.experienceItem}>
          <Text style={styles.companyTitle}>Full Stack Developer</Text>
          <Text style={styles.period}>Digital Solutions Ltd. • 2020 - 2022</Text>
          <Text style={styles.description}>• Developed and maintained multiple client projects using React and Node.js</Text>
          <Text style={styles.description}>• Improved application performance by 40% through optimization</Text>
          <Text style={styles.description}>• Implemented responsive designs and accessibility features</Text>
        </View>
      </View>

      {/* Skills */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Technical Skills</Text>
        <View style={styles.skills}>
          {['JavaScript/TypeScript', 'React/Next.js', 'Node.js/Express', 'Python/Django',
            'PostgreSQL/MongoDB', 'AWS/Docker', 'GraphQL', 'CI/CD'].map((skill, index) => (
            <Text key={index} style={styles.skill}>{skill}</Text>
          ))}
        </View>
      </View>

      {/* Education */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Education</Text>
        <View style={styles.experienceItem}>
          <Text style={styles.companyTitle}>Master of Science in Computer Science</Text>
          <Text style={styles.period}>Stanford University • 2018 - 2020</Text>
          <Text style={styles.description}>Focus on Software Engineering and Distributed Systems</Text>
        </View>
        <View style={styles.experienceItem}>
          <Text style={styles.companyTitle}>Bachelor of Science in Computer Science</Text>
          <Text style={styles.period}>University of California, Berkeley • 2014 - 2018</Text>
          <Text style={styles.description}>Minor in Mathematics</Text>
        </View>
      </View>

      {/* Certifications */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Certifications</Text>
        <Text style={styles.description}>• AWS Certified Solutions Architect - Amazon Web Services (2023)</Text>
        <Text style={styles.description}>• Professional Scrum Master I - Scrum.org (2022)</Text>
      </View>
    </Page>
  </Document>
);

export default function PDFPage() {
  return (
    <div className="w-full h-screen">
      <PDFViewer style={{ width: '100%', height: '100%' }}>
        <ResumePDF />
      </PDFViewer>
    </div>
  );
}