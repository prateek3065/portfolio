"use client";
import { Locale } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/navigation";

type FlagProps = {
  locale: Locale;
  url: string;
};
const Flag: React.FC<FlagProps> = (props) => {
  const router = useRouter();
  const handleLocaleChange = () => {
    router.push(`/${props.locale}/home`);
  };
  return (
    <button
      className="locale-button border border-[#8080804a]"
      aria-label="English"
      style={{
        background: "none",
        cursor: "pointer",
        padding: 0,
      }}
      onClick={handleLocaleChange}
    >
      <Image src={props.url} width={20} height={20} alt={props.locale} />
    </button>
  );
};
export default Flag;
