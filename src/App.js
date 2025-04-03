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
            I'm an AI engineer interested in perception, policy learning, and generative protein design. Most of my work has been done in industry and is therefore unfortunately private, but here are some <a href="https://patents.google.com/?inventor=andres+hasfura&oq=andres+hasfura">patents</a> and (very dated) <a href="https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=andres+hasfura&btnG=">papers</a>. For more current work please reach out to me via <a href="https://www.linkedin.com/in/andres-hasfura-25a00061/">linkedin</a>.
          </p>
        </section>

        <section id="writing" style={{ marginBottom: "2rem" }}>
          <h2 style={{ borderBottom: "1px solid #ccc", paddingBottom: "0.25rem" }}>Writing Samples</h2>
          <p>Coming soon!</p>
        </section>
      </main>

      <footer>
        <p>© 2025 Andres Hasfura</p>
      </footer>
    </div>
  );
}

export default App;
