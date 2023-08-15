import React from "react";

function Blob() {
  return (
    <svg
      viewBox="0 0 1000 1000"
      xmlns="http://www.w3.org/2000/svg"
      className="scale-150 absolute top-0 right-0 left-0 bottom-0 m-auto"
    >
      <defs>
        <radialGradient id="c" r="100%" cx="55%" cy="56%">
          <stop offset="0%" stop-color="#52ACFF" />
          <stop offset="100%" stop-color="#FFE32C" />
        </radialGradient>
        <clipPath id="b">
          <path
            fill="currentColor"
            d="M865 637.5q13 137.5-124 160t-215.5-56Q447 663 374 654t-165.5-81.5q-92.5-72.5-46-178t155-114.5Q426 271 518 216.5t181.5 9.5q89.5 64 121 169T865 637.5Z"
          />
        </clipPath>
        <filter id="a" x="-50vw" y="-50vh" width="100vw" height="100vh">
          <feFlood flood-color="#fff" result="neutral-gray" />
          <feTurbulence
            type="fractalNoise"
            baseFrequency="2.5"
            numOctaves="100"
            stitchTiles="stitch"
            result="noise"
          />
          <feColorMatrix
            in="noise"
            type="saturate"
            values="0"
            result="destaturatedNoise"
          />
          <feComponentTransfer in="desaturatedNoise" result="theNoise">
            <feFuncA type="table" tableValues="0 0 0.3 0" />
          </feComponentTransfer>
          <feBlend
            in="SourceGraphic"
            in2="theNoise"
            mode="soft-light"
            result="noisy-image"
          />
        </filter>
      </defs>
      <g filter="url(#a)" clip-path="url(#b)">
        <path
          fill="url(#c)"
          d="M865 637.5q13 137.5-124 160t-215.5-56Q447 663 374 654t-165.5-81.5q-92.5-72.5-46-178t155-114.5Q426 271 518 216.5t181.5 9.5q89.5 64 121 169T865 637.5Z"
        />
      </g>
    </svg>
  );
}

export default Blob;
