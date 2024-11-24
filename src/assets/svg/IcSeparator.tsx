import type { SVGProps } from "react";
const SvgIcSeparator = (props: SVGProps<SVGSVGElement>) => (
  //0 0 2 40, M1 0v40 ->0 0 2 60, M1 0v60
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 2 60"
    {...props}
  >
    <path stroke="#DBDADF" strokeWidth={1.5} d="M1 0v60" />
  </svg>
);
export default SvgIcSeparator;
