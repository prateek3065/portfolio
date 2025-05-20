import NextJsLogo from "../../../../small-screen-view/next-js-logo/next-js-logo";
import Card from "../../../common/card/card";

const NextJs: React.FC = () => {
  return (
    <Card>
      <div className="flex flex-col p-4 pb-6 gap-y-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={270}
          height={380}
          className="pt-4"
        >
          <g mask="url(#a)" transform="scale(.35556)">
            <circle cx="370" cy="370" r="370" data-circle="true" />
            <path
              fill="url(#b)"
              d="M149.508 157.52 69.142 54H54v71.97h12.114V69.384l73.885 95.461a90 90 0 0 0 9.509-7.325"
              transform="scale(3.8)"
            />
            <path
              fill="url(#c)"
              d="M115 54h12v72h-12z"
              transform="scale(3.8)"
            />
          </g>
          <defs>
            <linearGradient
              id="b"
              x1="109"
              x2="144.5"
              y1="116.5"
              y2="160.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff" />
              <stop offset="1" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="c"
              x1="121"
              x2="120.799"
              y1="54"
              y2="106.875"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff" />
              <stop offset="1" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <NextJsLogo />
      </div>
    </Card>
  );
};
export default NextJs;
