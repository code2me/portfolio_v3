import "react-notifications-component/dist/theme.css";
import { ReactNotifications } from "react-notifications-component";
import { useState } from "react";

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
          <Nav />
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
