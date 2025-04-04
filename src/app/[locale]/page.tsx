import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations();
  return <div>{t("COMMON.LOADING")}</div>;
}
