"use client";

type WithOnScrollRetardationProps = {
  children: React.ReactNode;
};
const WithOnScrollRetardation: React.FC<WithOnScrollRetardationProps> = (
  props
) => {
  return <div style={{ position: "relative" }}>{props.children}</div>;
};
export default WithOnScrollRetardation;
