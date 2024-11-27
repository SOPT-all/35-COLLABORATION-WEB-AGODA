import type { SVGProps } from "react";
const SvgIcCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path stroke="#178D37" strokeWidth={2} d="M4 9.5 8.32 14 16 6" />
  </svg>
);
export default SvgIcCheck;
