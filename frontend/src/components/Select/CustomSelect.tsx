import { SelectProps } from "./types.tsx";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function CustomSelect({
  label,
  value,
  options,
  onChange,
  placeholder = "",
}: SelectProps) {
  return (
    <div className="flex items-center space-x-4">
      <p className="text-muted-foreground text-sm">{label}</p>
      <Select onValueChange={onChange} value={value}>
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem value={option.value}>{option.label}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
