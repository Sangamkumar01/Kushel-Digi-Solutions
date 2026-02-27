import "../styles/TechStack.css";

export default function TechStack() {
  const technologies = [
    { name: "React", logo: "⚛️" },
    { name: "Flutter", logo: "🦋" },
    { name: "Kotlin", logo: "🔷" },
    { name: "WordPress", logo: "🅆" },
    { name: "PHP", logo: "🐘" },
    { name: "Laravel", logo: "🔺" },
    { name: "Android", logo: "🤖" },
    { name: "Arrow", logo: "➜" },
    { name: "Apple", logo: "🍎" },
  ];

  return (
    <section className="tech-section">
      <div className="tech-container">

        <div className="tech-header">
          <h2>WE USE THIS PLATFORM</h2>
        </div>

        <div className="tech-grid">
          {technologies.map((tech, index) => (
            <div key={index} className="tech-card">
              <span className="tech-icon">{tech.logo}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}