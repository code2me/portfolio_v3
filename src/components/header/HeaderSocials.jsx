import {Data} from '@utils/constants'
import {BsLinkedin} from 'react-icons/bs'
import { FaGithub, FaTwitterSquare } from "react-icons/fa";
import {SiLeetcode} from 'react-icons/si'
import { useCursor } from "@hooks/useCursor";

const HeaderSocials = () => {
    const { setIsHovering } = useCursor();

  return (
    <div className="header__socials">
      <a
        aria-label="Linkedin"
        href={Data.LINKEDIN}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <BsLinkedin />
      </a>
      <a
        aria-label="Github"
        href={Data.GITHUB}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <FaGithub />
      </a>
      <a
        aria-label="Leetcode"
        href={Data.LEETCODE}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <SiLeetcode />
      </a>
      <a
        aria-label="Twitter"
        href={Data.TWITTER}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <FaTwitterSquare />
      </a>
    </div>
  );
}

export default HeaderSocials