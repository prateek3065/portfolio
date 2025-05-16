"use client";
import { pdf } from "@react-pdf/renderer";
import Image from "next/image";
import Link from "next/link";
import { PDFcv } from "./pdf/pdf";
import { useEffect, useState } from "react";

const Page: React.FC = () => {
  const onClick = async () => {
    const blob = await pdf(<PDFcv />).toBlob();
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "cv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  };

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="flex flex-col justify-center h-full">
      {isClient ? <PDFcv /> : null}

      <div className="fixed top-0 left-0">
        <button className="text-white hover:cursor-pointer" onClick={onClick}>
          Download
        </button>
      </div>
    </div>
  );
};

const CV: React.FC = () => {
  return (
    <div className="w-[820px] h-[1414px] overflow-hidden flex bg-white">
      <InfoSegment />
      <DetailsSegment />
    </div>
  );
};

const InfoSegment: React.FC = () => {
  return <div className="w-[17rem] min-w-[17rem] bg-[#233b5f]">left</div>;
};

const DetailsSegment: React.FC = () => {
  return (
    <div className="flex w-full h-full">
      <div className="flex flex-col h-full gap-y-2">
        <DetailHeader />
        <ExperienceDetails />
      </div>
    </div>
  );
};

const DetailHeader: React.FC = () => {
  return (
    <div className="flex pt-2">
      <div className="flex justify-center items-center gap-x-2">
        <div className="w-28 aspect-square rounded-full bg-[#1717176e] overflow-hidden border-2 border-white">
          <Image
            src="/assets/my-photo.jpeg" // no need for `public/`
            alt="bg-img"
            width={400}
            height={0} // use actual height or use `fill`
            priority
          />
        </div>
        <div className="flex flex-col">
          <span className="text-4xl text-[#233b5f] font-bold">
            Prateek Sharma
          </span>
          <span className="text-[#233b5f]" style={{ fontStyle: "italic" }}>
            Senior Software Developer
          </span>
          <span className="text-sm text-[#233b5f]">+6 years Experience</span>
        </div>
      </div>
    </div>
  );
};

const ExperienceDetails: React.FC = () => {
  return (
    <div className="flex flex-col grow">
      <div className="flex px-4 items-center gap-x-2 pb-2">
        <span className="text-sm font-extrabold text-[#233b5f]">
          Experience
        </span>
        <div className="w-full bg-[#233b5f] h-[1px] relative top-[1px]" />
      </div>
      <Particle41 />
      <WebbeyTechnologies />
    </div>
  );
};

const WebbeyTechnologies: React.FC = () => {
  return (
    <div className="flex flex-col h-full px-5 mt-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <div
            className="w-7 h-[28px] aspect-square bg-[#ede8e8] overflow-hidden border-2 border-white rounded-2xl"
            style={{
              boxShadow: "1px 2px 4px -2px black, -1px 0px 4px -3px black",
            }}
          >
            <Image
              className="relative top-[2px]"
              src="/assets/webbey-technologies-logo.svg" // no need for `public/`
              alt="bg-img"
              width={400}
              height={0} // use actual height or use `fill`
              priority
            />
          </div>
          <div className="flex flex-col text-[#233b5f]">
            <span className="text-[#233b5f] font-bold">Webey Technologies</span>
            <span
              className="text-sm text-[#757575]"
              style={{ fontStyle: "italic" }}
            >
              Software Developer
            </span>
          </div>
        </div>
        <div className="flex flex-col text-xs text-[#233b5f]">
          <div>Kolkata</div>
          <div>Oct 2019 - Aug 2021</div>
        </div>
      </div>
      <div className="flex flex-col text-sm grow pt-2 gap-y-1"></div>
    </div>
  );
};

const Particle41: React.FC = () => {
  return (
    <div className="flex flex-col h-full px-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <div
            className="w-7 aspect-square bg-[#1717176e] overflow-hidden border-2 border-white rounded-2xl"
            style={{
              boxShadow: "1px 2px 4px -2px black, -1px 0px 4px -3px black",
            }}
          >
            <Image
              src="/assets/particle41_logo.jpeg" // no need for `public/`
              alt="bg-img"
              width={400}
              height={0} // use actual height or use `fill`
              priority
            />
          </div>
          <div className="flex flex-col text-[#233b5f]">
            <span className="text-[#233b5f] font-bold">Particle41</span>
            <span
              className="text-sm text-[#757575]"
              style={{ fontStyle: "italic" }}
            >
              Frontend Lead
            </span>
          </div>
        </div>
        <div className="flex flex-col text-xs text-[#233b5f]">
          <div>Pune, India</div>
          <div>Aug 2021 - Present</div>
        </div>
      </div>
      <div className="flex flex-col text-sm grow pt-2 gap-y-1">
        <RolesAndResponsibilitiesABA />
        <RolesAndResponsibilitiesPodium />
        <RolesAndResponsibilitiesRepspark />
      </div>
    </div>
  );
};

const ABATechStack = [
  "NextJS (App Router)",
  "ReactJS",
  "Typescript",
  "Redux",
  "TailwindCSS",
  "JEST",
  "React Testing Library",
  "Figma",
  "AWS",
  "Git",
  "Github",
  "Jira",
  "Postman",
  "Javascript",
  "HTML",
  "CSS",
  "Agile Methodology",
  "SEO",
];

