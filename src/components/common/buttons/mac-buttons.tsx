import { useMemo } from "react";

const Button: React.FC<{
  type: "close" | "minimize" | "maximize";
}> = (props) => {
  const styles: React.CSSProperties = useMemo(() => {
    switch (props.type) {
      case "close":
        return {
          backgroundColor: "#F36C5F",
        };
      case "minimize":
        return {
          backgroundColor: "#ffbd44",
        };
      case "maximize":
        return {
          backgroundColor: "#00ca4e",
        };
      default:
        return {};
    }
  }, [props]);

  return (
    <div
      className={`rounded-full w-3 h-3 border border-[#727272] hover:cursor-pointer`}
      style={styles}
    ></div>
  );
};
export default Button;
