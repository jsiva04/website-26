import './App.css'

function App() {
  return (
    <div className="app">
      {/* Main Name Header */}
      <div className="name-header">
        <p>JANAHAN</p>
        <p>SIVA</p>
      </div>

      {/* Social Panel */}
      <div className="social-panel">
        <a
          href="https://www.linkedin.com/in/jan-siva"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          aria-label="LinkedIn"
        >
          <img src="/assets/linkedin.svg" alt="LinkedIn" />
        </a>
        <a
          href="https://github.com/jsiva04"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          aria-label="GitHub"
        >
          <img src="/assets/github.svg" alt="GitHub" />
        </a>
        <a
          href="mailto:your.email@example.com"
          className="social-icon"
          aria-label="Email"
        >
          <img src="/assets/email.svg" alt="Email" />
        </a>
      </div>

      {/* Sticky Notes */}
      <div className="sticky-notes">
        <a
          href="https://www.mcmaster.ca/"
          target="_blank"
          rel="noopener noreferrer"
          className="sticky-note note-tron"
        >
          TRON @<br/>MCMASTER
        </a>

        <a
          href="https://en.wikipedia.org/wiki/Toronto"
          target="_blank"
          rel="noopener noreferrer"
          className="sticky-note note-yyz"
        >
          YYZ
        </a>

        <a
          href="#"
          className="sticky-note note-soft-eng"
        >
          SOFT<br/>ENG
        </a>

        <a
          href="#"
          className="sticky-note note-logo"
        >
          <img src="/assets/logo.svg" alt="Logo" />
        </a>
      </div>
    </div>
  )
}

export default App
