import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import LocaleSwitcher from "@/components/locale/LocaleSwithcer";

export default function HomePage() {
  const t = useTranslations("Navigation");
  return (
    <div>
      <h1>{t("home")}</h1>
      <Link href="/about">{t("Posts")}</Link>
      <LocaleSwitcher />
    </div>
  );
}
