import { ReactNode } from "react"; // Ensure ReactNode is imported
import Image from "next/image";
import Button from "@/components/common/buttons/button";
type LocaleLayoutProps = {
  params: Promise<{ locale: "en" | "de" | "pl" }>; // Make params a Promise
  children: ReactNode;
};

export async function generateStaticParams() {
  return [
    { locale: "en" },
    { locale: "de" },
    { locale: "pl" },
    // Add all locales you support
  ];
}

export default async function LocaleLayout({ children }: LocaleLayoutProps) {
  return (
    <div className="h-full w-full bg-black relative">
      <Header />
      {children}
    </div>
  );
}

const Header: React.FC = () => {
  return (
    <div className="w-full fixed flex text-white z-20 justify-between items-center p-8">
      <div className="flex gap-x-2">
        <Image
          src="/assets/app-logo.svg"
          alt="logo"
          className="w-5 h-auto"
          width={10}
          height={0}
        />
        {/* <img src="/assets/app-logo.svg" alt="App Logo" /> */}
        <div className="text-xl pb-[3px] font-extrabold">prateek_sharma</div>
      </div>

      <Button>Lets Talk</Button>
    </div>
  );
};
