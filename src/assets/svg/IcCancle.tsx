import type { SVGProps } from "react";
const SvgIcCancle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      stroke="#939097"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m3 3 14.5 14m0-14L3 17"
    />
  </svg>
);
export default SvgIcCancle;
