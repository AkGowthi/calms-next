type VerticalTagProps = {
  label: string;
  top?: number | string; // e.g., 140 or '8rem'
  className?: string;
  bgColorClass?: string; // Tailwind bg utility, defaults to brand blue
};

export default function VerticalTag({
  label,
  top = 270,
  className = "",
  bgColorClass = "bg-[#0154d6]",
}: VerticalTagProps) {
  return (
    <div
      className={`fixed left-0 ${bgColorClass} text-white py-4 px-2 rounded-tr-md rounded-br-md font-semibold z-50 ${className}`}
      style={{
        top: typeof top === "number" ? `${top}px` : top,
        writingMode: "vertical-rl",
        textOrientation: "mixed",
      }}
    >
      {label}
    </div>
  );
}

