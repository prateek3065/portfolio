import { auth, signIn } from "@/auth";
import PortfolioLogo from "./portfolio-logo/portfolio-logo";
import UserDetails from "./user-details/user-details";

type HeaderProps = {
  suspense: boolean;
  locale: "en" | "de" | "pl";
};
async function Header(props: HeaderProps) {
  let session = null;
  if (!props.suspense) session = await auth();
  return (
    <div className="hidden md:flex w-full fixed text-white z-20 justify-between items-center p-8">
      <PortfolioLogo />
      {!session?.user && !props.suspense ? (
        <button
          onClick={async () => {
            "use server";
            await signIn("google", { redirectTo: `/${props.locale}/home` });
          }}
          className="hover hover:cursor-pointer p-2 border-2 border-[#8080804a] rounded-xl hover:scale-105 transition-all duration-200 hover:bg-[#181818]"
          style={{ backdropFilter: "blur(18px)" }}
        >
          Sign in with Google
        </button>
      ) : null}
      {session?.user && !props.suspense ? (
        <UserDetails session={session} />
      ) : null}
    </div>
  );
}
export default Header;
