import type { SVGProps } from "react";
const SvgIcSim = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <mask
      id="ic_sim_svg__a"
      width={16}
      height={18}
      x={2}
      y={1}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <path
        fill="#fff"
        stroke="#fff"
        strokeLinejoin="round"
        strokeWidth={1.6}
        d="M3.602 2h9.955l2.845 2.91V18h-12.8z"
      />
      <path
        fill="#000"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={1.6}
        d="M13.602 10.8h-7.2v4h7.2z"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.6}
        d="M6.402 5.2v2.4m2.4-2.4v2.4m2.4-2.4v2.4"
      />
    </mask>
    <g mask="url(#ic_sim_svg__a)">
      <path fill="#fff" d="M.4.4h19.2v19.2H.4z" />
    </g>
  </svg>
);
export default SvgIcSim;
