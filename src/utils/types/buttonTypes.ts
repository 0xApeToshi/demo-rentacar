import { ButtonHTMLAttributes } from "react";

export interface ButtonItem extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary";
  className?: string;
  icon?: "search" | "show";
}