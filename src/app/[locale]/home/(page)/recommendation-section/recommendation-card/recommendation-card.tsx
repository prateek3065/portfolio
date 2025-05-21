import Link from "next/link";
import Card from "../../my-tech-stack/large-screen-view/common/card/card";
import Image from "next/image";
import LinkedInIcon from "./linkedin-icon/linkedin-icon";

type RecommendationCardProps = {
  imageUrl: string;
  nameSection: React.ReactNode;
  roleSection: React.ReactNode;
  connectionType: React.ReactNode;
  children: React.ReactNode;
  profileLink: string;
};
const RecommendationCard: React.FC<RecommendationCardProps> = (props) => {
  return (
    <Card>
      <div className="flex gap-2 bg-white p-3 px-3 pb-6 rounded-3xl shadow-md max-w-[95vw] lg:max-w-[28rem] opacity-90 relative">
        <div className="flex-shrink-0">
          <div className="hover:scale-[1.04] transition-all duration-300">
            <Link href={props.profileLink} legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                <Image
                  src={props.imageUrl} // Replace with actual path or use next/image remote loader
                  alt="Sarah Dempsey"
                  width={60}
                  height={60}
                  className="rounded-full object-cover"
                />
              </a>
            </Link>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <div className="flex flex-row font-semibold text-sm items-center">
                <Link href={props.profileLink} legacyBehavior>
                  <a target="_blank" rel="noopener noreferrer">
                    <p className="text-black text-base font-extrabold hover:underline">
                      {props.nameSection}
                    </p>
                  </a>
                </Link>
              </div>
              <div className="text-sm text-gray-600">{props.roleSection}</div>
              <div className="text-xs text-gray-400 mt-1">
                {props.connectionType}
              </div>
            </div>
            <div className="flex justify-center">
              <LinkedInIcon width={30} height={30} />
            </div>
          </div>

          <div className="overflow-scroll grow max-h-full max-w-[98%]">
            {props.children}
          </div>
        </div>
      </div>
    </Card>
  );
};
export default RecommendationCard;
