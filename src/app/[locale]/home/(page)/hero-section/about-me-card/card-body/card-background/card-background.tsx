const CardBackground: React.FC = () => {
  return (
    <div className="absolute top-0 w-full h-full p-[10px] overflow-hidden">
      <div
        className="w-full h-full rounded-lg"
        style={{
          background: "linear-gradient(to bottom right, #1d1d1d, #000000)",
        }}
      ></div>
    </div>
  );
};
export default CardBackground;
