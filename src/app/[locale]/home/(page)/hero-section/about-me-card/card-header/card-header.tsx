import Button from "@/common/components/buttons/mac-buttons";
import MiniButton from "@/common/components/buttons/mini-button";
import ProfileAlphabet, {
  ProfileAlphabetProps,
} from "@/common/components/profile-alphabet/profile-alphabet";

const alphabets: Array<ProfileAlphabetProps> = [
  {
    alphabet: "P",
    bgColor: "#d14694",
    position: "relative",
    left: "62px",
    zIndex: 16,
    paddingTop: "7px",
  },
  {
    alphabet: "R",
    bgColor: "#7053ff",
    position: "relative",
    left: "46px",
    zIndex: 17,
    paddingTop: "7px",
  },
  {
    alphabet: "A",
    bgColor: "#e2a11d",
    position: "relative",
    left: "29px",
    zIndex: 18,
    paddingTop: "7px",
  },
  {
    alphabet: "T",
    bgColor: "#409fd4",
    position: "relative",
    left: "14px",
    zIndex: 19,
    paddingTop: "7px",
  },
  {
    alphabet: "+",
    bgColor: "#232323",
    fontSize: "22px",
    textColor: "#808080",
    position: "relative",
    zIndex: 20,
    paddingTop: "6px",
  },
];

const CardHeader: React.FC = () => {
  return (
    <div className="h-[44px] flex justify-between px-4 py-[6px]">
      <div className="flex items-center gap-x-2">
        <Button type="close" />
        <Button type="minimize" />
        <Button type="maximize" />
      </div>
      <div className="gap-x-3 hidden md:flex">
        <MiniButton imageScr="/assets/hero-btn-1.svg" />
        <MiniButton imageScr="/assets/hero-btn-2.svg" />
        <MiniButton imageScr="/assets/hero-btn-3.svg" />
        <MiniButton imageScr="/assets/hero-btn-4.svg" />
      </div>
      <div className="flex items-center gap-x-2 pt-[2px]">
        {alphabets.map((item) => {
          return (
            <ProfileAlphabet
              key={item.alphabet}
              alphabet={item.alphabet}
              bgColor={item.bgColor}
              position={item.position}
              left={item.left}
              zIndex={item.zIndex}
              fontSize={item.fontSize}
              textColor={item.textColor}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CardHeader;
