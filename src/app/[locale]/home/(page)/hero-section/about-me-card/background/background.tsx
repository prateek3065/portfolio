const Background: React.FC<{
  children: React.ReactNode;
}> = (props) => {
  return (
    <div
      id="bg"
      className="h-[45rem] overflow-hidden w-full max-w-[70rem] border-2 rounded-2xl border-[#8080804a] bg-black absolute top-0"
    >
      <div className="w-full h-full relative">{props.children}</div>
    </div>
  );
};
export default Background;
