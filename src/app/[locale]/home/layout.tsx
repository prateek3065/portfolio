import { ReactNode, Suspense } from "react"; // Ensure ReactNode is imported
import Image from "next/image";
import { routing } from "@/i18n/routing";
import { auth, signIn, signOut } from "@/auth";
type LocaleLayoutProps = {
  params: Promise<{ locale: "en" | "de" | "pl" }>; // Make params a Promise
  children: ReactNode;
};

export function generateStaticParams() {
  const staticParams = routing.locales.map((locale) => ({ locale }));
  return staticParams;
}

export default async function LocaleLayout({ children }: LocaleLayoutProps) {
  return (
    <div className="h-full w-full bg-black relative">
      <Suspense fallback={<Header suspense={true} />}>
        <Header suspense={false} />
      </Suspense>

      {children}
    </div>
  );
}

type HeaderProps = {
  suspense: boolean;
};
async function Header(props: HeaderProps) {
  let session = null;
  if (!props.suspense) session = await auth();
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
      {/* {props.suspense ? <>Loading...</> : null} */}
      {session?.user ? <>{session.user.name}</> : null}
      {!session?.user && !props.suspense ? (
        <button
          onClick={async () => {
            "use server";
            await signIn("google", { redirectTo: "/en/home" });
          }}
          className="hover hover:cursor-pointer p-2 border-2 border-[#8080804a] rounded-xl hover:scale-105 transition-all duration-200 hover:bg-[#181818]"
          style={{ backdropFilter: "blur(18px)" }}
        >
          Sign in with Google
        </button>
      ) : null}
      {session?.user && !props.suspense ? (
        <button
          className="hover hover:cursor-pointer p-2 border-2 border-[#8080804a] rounded-xl hover:scale-105 transition-all duration-200 hover:bg-[#181818]"
          onClick={async () => {
            "use server";
            await signOut({ redirectTo: "/en/home" });
          }}
        >
          Sign Out
        </button>
      ) : null}
    </div>
  );
}
