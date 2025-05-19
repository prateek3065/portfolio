import { Session } from "next-auth";
import { WithPopup } from "next-client-utils";
import PopUp from "./pop-up/pop-up";
import Image from "next/image";

type UserDetailsProps = {
  session: Session;
};
const UserDetails: React.FC<UserDetailsProps> = (props) => {
  return (
    <WithPopup
      PopUp={PopUp}
      popupProps={{
        email: props.session.user?.email as string,
        name: props.session.user?.name as string,
      }}
      popupAlignments={{
        absolutePosition: "bottom",
        align: "right",
      }}
    >
      <div className="w-10 h-10 flex justify-center items-center rounded-full bg-black border-2 border-[#8080804a] hover:scale-105 transition-all duration-200 hover:cursor-pointer text-xl font-extrabold">
        {props.session.user?.image ? (
          <Image
            className="rounded-full border border-white"
            src={props.session.user.image}
            width={40}
            height={40}
            alt="profile-image"
          />
        ) : (
          props.session.user?.name?.[0]
        )}
      </div>
    </WithPopup>
  );
};
export default UserDetails;
