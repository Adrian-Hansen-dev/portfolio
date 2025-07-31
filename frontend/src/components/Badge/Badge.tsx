import { BadgeProps } from "./types.tsx";

function Badge({ label }: BadgeProps) {
  return (
    <span className="shadow-2xs inline-flex items-center gap-x-1.5 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-800">
      {label}
    </span>
  );
}

export default Badge;
