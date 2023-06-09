import './nav.css'
import { AiOutlineHome } from "react-icons/ai";
import { BiUserCircle, BiMessageSquareDetail } from "react-icons/bi";
import {BsCodeSlash} from 'react-icons/bs'
import {MdWorkOutline} from 'react-icons/md'
import {useState} from 'react'
import { useCursor } from "@hooks/useCursor";


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
    const { setIsHovering } = useCursor();

  return (
    <nav>
      <a
        aria-label="Home"
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <AiOutlineHome />
      </a>
      <a
        aria-label="About"
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <BiUserCircle />
      </a>
      <a
        aria-label="Experience"
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <MdWorkOutline />
      </a>
      <a
        aria-label="Portfolio"
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <BsCodeSlash />
      </a>
      <a
        aria-label="Contact"
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
}

export default Nav