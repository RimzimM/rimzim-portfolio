import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import './hero-polish.css'
import './mockup-polish.css'

const skills = ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Redux', 'Git', 'GitHub', 'REST APIs']

const projects = [
  {
    number: '01',
    title: 'JobFlow',
    subtitle: 'Application Tracker',
    description: 'A focused application tracker for managing job opportunities, status changes and the day-to-day job search in one place.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Local Storage'],
    repo: 'https://github.com/RimzimM/jobflow-application-tracker',
    variant: 'light',
  },
  {
    number: '02',
    title: 'JobFlow AI',
    subtitle: 'AI-Powered Job Tracker',
    description: 'An evolving job-search workspace designed to help discover, save and organize relevant opportunities with practical AI-assisted workflows.',
    tags: ['React', 'TypeScript', 'AI APIs', 'Tailwind CSS'],
    repo: 'https://github.com/RimzimM/jobflow-ai-job-tracker',
    variant: 'dark',
  },
]

function Icon({ name }: { name: 'github' | 'linkedin' | 'mail' }) {
  if (name === 'github') return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.36 6.84 9.71.5.1.68-.22.68-.49 0-.24-.01-1.04-.02-1.89-2.78.62-3.37-1.2-3.37-1.2-.45-1.18-1.11-1.49-1.11-1.49-.91-.63.07-.62.07-.62 1 .08 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.64-1.36-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.18a9.3 9.3 0 0 1 2.5.35c1.91-1.33 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.64 1.03 2.76 0 3.94-2.35 4.8-4.58 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.49A10.25 10.25 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z"/></svg>
  if (name === 'linkedin') return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.2 3.5A1.9 1.9 0 1 1 5.2 7.3a1.9 1.9 0 0 1 0-3.8ZM3.6 8.8h3.2V20H3.6V8.8Zm5.2 0h3.1v1.53h.04c.43-.82 1.49-1.69 3.07-1.69 3.28 0 3.89 2.19 3.89 5.04V20h-3.22v-5.6c0-1.34-.03-3.06-1.84-3.06-1.84 0-2.12 1.46-2.12 2.96V20H8.8V8.8Z"/></svg>
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5h18v14H3V5Zm2 2v.7l7 4.7 7-4.7V7l-7 4.67L5 7Zm14 10V10.1l-7 4.7-7-4.7V17h14Z"/></svg>
}

