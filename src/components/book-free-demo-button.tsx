"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  onClick?: () => void;
  size?: "sm" | "md";
};

export default function BookFreeDemoButton({ onClick, size = "md" }: Props) {
  const pathname = usePathname();
  const isActive = pathname === "/contact";
  const pad = size === "sm" ? "px-4 py-2" : "px-4 py-2";

  return (
    <Link
      href="/contact"
      onClick={onClick}
      className={`${pad} rounded-lg font-normal whitespace-nowrap transition-colors duration-200 ${
        isActive ? "bg-[#0154D6] text-white border border-[#0154D6]" : "bg-[#0154D6] text-white border border-[#0154D6] hover:opacity-90"
      }`}
      aria-current={isActive ? "page" : undefined}
    >
      Book FREE Demo
    </Link>
  );
}

