import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Merge Tailwind classes safely
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Phone Formatter
export function formatPhone(phone: string) {
  return phone.replace(
    /(\d{4})(\d{3})(\d{4})/,
    "$1 $2 $3"
  );
}

// WhatsApp URL
export function whatsappLink(number: string) {
  return `https://wa.me/${number.replace(/\D/g, "")}`;
}

// Telephone Link
export function phoneLink(number: string) {
  return `tel:${number.replace(/\D/g, "")}`;
}

// Email Link
export function emailLink(email: string) {
  return `mailto:${email}`;
}

// Google Maps Search
export function googleMap(address: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address
  )}`;
}

// Slug Generator
export function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

// Capitalize First Letter
export function capitalize(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

// Reading Time
export function readingTime(text: string) {
  const words = text.split(/\s+/).length;

  return `${Math.ceil(words / 200)} min read`;
}

// Short Text
export function truncate(
  text: string,
  length = 150
) {
  if (text.length <= length) return text;

  return text.slice(0, length) + "...";
}

// Random ID
export function generateId(length = 10) {
  return Math.random()
    .toString(36)
    .substring(2, length + 2);
}