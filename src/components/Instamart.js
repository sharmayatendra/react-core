import { useState } from "react";
import Section from "./Section";

const Instamart = () => {
  const [activeSection, setActiveSection] = useState("");
  return (
    <div className="mt-20 p-4">
      <Section
        name="team"
        activeSection={activeSection === "team"}
        onClick={() =>
          activeSection === "team"
            ? setActiveSection("")
            : setActiveSection("team")
        }
      />
      <Section
        name="about instamart"
        activeSection={activeSection === "about"}
        onClick={() =>
          activeSection === "about"
            ? setActiveSection("")
            : setActiveSection("about")
        }
      />
      <Section
        name="careers"
        activeSection={activeSection === "careers"}
        onClick={() =>
          activeSection === "careers"
            ? setActiveSection("")
            : setActiveSection("careers")
        }
      />
      <Section
        name="help instamart"
        activeSection={activeSection === "help"}
        onClick={() =>
          activeSection === "help"
            ? setActiveSection("")
            : setActiveSection("help")
        }
      />
    </div>
  );
};

export default Instamart;
