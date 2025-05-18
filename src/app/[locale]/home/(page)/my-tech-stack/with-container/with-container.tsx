const WithContainer: React.FC<{
  children: React.ReactNode;
  height?: string;
  width?: string;
}> = (props) => {
  return (
    <div
      className="rounded-2xl p-4"
      style={{
        background: "linear-gradient(to bottom, #191919, #0d0d0d, #000000)",
        border: "1px solid #1a1a1a",
        height: props.height,
        width: props.width,
        maxWidth: !props.width ? "fit-content" : undefined,
      }}
    >
      {props.children}
    </div>
  );
};
export default WithContainer;
