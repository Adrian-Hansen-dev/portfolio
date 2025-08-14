import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React from "react";

interface SearchInputProps {
  placeholder: string;
  value: string;
  onInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function SearchInput({
  onInput,
  value,
  placeholder,
}: SearchInputProps) {
  return (
    <div className="relative max-w-md">
      <Search className="absolute top-1/2 left-2 h-4 w-4 -translate-y-1/2 text-gray-400" />
      <Input
        onInput={onInput}
        value={value}
        type="text"
        placeholder={placeholder}
        className="pl-8"
      />
    </div>
  );
}
