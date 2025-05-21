import { auth, signIn } from "@/auth";
import PortfolioLogo from "./portfolio-logo/portfolio-logo";
import UserDetails from "./user-details/user-details";
import { getTranslations } from "next-intl/server";
import { Button } from "next-client-utils";

type HeaderProps = {
  suspense: boolean;
  locale: "en" | "de" | "pl";
};
async function Header(props: HeaderProps) {
  const t = await getTranslations();
  let session = null;
  if (!props.suspense) session = await auth();
  return (
    <div className="flex w-full fixed text-white z-20 justify-between items-center px-4 md:px-8 md:py-6 min-h-[68px] md:min-h-[88px]">
      <PortfolioLogo />
      {!session?.user && !props.suspense ? (
        <Button
          onClick={async () => {
            "use server";
            await signIn("google", { redirectTo: `/${props.locale}/home` });
          }}
          className="hover hover:cursor-pointer p-1 px-2 rounded-lg hover:scale-105 transition-all duration-200 bg-white text-black"
          style={{ boxShadow: "black 0px 4px 5px -3px" }}
        >
          {t("COMMON.SIGN_IN")}
        </Button>
      ) : null}
      {session?.user && !props.suspense ? (
        <UserDetails session={session} />
      ) : null}
    </div>
  );
}
export default Header;
