import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "id"],
  defaultLocale: "en",
});

export type Locale = (typeof routing.locales)[number];

export const { Link, useRouter, usePathname, redirect } =
  createSharedPathnamesNavigation(routing);
