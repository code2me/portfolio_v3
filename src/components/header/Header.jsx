import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import Typical from "react-typical";
import { Data } from "@utils/constants";
import Blob from "./Blob";
import { useCursor } from "@hooks/useCursor";

const Header = () => {
  const { setIsHovering } = useCursor();
  return (
    <header id="home">
      <div className="container header__container">
        <div className="blob-content">
          <div className="blob">
            <Blob />
          </div>
          <h5>Hello I&apos;m</h5>
          <h1
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            Navneet Bahuguna
          </h1>
          <h4 className="text-light">
            <Typical loop={Infinity} wrapper="b" steps={Data.stepsArr} />
          </h4>
          <CTA />
        </div>
        <HeaderSocials />

        <a
          href="#contact"
          className="scroll__down"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
