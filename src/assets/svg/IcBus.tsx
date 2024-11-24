import type { SVGProps } from "react";
const SvgIcBus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      fill="#fff"
      d="M14.736 9.105H5.263V5.158h9.473m-1.184 8.684a1.184 1.184 0 1 1 0-2.368 1.184 1.184 0 0 1 0 2.368m-7.105 0a1.185 1.185 0 1 1 0-2.369 1.185 1.185 0 0 1 0 2.37m-2.763-.79c0 .695.307 1.32.79 1.753v1.406a.79.79 0 0 0 .789.789h.789a.79.79 0 0 0 .79-.79v-.789h6.315v.79a.79.79 0 0 0 .79.789h.79a.79.79 0 0 0 .789-.79v-1.405c.481-.434.79-1.058.79-1.752V5.158C16.315 2.395 13.488 2 9.998 2s-6.315.395-6.315 3.158z"
    />
  </svg>
);
export default SvgIcBus;
