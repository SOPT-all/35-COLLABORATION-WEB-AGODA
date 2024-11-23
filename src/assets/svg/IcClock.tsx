import type { SVGProps } from "react";
const SvgIcClock = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 18 16"
    {...props}
  >
    <path
      stroke="#1F2427"
      strokeLinecap="round"
      strokeWidth={2}
      d="M3.97 1.613a3.33 3.33 0 0 0-2.357 2.358M14.03 1.613a3.33 3.33 0 0 1 2.358 2.358"
    />
    <path
      fill="#1F2427"
      fillRule="evenodd"
      d="M9 15.667A6.667 6.667 0 1 0 9 2.333a6.667 6.667 0 0 0 0 13.334m.833-10a.833.833 0 1 0-1.666 0v3.125c0 .575.466 1.041 1.041 1.041H11.5a.833.833 0 0 0 0-1.666H9.833z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIcClock;
