import type { SVGProps } from "react";
const SvgEmptyheart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      fill="#fff"
      stroke="#406CEA"
      strokeWidth={1.2}
      d="M9.196 16.248h-.001c-2.158-1.957-3.9-3.54-5.11-5.022-1.204-1.472-1.818-2.77-1.818-4.143C2.267 4.84 4.014 3.1 6.25 3.1c1.269 0 2.496.594 3.295 1.524l.455.53.455-.53A4.41 4.41 0 0 1 13.75 3.1c2.236 0 3.983 1.74 3.983 3.983 0 1.374-.614 2.671-1.817 4.143-1.21 1.481-2.953 3.065-5.11 5.021l-.001.001-.805.732z"
    />
  </svg>
);
export default SvgEmptyheart;
