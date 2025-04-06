import { redirect } from "@/i18n/routing";

export default function Page() {
  redirect({
    href: "/home",
    locale: "en",
  });
  return <div>Redirecting</div>;
}
