"use client";
import { useEffect, useState } from "react";

export type ProfileAlphabetProps = {
  bgColor: string;
  position?: "absolute" | "fixed" | "relative" | "sticky" | "static";
  left?: string;
  right?: string;
  textColor?: string;
  fontSize?: string;
  zIndex?: number;
  paddingTop?: string;
  alphabet:
    | "A"
    | "B"
    | "C"
    | "D"
    | "E"
    | "F"
    | "G"
    | "H"
    | "I"
    | "J"
    | "K"
    | "L"
    | "M"
    | "N"
    | "O"
    | "P"
    | "Q"
    | "R"
    | "S"
    | "T"
    | "U"
    | "V"
    | "W"
    | "X"
    | "Y"
    | "Z"
    | "+";
};
const ProfileAlphabet: React.FC<ProfileAlphabetProps> = (props) => {
  const [left, setLeft] = useState<string>("0px");
  useEffect(() => {
    setTimeout(() => {
      setLeft(props.left ?? "0px");
    }, 300);
  });
  return (
    <div
      className="flex justify-center items-center w-[24px] h-[24px] text-sm rounded-full border-[1px] border-[#222222] transition-all delay-700 ease-in"
      style={{
        backgroundColor: props.bgColor,
        color: props.textColor,
        fontSize: props.fontSize,
        position: props.position ?? "static",
        left: left,
        // right: props.right,
        zIndex: props.zIndex,
        // fontFamily: "fantasy",
        paddingTop: props.paddingTop ?? undefined,
      }}
    >
      {props.alphabet}
    </div>
  );
};
export default ProfileAlphabet;
