import logo from './logo.svg';
import './App.css';

function App() {
  return (
		<div style={{ fontFamily: "monospace", backgroundColor: "#fff", color: "#000", maxWidth: 700, margin: "2rem auto", padding: "0 1rem" }}>
      <header style={{ marginBottom: "2rem" }}>
        <h1>Andres Hasfura</h1>
      </header>

      <main>
        <section id="about" style={{ marginBottom: "2rem" }}>
          <h2 style={{ borderBottom: "1px solid #ccc", paddingBottom: "0.25rem" }}>About Me</h2>
          <img
            src="/profile.jpg"
            alt="Andres Hasfura"
            style={{ width: "150px", borderRadius: "50%", marginBottom: "1rem" }}
          />
          <p>
            I'm an AI engineer interested in perception, policy learning, and generative protein design. For the last six years I've worked in self-driving cars at Cruise where I have focused on 3d perception tasks such as keypoint detection for gesture and kinematic estimation, temporal detection for small object recall, semantic segmentation for debris detection.
          </p>

          <p>
            Most of my work has been done in industry and is therefore unfortunately private, but see my google scholar profile for some <a href="https://scholar.google.com/citations?user=D-DUW84AAAAJ&hl=en&oi=ao">(very dated) public papers and patents</a>. For more current work please reach out to me via <a href="https://www.linkedin.com/in/andres-hasfura-25a00061/">linkedin</a>, would love to chat :).
          </p>
        </section>

        <section id="writing" style={{ marginBottom: "2rem" }}>
          <h2 style={{ borderBottom: "1px solid #ccc", paddingBottom: "0.25rem" }}>Writing Samples</h2>
          <ul>
            <li><a href="https://medium.com/@hasfuraa/unified-robot-task-framework-fa829365398c">Unified Robot Task Framework</a></li>
          </ul>
          <p>More coming soon...</p>
        </section>
      </main>

      <footer>
        <p>© 2025 Andres Hasfura</p>
      </footer>
    </div>
  );
}

export default App;
