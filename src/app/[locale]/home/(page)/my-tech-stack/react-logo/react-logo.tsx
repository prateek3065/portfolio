const ReactLogo: React.FC = () => {
  return (
    <div className="flex gap-x-3 items-center">
      <svg
        width="100%"
        height="100%"
        viewBox="-10.5 -9.45 21 18.9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-sm me-0 w-10 h-10 flex origin-center transition-all ease-in-out text-[#58c4dc]"
      >
        <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
        <g stroke="currentColor" strokeWidth="1" fill="none">
          <ellipse rx="10" ry="4.5"></ellipse>
          <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
          <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
        </g>
      </svg>
      <span className="text-4xl">React JS</span>
    </div>
  );
};
export default ReactLogo;
