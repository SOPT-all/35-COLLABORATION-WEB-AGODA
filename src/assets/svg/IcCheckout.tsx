import type { SVGProps } from "react";
const SvgIcCheckout = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.05}
      d="M13.85 3v1.4M5.45 3v1.4M8.985 17c-2.821 0-4.232 0-5.109-.948C3 15.105 3 13.58 3 10.53v-.359c0-3.05 0-4.575.876-5.523C4.753 3.7 6.164 3.7 8.985 3.7h1.33c2.821 0 4.232 0 5.109.948.825.892.873 2.296.876 5.002v1.05M3.35 7.2h12.6M16.6 13.85H11m5.6 0c0-.49-1.396-1.406-1.75-1.75m1.75 1.75c0 .49-1.396 1.406-1.75 1.75"
    />
  </svg>
);
export default SvgIcCheckout;
