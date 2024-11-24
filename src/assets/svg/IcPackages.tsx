import type { SVGProps } from "react";
const SvgIcPackages = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 22 22"
    {...props}
  >
    <path
      fill="#fff"
      d="M11.732 7.02c2-1 7.5-2.5 6.5-4.5-.501-1-2-1-3.5-.5s-2 1-4-.5-4.5-2-4.5-1c0 .707 3.5 3.5 3.5 4s-1.5 1-3 1-2.5-2-3.5-1.5 1.5 3.5 2.5 4.5 4-.5 6-1.5"
    />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M1 12h8v10H1zm2 2h4v1H3zm4 2H3v3h4zM10 9h11v13H10zm3 4h2v2h-2zm2 3h-2v2h2zm1-3h2v2h-2zm2 3h-2v2h2z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIcPackages;
