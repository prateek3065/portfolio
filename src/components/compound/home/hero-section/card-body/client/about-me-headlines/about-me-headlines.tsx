"use client";
const AboutMeHeadlines: React.FC = () => {
  return (
    <div className="flex flex-col pt-3 gap-y-4">
      <div
        className="text-lg px-4 p-1 rounded-2xl max-w-[310px]"
        style={{ backgroundColor: "rgb(112 83 255)" }}
      >
        Hi, let&lsquo;s build something beautiful.
      </div>
      <div className="text-4xl sm:text-5xl md:text-6xl max-w-[40rem] overflow-hidden ">
        <p>
          Hi, I design frontends that feel like they were always meant to be.
        </p>
        {/* <p>
          Not just polished — purposeful. Fast, flexible, and quietly powerful.
        </p>
        <p>
          I think in systems. I care about flow. How things move, connect, and
          scale — for teams, and for users.
        </p>
        <p>
          Code is my craft, but experience is the goal. What I build lives in
          motion, in moments, in micro-interactions.
        </p>
        <p>
          I’ve led teams and built from zero to a product earning $1M in its
          first year. And I’m just getting started.
        </p> */}
      </div>
    </div>
  );
};

export default AboutMeHeadlines;
