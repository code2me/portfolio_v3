import { useCursor } from "@hooks/useCursor";

const CTA = () => {
  const { setIsHovering } = useCursor();

  return (
    <div className="cta">
      <a
        aria-label="Download Resume"
        href="http://cv.navneet.site/"
        download
        className="btn"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        Download CV
      </a>
      <a
        aria-label="Setup a meeting"
        href="https://calendly.com/navneetbahuguna/meet"
        className="btn btn-primary"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        Let&apos;s Talk
      </a>
    </div>
  );
};

export default CTA;
