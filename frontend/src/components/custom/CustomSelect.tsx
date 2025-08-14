import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

interface CustomSelectProps {
  label?: string;
  icon?: React.ReactNode;
  value: string;
  options: { label: string; value: string }[];
  onChange: (selected: string) => void;
}

export default function CustomSelect({
  label,
  icon,
  value,
  options,
  onChange,
}: CustomSelectProps) {
  return (
    <Select onValueChange={onChange} value={value}>
      <SelectTrigger className="flex items-center">
        {label && (
          <>
            <p className="text-muted-foreground flex flex-row items-center gap-1 text-sm">
              {icon}
              {label}
            </p>
            <hr className="border-border mx-0.5 h-6 border-l bg-red-300" />
          </>
        )}
        <SelectValue />
      </SelectTrigger>
      <SelectContent align="end">
        {options.map((option) => (
          <SelectItem value={option.value}>{option.label}</SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
