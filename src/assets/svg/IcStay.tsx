import type { SVGProps } from "react";
const SvgIcStay = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 22 22"
    {...props}
  >
    <path fill="#406CEA" d="M1 8h3v13H1z" />
    <path
      fill="#406CEA"
      fillRule="evenodd"
      d="M5 21V1l12.5 1.538v8.206H21V21h-7.5v-6.154h-5V21zM7.5 4h3v3h-3zm3 4h-3v3h3zm1.3-4h3v3h-3zm3 4h-3v3h3z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIcStay;
