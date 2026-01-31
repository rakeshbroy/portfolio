import Head from "next/head";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rakesh Kumar | Senior Full Stack Developer</title>
      </Head>

      {/* NAVBAR */}
      <header className={styles.navbar}>
        <div className={styles.logo}>RK</div>

        <nav className={styles.nav}>
          <a className={styles.navLink} href="#skills">Skills</a>
          <a className={styles.navLink} href="#education">Education</a>
          <a className={styles.navLink} href="#projects">Projects</a>
          <a className={styles.navLink} href="#experience">Experience</a>
          <a className={styles.navLink} href="#contact">Contact</a>
        </nav>

        <div className={styles.socials}>
          <a href="https://www.linkedin.com/in/rakeshbroy133/">LinkendIn</a>
          <a href="https://github.com/rakeshbroy">GitHub</a>
        </div>
      </header>

      {/* HERO */}
      <main className={styles.hero}>
        <div className={styles.left}>
          <h1>Rakesh Kumar</h1>

          <p className={styles.subtitle}>
            Full Stack Developer with over <b>5 years</b> of experience in building scalable web applications using technologies such as <b>Angular, React, Next.js</b>,
            <b>Node.js, MySQL, Laravel, PHP</b>, and modern frontend tools. Proficient in DevOps practices, including <b>Docker containerization and Kubernetes orchestration</b>, with a strong
            command of advanced <b>MySQL optimization techniques</b>. Seeking a challenging role in a forward-thinking organization where I can contribute to the development of cloud-native
            applications and DevOps-driven solutions
          </p>

          <a className={styles.cta} href="#skills">Let’s get started →</a>

          <div className={styles.worked}>
            <span>Worked with</span>
            <div className={styles.logos}>
              <div>ACKO</div>
              <div>Apple</div>
              <div>TATA AIG</div>
              <div>Assurant</div>
              <div>Biometric Asia</div>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.avatarGlow}>
            <img src="/profile.jpg" alt="Rakesh Kumar" />
          </div>
        </div>
      </main>

      {/* SKILLS */}
      <section className={styles.skills} id="skills">
        <h2 className={styles.sectionTitle}>Skills</h2>

        <div className={styles.skillGrid}>
          {/* FRONTEND */}
          <div className={styles.flipCard}>
            <div className={styles.flipInner}>
              <div className={styles.flipFront}>
                <h3>Frontend</h3>
                <p>UI, UX & Web</p>
              </div>
              <div className={styles.flipBack}>
                <span>Angular</span>
                <span>React</span>
                <span>Next.js</span>
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>jQuery</span>
              </div>
            </div>
          </div>

          {/* BACKEND */}
          <div className={styles.flipCard}>
            <div className={styles.flipInner}>
              <div className={styles.flipFront}>
                <h3>Backend</h3>
                <p>APIs & Services</p>
              </div>
              <div className={styles.flipBack}>
                <span>Node.js</span>
                <span>Express.js</span>
                <span>Laravel</span>
                <span>PHP</span>
                <span>Java</span>
                <span>Python</span>
              </div>
            </div>
          </div>

          {/* DATABASE */}
          <div className={styles.flipCard}>
            <div className={styles.flipInner}>
              <div className={styles.flipFront}>
                <h3>Databases</h3>
                <p>Design & Performance</p>
              </div>
              <div className={styles.flipBack}>
                <span>MySQL</span>
                <span>Advanced MySQL</span>
                <span>MongoDB</span>
                <span>Oracle</span>
              </div>
            </div>
          </div>

          {/* DEVOPS */}
          <div className={styles.flipCard}>
            <div className={styles.flipInner}>
              <div className={styles.flipFront}>
                <h3>DevOps & Cloud</h3>
                <p>Scale & Deploy</p>
              </div>
              <div className={styles.flipBack}>
                <span>Docker</span>
                <span>Kubernetes</span>
                <span>AWS EC2</span>
                <span>Lambda</span>
                <span>API Gateway</span>
                <span>CI/CD</span>
                <span>RabbitMQ</span>
              </div>
            </div>
          </div>

          {/* TOOLS */}
          <div className={styles.flipCard}>
            <div className={styles.flipInner}>
              <div className={styles.flipFront}>
                <h3>Tools</h3>
                <p>Collaboration</p>
              </div>
              <div className={styles.flipBack}>
                <span>Git</span>
                <span>GitHub</span>
                <span>Bitbucket</span>
                <span>JIRA</span>
                <span>Figma</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className={styles.education} id="education">
        <h2 className={styles.sectionTitle}>Education</h2>

        <div className={styles.educationList}>
          {/* MCA */}
          <div className={styles.educationItem}>
            <div className={styles.educationLeft}>
              <h3>Master of Computer Applications (MCA)</h3>
              <p>Pondicherry University, Puducherry</p>
            </div>

            <div className={styles.educationRight}>
              <span>2021</span>
            </div>
          </div>

          {/* BCA */}
          <div className={styles.educationItem}>
            <div className={styles.educationLeft}>
              <h3>Bachelor of Computer Applications (BCA)</h3>
              <p>Indira Gandhi National Open University (IGNOU), Patna</p>
            </div>

            <div className={styles.educationRight}>
              <span>2018</span>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className={styles.projects} id="projects">
        <h2 className={styles.sectionTitle}>Projects</h2>

        <div className={styles.projectGrid}>
          <div className={styles.projectCard}>
            <h3>ServInsur</h3>
            <p>
              Insurance claim processing platform for Amazon ACKO, Apple, and TATA AIG.
            </p>
            <div className={styles.projectTags}>
              <span>Node.js</span>
              <span>MySQL</span>
              <span>Salesforce</span>
              <span>Microservices</span>
            </div>
          </div>

          <div className={styles.projectCard}>
            <h3>Biometric</h3>
            <p>
              Disability & aging care insurance processing platform for Biometric Asia.
            </p>
            <div className={styles.projectTags}>
              <span>Angular</span>
              <span>Node.js</span>
              <span>MySQL</span>
            </div>
          </div>

          <div className={styles.projectCard}>
            <h3>IntelliBooks</h3>
            <p>
              Inventory and accounting solution for small and medium businesses.
            </p>
            <div className={styles.projectTags}>
              <span>Laravel</span>
              <span>MySQL</span>
              <span>Bootstrap</span>
            </div>
          </div>

          <div className={styles.projectCard}>
            <h3>Folio</h3>
            <p>
              Legal CRM platform to manage clients and case workflows efficiently.
            </p>
            <div className={styles.projectTags}>
              <span>Angular</span>
              <span>Node.js</span>
              <span>REST APIs</span>
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className={styles.certifications} id="certifications">
        <h2 className={styles.sectionTitle}>Certifications</h2>

        <div className={styles.certGrid}>
          <span>Advanced MySQL Topics – Meta (Coursera)</span>
          <span>SQL Advanced – HackerRank</span>
          <span>SQL Intermediate – HackerRank</span>
          <span>The Joy of Computing using Python – NPTEL</span>
          <span>LinkedIn Learning Certifications</span>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className={styles.experience} id ="experience">
        <h2 className={styles.sectionTitle}>Experience</h2>

        <div className={styles.timeline}>
          <div className={styles.timelineItem}>
            <div className={styles.dot}></div>
            <div className={styles.content}>
              <h3>SDE-II · TechFour Engineering Solutions</h3>
              <span>Jul 2022 – Present · New Delhi</span>
              <ul>
                <li>Salesforce (SFDC) integrations</li>
                <li>Node.js & MySQL backend services</li>
                <li>Workflow automation</li>
              </ul>
            </div>
          </div>

          <div className={styles.timelineItem}>
            <div className={styles.dot}></div>
            <div className={styles.content}>
              <h3>SDE-I · Jai Infoway Pvt. Ltd.</h3>
              <span>Dec 2021 – Jun 2022 · Ranchi</span>
              <ul>
                <li>Angular & Angular Material UI</li>
                <li>REST APIs using Node.js</li>
                <li>Google Fit API integration</li>
              </ul>
            </div>
          </div>

          <div className={styles.timelineItem}>
            <div className={styles.dot}></div>
            <div className={styles.content}>
              <h3>Junior Software Engineer · Aeon Logiciel</h3>
              <span>Jan 2021 – Dec 2021 · Pune</span>
              <ul>
                <li>Dynamic form builder</li>
                <li>MySQL schema & APIs</li>
                <li>Razorpay integration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className={styles.contact} id="contact">
        <h2 className={styles.contactTitle}>Let’s Work Together</h2>

        <p className={styles.contactText}>
          I’m open to full-time roles, freelance projects, and challenging
          opportunities in full-stack, cloud-native, and DevOps-driven systems.
        </p>

        <div className={styles.contactActions}>
          {/* Resume Download */}
          <a
            href="/Rakesh_Kumar_Resume.pdf"
            download
            className={styles.resumeButton}
          >
            Download Resume
          </a>

          {/* Email */}
          <a
            href="mailto:rkrakesh133@gmail.com"
            className={styles.contactLink}
          >
            rkrakesh133@gmail.com
          </a>
        </div>

        <div className={styles.contactSocials}>
          <a href="https://www.linkedin.com/in/rakeshbroy133/" target="_blank">
            LinkedIn
          </a>
          <a href="https://github.com/rakeshbroy" target="_blank">
            GitHub
          </a>
          <a href="https://leetcode.com/u/rkrakesh133/" target="_blank">
            LeetCode
          </a>
        </div>
      </section>

    </>
  );
}
