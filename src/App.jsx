import "react-notifications-component/dist/theme.css";
import { ReactNotifications } from "react-notifications-component";
import { useState, useEffect } from "react";

import Header from "@components/header/Header";
import Nav from "@components/nav/Nav";
import About from "@components/about/About";
import Experience from "@components/experience/Experience";
import Portfolio from "@components/portfolio/Portfolio";
import Contact from "@components/contact/Contact";
import Footer from "@components/footer/Footer";
import { Cursor } from "@utils/Cursor";
import { useMousePosition } from "@hooks/useMousePosition";
import { CursorProvider } from "@context/cursorContext";

const App = () => {
  const { x, y } = useMousePosition();
  const [isHovering, setIsHovering] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  // Attach a scroll event listener to track the active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "#home",
        "#about",
        "#experience",
        "#portfolio",
        "#contact",
      ];

      // Loop through sections to find the active section based on scroll position
      for (const section of sections) {
        const element = document.querySelector(section);
        if (element && window.scrollY >= element.offsetTop - 200) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <CursorProvider value={{ isHovering, setIsHovering }}>
      <div className="App">
        <div className="containerCursor">
          <div
            style={{
              transform: `translate3d(${x}px, ${y}px, 0)`,
            }}
            className="wrapperCursor"
          >
            <Cursor isHovering={isHovering} />
          </div>
        </div>
        <ReactNotifications />
        <Header />
        <Nav activeNav={activeSection} setActiveNav={setActiveSection} />
        <About />
        <Experience />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </CursorProvider>
  );
};

export default App;
