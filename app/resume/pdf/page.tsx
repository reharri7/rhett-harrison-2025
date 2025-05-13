'use client';

import {Document, Page, StyleSheet, Text, View} from '@react-pdf/renderer';

import dynamic from 'next/dynamic';

const PDFViewer = dynamic(() => import('@react-pdf/renderer').then(mod => mod.PDFViewer), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

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
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    marginBottom: 10,
    color: '#2563eb',
  },
  experienceItem: {
    marginBottom: 12,
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
        <Text style={styles.name}>Rhett Harrison</Text>
        <Text style={styles.title}>Senior Full Stack Software Engineer</Text>
        <Text style={styles.contact}>
          Sonora, CA • rhettharrison.dev@gmail.com • (209) 605-1908
        </Text>
      </View>

      {/* Summary */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Professional Summary</Text>
        <Text style={styles.description}>
          Full Stack Software Engineer with three years of experience designing, developing, and
          maintaining innovative products across government and agriculture industries. My expertise
          spans various platforms and programming languages, enabling me to deliver high-quality
          solutions. I excel in self-management during independent projects, thrive in collaborative
          team settings, and have mentored multiple software engineers, fostering professional
          growth. Passionate about leveraging technology to solve complex problems.
        </Text>
      </View>

      {/* Experience */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Experience</Text>
        <View style={styles.experienceItem}>
          <Text style={styles.companyTitle}>Senior Full Stack Software Engineer</Text>
          <Text style={styles.period}>Axiallon Software • 2021 - Present</Text>
          <Text style={styles.description}>
            • Maintain a goal-tracking behavior system used for 2,000 youth to improve
            self-regulation, attitude, engagement with peers, and social connections.
          </Text>
          <Text style={styles.description}>
            • Cooperated with a team of youth leaders to create a management system used to track
            200 closely monitored youth and behavior daily.
          </Text>
          <Text style={styles.description}>
            • Designed and implemented an incentive reward system for youth leaders to operate with
            paired youth to encourage improvement in behavior.
          </Text>
          <Text style={styles.description}>
            • Created a cross-platform mobile application using Angular and Ionic to serve as a
            social network platform for over 3,000 agriculture enthusiasts.
          </Text>
        </View>
      </View>

      {/* Skills */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Technical Skills</Text>
        <View style={styles.skills}>
          {[
            'JavaScript/TypeScript',
            'Angular',
            'React/Next.js',
            'SpringBoot',
            'Java',
            'Hibernate',
            'OracleDB',
            'PostgreSQL',
          ].map((skill, index) => (
            <Text key={index} style={styles.skill}>
              {skill}
            </Text>
          ))}
        </View>
      </View>

      {/* Education */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Education</Text>
        <View style={styles.experienceItem}>
          <Text style={styles.companyTitle}>Bachelor&apos;s of Software Engineering</Text>
          <Text style={styles.period}>Arizona State University • 2019 - Present</Text>
          <Text style={styles.description}>
            • Maintaining a cumulative GPA of 3.44 on a 4.0 scale
          </Text>
          <Text style={styles.description}>
            • Completed a comprehensive curriculum covering programming, software design and
            development, database systems, data structures, algorithms, and computer architecture.
          </Text>
          <Text style={styles.description}>
            • Acquired hands-on experience through various software development projects, working in
            teams, and applying Agile methodologies.
          </Text>
          <Text style={styles.description}>
            • Developed expertise in multiple programming languages including Java and TypeScript
          </Text>
        </View>
      </View>

      {/*/!* Certifications *!/*/}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Certifications</Text>
        <Text style={styles.description}>• Complete Angular Developer, Zero to Mastery</Text>
        {/*<Text style={styles.description}>• Complete SQL + Databases, Zero to Mastery</Text>*/}
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