const REPSPARK_RESPONSIBILITIES = [
  "Built and optimized B2B e-commerce features like digital catalogs, retailer portals, and virtual showrooms.",
  "Developed reusable feature components with React.js and TypeScript to improve scalability and speed.",
  "Handled backend API optimization for faster order management and real-time inventory updates.",
  "Refactored legacy code to enhance performance, mobile responsiveness, and platform stability.",
  "Improved dynamic search, filtering, and data loading for large product catalogs.",
  "Modernized checkout flows and personalized catalog views for better B2B customer experience.",
];

const RolesAndResponsibilitiesRepspark: React.FC = () => {
  return (
    <>
      <div className="flex gap-x-2 mt-2">
        <div className="w-7 shrink-0"></div>
        <span className=" text-[#233b5f] font-extrabold text-sm">Repspark</span>
      </div>
      {REPSPARK_RESPONSIBILITIES.map((responsibility, key) => {
        return (
          <div key={key} className="flex gap-x-2">
            <div className="w-7 shrink-0">
              <Bullet />
            </div>
            <div className="text-xs text-[#233b5f]">{responsibility}</div>
          </div>
        );
      })}
    </>
  );
};

const PODIUM_RESPONSIBILITIES = [
  "Developed and styled highly responsive audiobook marketplace and online bookstore interfaces for Podium Entertainment, enhancing user engagement through visually rich, book-focused layouts.",
  "Implemented advanced SEO best practices across web platforms, significantly boosting organic discoverability for books and audiobooks.",
  "Designed and managed a heavy-style, animation-rich frontend architecture to deliver immersive browsing experiences for book promotions and sales campaigns.",
  "Built and optimized user dashboards and author portals with a strong focus on performance optimization and cross-browser compatibility.",
  "Collaborated with marketing and product teams to develop sales-driven UI/UX strategies, leading to increased book sales through improved site speed, accessibility, and mobile-first design.",
  "Integrated payment gateway solutions and enhanced search/filter functionalities to streamline user purchasing journeys in the e-commerce platform.",
];

const RolesAndResponsibilitiesPodium: React.FC = () => {
  return (
    <>
      <div className="flex gap-x-2 mt-2">
        <div className="w-7 shrink-0"></div>
        <span className=" text-[#233b5f] font-extrabold text-sm">
          Podium Entertainment
        </span>
      </div>
      {PODIUM_RESPONSIBILITIES.map((responsibility, key) => {
        return (
          <div key={key} className="flex gap-x-2">
            <div className="w-7 shrink-0">
              <Bullet />
            </div>
            <div className="text-xs text-[#233b5f]">{responsibility}</div>
          </div>
        );
      })}
    </>
  );
};

const RolesAndResponsibilitiesABA: React.FC = () => {
  return (
    <>
      <div className="flex gap-x-2">
        <div className="w-7 shrink-0" />
        <div className="flex flex-col">
          <span className=" text-[#233b5f] font-extrabold text-sm">
            Anderson Business Advisors
          </span>
        </div>
      </div>
      <div className="flex gap-x-2">
        <div className="w-7 shrink-0">
          <Bullet />
        </div>
        <div className="text-xs text-[#233b5f]">
          Delivered a scalable SaaS product from scratch, in 12 months,
          generating $1M+ revenue through improved user engagement, conversion
          rates, and{" "}
          <Link
            className="hover:cursor-pointer underline font-extrabold"
            href="https://www.linkedin.com/in/prateek-sharma-891721196/details/recommendations/?detailScreenTabIndex=0"
            target="_blank"
            rel="noopener noreferrer"
          >
            client satisfaction
          </Link>
          .
        </div>
      </div>
      <div className="flex gap-x-2">
        <div className="w-7 shrink-0">
          <Bullet />
        </div>
        <div className="text-xs text-[#233b5f]">
          Led the design and development of a high-conversion client-facing
          marketplace for tax, legal, and consulting services, focusing on UX/UI
          best practices, performance optimization to enhance user experience
          and retention.
        </div>
      </div>
      <div className="flex gap-x-2">
        <div className="w-7 shrink-0">
          <Bullet />
        </div>
        <div className="text-xs text-[#233b5f]">
          Implemented analytics to track user behavior, boosting in sales
          through data- driven UI improvements.
        </div>
      </div>
      <div className="flex gap-x-2">
        <div className="w-7 shrink-0">
          <Bullet />
        </div>
        <div className="text-xs text-[#233b5f]">
          Mentored junior developers, conducting code reviews, best practices,
          and ceremonies to ensure timely feature releases.
        </div>
      </div>
      <div className="flex gap-x-2">
        <div className="w-7 shrink-0">
          <Bullet />
        </div>
        <div className="text-xs text-[#233b5f]">
          Collaborated with stakeholders to align frontend strategy with
          business goals, ensuring seamless cross-browser compatibility.
        </div>
      </div>
      <div className="flex gap-x-2 mt-1">
        <div className="w-7 shrink-0"></div>
        <div className="text-xs text-[#233b5f] gap-x-1 flex flex-wrap">
          <span>Skills</span>

          {ABATechStack.map((tech, index) => {
            return (
              <div key={tech} className="h-4">
                <div className="text-[#757575]">
                  {tech}
                  {index !== ABATechStack.length - 1 ? "," : ""}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

const Bullet: React.FC = () => {
  return (
    <div className="bg-[#4d74ae] w-[6px] h-[6px] rounded-full relative top-[21%] left-[42%]"></div>
  );
};

export default Page;


