import { ReactNode } from "react"; // Ensure ReactNode is imported
import Image from "next/image";
import Button from "@/components/common/buttons/button";
import { routing } from "@/i18n/routing";
type LocaleLayoutProps = {
  params: Promise<{ locale: "en" | "de" | "pl" }>; // Make params a Promise
  children: ReactNode;
};

export function generateStaticParams() {
  const staticParams = routing.locales.map((locale) => ({ locale }));
  console.log("generateStaticParams2", staticParams);
  return staticParams;
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const data = await params;
  console.log("LocaleLayout", data);
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
