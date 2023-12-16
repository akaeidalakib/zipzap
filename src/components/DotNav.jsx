import "../styles/Nav.css";

export function DotNav({ activeSection }) {
  const sections = [
    "home",
    "features",
    "partners",
    "guild",
    "nfttypes",
    "tutorial",
    "about",
    "timeline",
  ];

  const scrollToSection = (section, paddingTop = 200) => {
    const sectionEl = document.getElementById(section);
    if (sectionEl) {
      const topPosition =
        sectionEl.getBoundingClientRect().top + window.pageYOffset - paddingTop;
      window.scrollTo({ top: topPosition, behavior: "smooth" });
    }
  };

  return (
    <div className="dotstyle dotstyle-stroke">
      <ul>
        {sections.map((section, index) => (
          <li
            key={section}
            className={activeSection === index ? "current" : ""}
          >
            <a
              href={`#${section}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(section);
              }}
            >
              {section}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DotNav;