function App() {
  const [dark, setDark] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light'
  }, [dark])

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <header className="nav-wrap">
        <a className="brand" href="#home" aria-label="Rimzim Maliwal home">Rimzim Maliwal<span>.</span></a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation">☰</button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Primary navigation">
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
        <div className="nav-actions">
          <a className="resume-button" href="https://www.linkedin.com/in/rimzim-maliwal/" target="_blank" rel="noreferrer">View profile ↗</a>
          <button className="theme-button" onClick={() => setDark(!dark)} aria-label="Toggle color theme">{dark ? '☀' : '☾'}</button>
        </div>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-copy">
            <p className="eyebrow handwritten">Hi, I’m Rimzim 👋</p>
            <h1>I build <span>thoughtful</span><br />web experiences.</h1>
            <p className="hero-description">Frontend developer focused on creating modern, responsive and accessible applications using React, TypeScript and JavaScript.</p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">See my work →</a>
              <a className="button secondary" href="#contact">Get in touch</a>
            </div>
            <div className="socials" aria-label="Social links">
              <a href="https://github.com/RimzimM" target="_blank" rel="noreferrer" aria-label="GitHub"><Icon name="github" /></a>
              <a href="https://www.linkedin.com/in/rimzim-maliwal/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon name="linkedin" /></a>
              <a href="mailto:rimzimmaliwal08@gmail.com" aria-label="Email"><Icon name="mail" /></a>
            </div>
          </div>

          <div className="hero-art" aria-label="Abstract frontend developer illustration">
            <div className="hero-grid" />
            <div className="hero-ambient hero-ambient-one" />
            <div className="hero-ambient hero-ambient-two" />
            <p className="art-note handwritten">turning ideas into<br />real products ♡</p>
            <div className="floating-badge handwritten">clean code • better UX</div>

            <div className="hero-window">
              <div className="window-top"><i /><i /><i /><span>portfolio.tsx</span></div>
              <div className="window-main">
                <div className="window-copy">
                  <p className="window-kicker">Frontend focus</p>
                  <h3>React + TypeScript interfaces built with care.</h3>
                  <div className="mini-bars"><span /><span /><span /></div>
                  <div className="tiny-metrics">
                    <div><strong>Accessible</strong><small>inclusive UX</small></div>
                    <div><strong>Responsive</strong><small>mobile-first</small></div>
                    <div><strong>Reusable</strong><small>clean components</small></div>
                    <div><strong>Fast</strong><small>thoughtful polish</small></div>
                  </div>
                </div>
                <div className="code-card" aria-hidden="true">
                  <span className="code-purple">const</span>
                  <span> developer = &#123;</span>
                  <span className="code-indent">name: <b>'Rimzim'</b>,</span>
                  <span className="code-indent">role: <b>'Frontend Developer'</b>,</span>
                  <span className="code-indent">skills: <b>['React', 'TypeScript']</b>,</span>
                  <span className="code-indent">build: <b>'thoughtful web experiences'</b></span>
                  <span>&#125;;</span>
                </div>
              </div>
            </div>

            <div className="floating-chip chip-react">⚛ React</div>
            <div className="floating-chip chip-ts">TS TypeScript</div>
            <div className="floating-chip chip-js">JS JavaScript</div>
            <div className="hero-note-card"><span>Build</span><span>Learn</span><span>Grow</span><span>Repeat</span></div>
            <div className="mini-preview-card" aria-hidden="true"><p>UI system</p><div className="mini-preview-lines"><i /><i /><i /></div></div>
          </div>
          <div className="hero-wave" />
        </section>

        <section className="section projects-section" id="projects">
          <div className="section-heading">
            <div><p className="kicker">Featured projects</p><h2>Things I’ve built</h2></div>
            <a href="https://github.com/RimzimM?tab=repositories" target="_blank" rel="noreferrer">View all projects →</a>
          </div>

          <div className="project-list">
            {projects.map((project, index) => (
              <article className={`project-card ${index % 2 ? 'reverse' : ''}`} key={project.title}>
                <div className="project-copy">
                  <span className="project-number">{project.number}</span>
                  <h3>{project.title}</h3>
                  <h4>{project.subtitle}</h4>
                  <p>{project.description}</p>
                  <div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                  <div className="project-actions">
                    <a className="button primary compact" href={project.repo} target="_blank" rel="noreferrer">View project ↗</a>
                    <a className="button secondary compact" href={project.repo} target="_blank" rel="noreferrer">GitHub</a>
                  </div>
                </div>
                <div className={`project-preview ${project.variant}`}>
                  <div className="browser-bar"><i /><i /><i /></div>
                  <div className="preview-nav">{project.title}<span>Dashboard&nbsp;&nbsp; Applications&nbsp;&nbsp; Insights</span></div>
                  <div className="preview-content">
                    <div className="preview-title">{index === 0 ? 'Track your career journey' : 'Find your next opportunity faster'}</div>
                    <div className="preview-stats"><span>12<small>Applications</small></span><span>4<small>Interviews</small></span><span>3<small>Saved</small></span></div>
                    <div className="preview-lines"><i /><i /><i /><i /></div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section split-section">
          <div className="experience" id="experience">
            <p className="kicker">My experience</p>
            <h2>Where I’ve worked</h2>
            <div className="timeline">
              <article><span className="dot" /><div className="role-head"><div><h3>Tech Mahindra</h3><p>Senior Software Engineer · Frontend</p></div><time>Dec 2023 — Jul 2024</time></div><p>Built and maintained responsive web experiences using React and JavaScript, collaborating with cross-functional teams to deliver reliable product features.</p></article>
              <article><span className="dot" /><div className="role-head"><div><h3>Capgemini</h3><p>Consultant · Frontend</p></div><time>Apr 2022 — Dec 2023</time></div><p>Worked on enterprise React and TypeScript applications, reusable components, performance improvements and UI implementation with design teams.</p></article>
            </div>
          </div>

          <div className="skills" id="skills">
            <p className="kicker">Tech skills</p>
            <h2>Technologies I work with</h2>
            <div className="skill-grid">{skills.map(skill => <span key={skill}>{skill}</span>)}</div>
            <div className="about-card" id="about"><div className="about-icon">✦</div><div><h3>A little more about me</h3><p>I enjoy turning ideas into useful products, writing maintainable frontend code and building interfaces that feel clear and intentional. I’m currently creating new React and TypeScript projects while exploring practical AI integrations.</p></div></div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div><p className="kicker">Say hello</p><h2>Let’s build something great together.</h2><p>I’m currently open to new frontend opportunities in Vancouver and remote roles.</p></div>
          <div className="contact-actions"><a className="button primary" href="mailto:rimzimmaliwal08@gmail.com">Send a message →</a><a href="https://github.com/RimzimM" target="_blank" rel="noreferrer" aria-label="GitHub"><Icon name="github" /></a><a href="https://www.linkedin.com/in/rimzim-maliwal/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon name="linkedin" /></a></div>
        </section>
      </main>

      <footer><span>© 2026 Rimzim Maliwal. Built with React, TypeScript and curiosity.</span><a href="#home">Back to top ↑</a></footer>
    </div>
  )
}

createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>)
