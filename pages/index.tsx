import Head from 'next/head'
import Image from 'next/image'
import { asset } from '../utils/asset';

export default function Home() {
  return (
    <>
      <Head>
        <title>Rakesh Kumar | Senior Full Stack Developer</title>
        <meta name="description" content="Senior Full Stack Developer with 5+ years experience in Angular, React, Node.js, DevOps, Docker, Kubernetes" />
      </Head>

      <main style={styles.main}>
        {/* HERO SECTION */}
        <section style={styles.hero}>
          <Image
            src={asset('/profile.jpg')}
            alt="Rakesh Kumar"
            width={140}
            height={140}
            unoptimized
            priority
            style={styles.avatar}
          />
          <h1 style={styles.name}>Rakesh Kumar</h1>
          <h2 style={styles.role}>Senior Full Stack Developer</h2>
          <p style={styles.summary}>
            Full Stack Developer with 5+ years of experience building scalable web applications using Angular, React, Node.js, GraphQL, MySQL, and Laravel. Strong expertise in DevOps, Docker, Kubernetes, and cloud-native solutions.
          </p>
        </section>

        {/* SKILLS */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Skills</h2>
          <ul style={styles.list}>
            <li>Angular, React, Next.js, HTML, CSS, JavaScript 123</li>
            <li>Node.js, PHP, Laravel, GraphQL</li>
            <li>MySQL, MongoDB, Oracle</li>
            <li>Docker, Kubernetes, AWS, CI/CD</li>
            <li>Git, GitHub, JIRA, Figma</li>
          </ul>
        </section>

        {/* EXPERIENCE */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Experience</h2>
          <p><strong>SDE-II – Techfour Engineering Solutions</strong> (Jul 2022 – Present)</p>
          <ul style={styles.list}>
            <li>Integrated third-party systems like Salesforce (SFDC)</li>
            <li>Built scalable backend services using Node.js & MySQL</li>
            <li>Automated workflows reducing manual effort</li>
          </ul>

          <p><strong>SDE-I – Jai Infoway Pvt Ltd</strong> (Dec 2021 – Jun 2022)</p>
          <ul style={styles.list}>
            <li>Developed Angular components and REST APIs</li>
            <li>Worked with Google Fit API and GCP</li>
          </ul>

          <p><strong>Junior Software Engineer – Aeon Logiciel</strong> (Jan 2021 – Dec 2021)</p>
          <ul style={styles.list}>
            <li>Built dynamic form builder using Angular</li>
            <li>Integrated Razorpay payment gateway</li>
          </ul>
        </section>

        {/* PROJECTS */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Projects</h2>
          <ul style={styles.list}>
            <li>ServInsur – Insurance claim platform (ACKO, Apple, TATA AIG)</li>
            <li>Biometric – Insurance processing platform</li>
            <li>IntelliBooks – Inventory & Accounting solution</li>
            <li>Folio – Digital platform for law firms</li>
          </ul>
        </section>

        {/* CONTACT */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Contact</h2>
          <p>Email: rkrakesh133@gmail.com</p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/rakeshbroy133/" style={styles.link}>View Profile</a></p>
          <p>GitHub: <a href="https://github.com/rakeshbroy" style={styles.link}>rakeshbroy</a></p>
        </section>
      </main>
    </>
  )
}

const styles: any = {
  main: {
    backgroundColor: '#0b1120',
    color: '#e5e7eb',
    fontFamily: 'Arial, sans-serif',
    padding: '40px'
  },
  hero: {
    textAlign: 'center',
    marginBottom: '60px'
  },
  avatar: {
    width: '140px',
    height: '140px',
    borderRadius: '50%',
    border: '4px solid #3b82f6',
    marginBottom: '20px'
  },
  name: { fontSize: '36px', margin: 0 },
  role: { color: '#3b82f6', marginTop: '8px' },
  summary: { maxWidth: '700px', margin: '20px auto', lineHeight: 1.6 },
  section: { maxWidth: '900px', margin: '0 auto 50px' },
  sectionTitle: { color: '#3b82f6', marginBottom: '16px' },
  list: { lineHeight: 1.8 },
  link: { color: '#3b82f6' }
}
