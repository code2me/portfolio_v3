import React, { useEffect, useRef } from "react";
import { useSpring, animated } from "@react-spring/web";

const Blob = () => {
  const blob1 =
    "M187.3 -177.8C234.1 -140.5 257.6 -70.2 240.1 -17.4C222.7 35.4 164.4 70.7 117.5 110.5C70.7 150.4 35.4 194.7 -6 200.7C-47.4 206.7 -94.8 174.4 -144.8 134.6C-194.8 94.8 -247.4 47.4 -252.6 -5.2C-257.7 -57.7 -215.5 -115.5 -165.5 -152.8C-115.5 -190.2 -57.7 -207.1 6.2 -213.3C70.2 -219.6 140.5 -215.1 187.3 -177.8";
  const blob2 =
    "M166.4 -182.6C191.4 -141.4 170.7 -70.7 163.1 -7.7C155.4 55.4 160.8 110.8 135.8 156.6C110.8 202.4 55.4 238.7 -3.9 242.6C-63.2 246.5 -126.3 218 -163.8 172.2C-201.3 126.3 -213.2 63.2 -210.9 2.2C-208.7 -58.7 -192.4 -117.4 -154.9 -158.5C-117.4 -199.7 -58.7 -223.4 6 -229.4C70.7 -235.4 141.4 -223.8 166.4 -182.6";

  const stop1Ref = useRef();
  const stop2Ref = useRef();

  useEffect(() => {
    const colors = [
      "#ff0000",
      "#ff7300",
      "#fffb00",
      "#48ff00",
      "#00ffd5",
      "#002bff",
      "#7a00ff",
      "#ff00c8",
    ];
    let currentColorIndex = 0;

    const interval = setInterval(() => {
      stop1Ref.current.setAttribute("stop-color", colors[currentColorIndex]);
      stop2Ref.current.setAttribute(
        "stop-color",
        colors[(currentColorIndex + 1) % colors.length]
      );
      currentColorIndex = (currentColorIndex + 1) % colors.length;
    }, 1000); // adjust timing as needed

    return () => clearInterval(interval);
  }, []);

  const blobAnimation = useSpring({
    from: { x: blob1 },
    to: { x: blob2 },
    config: {
      duration: 3000,
    },
    loop: { reverse: true },
  });

  return (
    <svg
      id="visual"
      viewBox="0 0 900 600"
      width="900"
      height="600"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
    >
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop
            ref={stop1Ref}
            offset="0%"
          />
          <stop
            ref={stop2Ref}
            offset="100%"
          />
        </linearGradient>
      </defs>
      <g transform="translate(453.56576541571314 307.12309548997314)">
        <animated.path
          d={blobAnimation.x}
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="2"
        />
      </g>
    </svg>
  );
};

export default Blob;
