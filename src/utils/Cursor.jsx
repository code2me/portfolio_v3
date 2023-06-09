import { useSpring, animated } from "@react-spring/web";

export function Cursor({ isHovering }) {

  const props = useSpring({
    from: { strokeWidth: isHovering ? 1 : 40 },
    to: { strokeWidth: isHovering ? 40 : 1 },
  });

  const AnimatedCircle = animated.circle;

  const isMobile = window.innerWidth <= 600;

  if (isMobile) {
    return null;
  }

  return (
    <div className={`cursor-wrapper ${isHovering ? "hovering" : ""}`}>
      <svg
        data-v-a0f090ca=""
        id="cursor"
        width="90"
        height="90"
        xmlns="http://www.w3.org/2000/svg"
      >
        <AnimatedCircle
          data-v-a0f090ca=""
          id="cursor-dot"
          fill="#F5F5F5"
          stroke="#F5F5F5"
          cx="45"
          cy="45"
          r="19"
          data-svg-origin="45 45"
          transform="matrix(1,0,0,1,0,0)"
          style={props}
        ></AnimatedCircle>
        <AnimatedCircle
          data-v-a0f090ca=""
          id="cursor-pin"
          fill="#4db5ff"
          cx="45"
          cy="45"
          r="2"
          data-svg-origin="43 43"
        ></AnimatedCircle>
        <path
          data-v-a0f090ca=""
          id="cursor-shape"
          d="M43.243 35l9.9 9.9-.051.05.05.05-9.9 9.9L39 50.656l5.707-5.708L39 39.243 43.243 35z"
          fill="#4db5ff"
          data-svg-origin="46.07149887084961 44.95000076293945"
          transform="matrix(0,0,0,0,46.07149887084961,44.95000076293945)"
        ></path>
      </svg>
    </div>
  );
}
