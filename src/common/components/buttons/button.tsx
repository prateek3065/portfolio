"use client";

import { useState } from "react";

type ButtonProps = {
  children: React.ReactNode;
  styles?: React.CSSProperties;
  className?: string;
  asyncConfig?: {
    onClick: () => Promise<void>;
    onSuccess: () => void;
    onFailure: () => void;
    onEnd: () => void;
    loader?: React.ReactNode;
  };
  onClick?: () => void;
};
const Button: React.FC<ButtonProps> = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const handleAsyncMode = (asyncConfig: ButtonProps["asyncConfig"]) => {
    setIsLoading(true);
    asyncConfig
      ?.onClick()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        asyncConfig.onFailure();
      })
      .finally(() => {
        setIsLoading(false);
        asyncConfig.onEnd();
      });
  };

  const handleSyncMode = () => {
    props.onClick?.();
  };

  const handleClick = () => {
    if (props.asyncConfig) handleAsyncMode(props.asyncConfig);
    else handleSyncMode();
  };

  return (
    <button
      className={`${
        props.className ??
        "bg-white min-h-8 min-w-20 text-black rounded-lg hover:cursor-pointer hover:bg-[#faffba] hover:scale-[1.05] transition-all delay-100 ease-in"
      }`}
      onClick={handleClick}
    >
      {props.asyncConfig ? (
        <>
          {isLoading ? (
            <>{props.asyncConfig.loader ?? "Loading..."}</>
          ) : (
            props.children
          )}
        </>
      ) : (
        props.children
      )}
    </button>
  );
};

export default Button;
