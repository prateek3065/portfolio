type CardProps = {
  children: React.ReactNode;
  borderRadius?: `${number}px` | `${number}rem`;
};

const Card: React.FC<CardProps> = (props) => {
  const { borderRadius = "2rem" } = props;
  return (
    <div className="block" style={{ perspective: 100000 }}>
      <div
        className="p-[1px] overflow-hidden"
        style={{
          background:
            "linear-gradient(to right bottom, rgb(86 86 86 / 56%), rgb(0, 0, 0))",
          borderRadius: borderRadius,
        }}
      >
        <div
          className="h-full w-full bg-black p-2"
          style={{
            background:
              "linear-gradient(to right bottom, rgb(24 24 24), rgb(10 10 10))",
            borderRadius: borderRadius,
          }}
        >
          {props.children}
        </div>
      </div>
    </div>
  );
};
export default Card;
