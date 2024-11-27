import type { SVGProps } from "react";
const SvgProgressingBar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 121 6"
    {...props}
  >
    <rect width={121} height={6} fill="#EFF0F4" rx={3} />
  </svg>
);
export default SvgProgressingBar;
