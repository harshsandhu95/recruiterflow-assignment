import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { ZodIssue } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDateTime(isoString: string, locale = "en-US") {
  const date = new Date(isoString);

  const dateString = date.toLocaleDateString(locale, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  const timeString = date.toLocaleTimeString(locale, {
    minute: "2-digit",
    hour: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  const dayString = date.toLocaleDateString(locale, { weekday: "long" });

  return {
    date: dateString,
    time: timeString,
    day: dayString,
  };
}

export function capitalise(str: string) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function convertErrors(errors: ZodIssue[]) {
  return errors.map((error) => ({
    path: error.path.join("."),
    message: error.message,
  }));
}
