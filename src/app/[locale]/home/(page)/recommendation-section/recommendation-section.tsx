import SectionIntroText from "../common/section-intro-text/section-intro-text";
import RecommendationCard from "./recommendation-card/recommendation-card";

const RecommendationSection: React.FC = () => {
  return (
    <section className="text-white w-full flex flex-col justify-center text-3xl">
      <SectionIntroText
        line1="Top Recommendations"
        line2="Endorsements from Industry Leaders."
      />
      <div className="flex-wrap items-center justify-center hidden lg:flex gap-x-2">
        <RecommendationCard
          nameSection="Sarah Dempsey, PMP, ACP, CSPO, ITILv4 ·"
          profileLink="https://www.linkedin.com/in/dempseysarah/"
          roleSection="IT Project Manager"
          connectionType="December 9, 2024, Sarah managed Prateek directly"
          imageUrl="https://media.licdn.com/dms/image/v2/D4E03AQEPbDwiWZay1w/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1727458495023?e=1753315200&v=beta&t=SwCDUjbh86Di8A1leVsXOyJzLK9l8wTcCpb4sBWFsqo"
        >
          <div className="mt-2 text-sm text-gray-800 space-y-3">
            <p>
              I have had the pleasure of working with Prateek on an ongoing long
              term web portal development project. As part of the front end
              development team, Prateek has excelled at providing suggestions
              for product design, collaborating on UI, improving the user
              experience, and offering support and expertise to both internal
              teams and to the client. He openly shares knowledge and experience
              with others and works well within the team, often asking questions
              and sharing ideas.
            </p>
            <p>
              Prateek consistently delivers an exceptional quality of work,
              often surpassing client expectations. He leads stakeholders
              through progressive demos in an informative and concise manner,
              and proactively prepares for meeting questions and stakeholder
              input. Prateek is a knowledgeable and reliable team member and I
              look forward to our continued work together.
            </p>
          </div>
        </RecommendationCard>
        <RecommendationCard
          nameSection="Aaron Videtto"
          profileLink="https://www.linkedin.com/in/aaronvidetto/"
          roleSection="Veteran Product and CX Leader"
          connectionType="December 3, 2024, Aaron was Prateek's client"
          imageUrl="https://media.licdn.com/dms/image/v2/D5603AQG2x6bTrdiigg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1669908987118?e=1753315200&v=beta&t=t0PQqKtahm074rQZgRtxDCNFpNb6RGoZXnJ4kX7c1Ek"
        >
          <div className="mt-2 text-sm text-gray-800 space-y-3">
            <p>
              I have had the pleasure of working with Prateek over the past year
              on two mission-critical software development projects for our
              organization aimed at improving client experience and retention as
              well as creating new revenue sources and EBITDA contributions.
            </p>
            <p>
              In the middle of working on our main project, Prateek took on a
              leadership role in delivering a new side project that was asked to
              be delivered by our executive team. We did not have a lot of time
              to plan, design, and estimate this new project, we just knew we
              needed to get it done and into the market ASAP. With this in mind
              there are a few key areas Prateek has shown excellent skills:
            </p>
            <p>
              Time to Market: Prateek took a brand new idea, a flow chart, and a
              design sketch or two and built an entire web application from the
              ground up in just a few short months, meeting our organizational
              goals.
            </p>
            <p>
              User Interface Design: We needed a number of brand new design
              system components for this project. Prateek took the design
              concepts from our core development project and successfully
              applied them to new components for the new project ensuring the
              end user would not be confused when moving from one feature to
              another.
            </p>
            <p>
              Problem Solving: A sign of a truly successful engineer, in my
              opinion, is that they take the time to understand the business and
              client problems they are being asked to solve, before coding
              begins. Prateek did just this, asked intelligent questions at the
              beginning and throughout the project to ensure what he was
              delivering would actually solve the right problems in the market
              and for the business.
            </p>
            <p>
              Leadership: From the beginning, Prateek took an ownership role on
              this project, even without being asked. He owned the problem, the
              solution definition, the code, and all aspects of the project{"'"}
              s delivery and did so without needing constant help or guidance.
              It was really amazing to see him shine.
            </p>
            <p>
              I would highly recommend Prateek for any software development
              project and am very happy I have had the opportunity to work with
              him.
            </p>
          </div>
        </RecommendationCard>
        <RecommendationCard
          nameSection="Dexter Wang"
          profileLink="https://www.linkedin.com/in/dexterwang/"
          roleSection="Product design @ Particle41. We're design operators embedded directly into lean software teams."
          connectionType="November 27, 2024, Dexter worked with Prateek on the same team."
          imageUrl="https://media.licdn.com/dms/image/v2/D5603AQENPxhSFqLn0A/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1692022297188?e=1753315200&v=beta&t=nc_7zQLqnc0epAfJ7IKgnuGXTGH1hUzvu9O4-u1FbU4"
        >
          <div className="mt-2 text-sm text-gray-800 space-y-3">
            <p>
              It{"'"}s been a pleasure to have Prateek on the front end team to
              build out the interfaces for our client{"'"}s software. Every
              designer wants a front-end person who is problem solving
              presentational interface issues proactively. Prateek is someone
              you know will be super engaged in the effort to make sure your
              designs work in production. He even develops new interaction
              design concepts that we ended up bringing into the product. One of
              his best traits is his flexible personality which makes the
              design-engineering feedback loop very short, and therefore allow
              us to improve things quickly.
            </p>
          </div>
        </RecommendationCard>
      </div>
    </section>
  );
};
export default RecommendationSection;
