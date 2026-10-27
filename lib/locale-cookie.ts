import { localeCookie } from "@/i18n/config";

export function persistLocale(locale: string) {
  document.cookie = `${localeCookie}=${locale};path=/;max-age=31536000;samesite=lax`;
}
