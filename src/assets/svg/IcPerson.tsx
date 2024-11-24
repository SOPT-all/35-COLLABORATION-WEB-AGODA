import type { SVGProps } from "react";
const SvgIcPerson = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      stroke="#878586"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.1}
      d="M15.36 17a.75.75 0 0 0 .54-.234.82.82 0 0 0 .225-.566v-.997C16.128 12.958 13.082 11.2 10 11.2s-6.125 1.758-6.125 4.003v.997c0 .212.08.416.224.566a.75.75 0 0 0 .542.234zm-2.6-11.117c0 .379-.072.754-.21 1.104-.14.35-.343.667-.599.935s-.56.48-.895.625a2.66 2.66 0 0 1-2.112 0 2.8 2.8 0 0 1-.895-.625 2.9 2.9 0 0 1-.598-.935 3 3 0 0 1-.21-1.104c0-.764.29-1.498.808-2.039A2.7 2.7 0 0 1 10 3a2.7 2.7 0 0 1 1.951.844 2.95 2.95 0 0 1 .808 2.04"
    />
  </svg>
);
export default SvgIcPerson;
