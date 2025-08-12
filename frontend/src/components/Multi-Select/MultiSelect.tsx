"use client";

import * as React from "react";
import { Check, ChevronsUpDown, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Skeleton } from "@/components/ui/skeleton";

interface MultiSelectProps {
  options?: { label: string; value: string }[];
  label?: string;
  value: string[];
  onChange: (selected: string[]) => void;
  placeholder?: string;
  className?: string;
  isLoading?: boolean;
  disabled?: boolean;
}

export default function MultiSelect({
  options,
  label,
  value,
  onChange,
  placeholder = "Select items...",
  className,
  isLoading = false,
  disabled = false,
}: MultiSelectProps) {
  const [open, setOpen] = React.useState(false);

  const handleUnselect = (item: string) => {
    onChange(value.filter((i) => i !== item));
  };

  const handleSelect = (item: string) => {
    if (value.includes(item)) {
      handleUnselect(item);
    } else {
      onChange([...value, item]);
    }
  };

  return (
    <div className="flex items-center space-x-4">
      <p className="text-muted-foreground text-sm">{label}</p>
      <div className={className}>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger
            className={cn(
              "border-input bg-background flex h-12 w-full items-center justify-between rounded-md border text-sm transition-all",
              "focus:ring-ring focus:ring-2 focus:ring-offset-2 focus:outline-none",
              "disabled:cursor-not-allowed disabled:opacity-50",
              "hover:bg-accent hover:text-accent-foreground",
            )}
            disabled={disabled}
            aria-expanded={open}
          >
            <div className="flex flex-1 justify-between overflow-hidden">
              <div
                className="flex flex-1 gap-1 overflow-x-auto px-3 py-2"
                style={{
                  scrollbarWidth: "thin",
                  scrollbarColor: "hsl(var(--border)) transparent",
                }}
              >
                {value.length === 0 ? (
                  <span className="text-muted-foreground truncate">
                    {placeholder}
                  </span>
                ) : (
                  value.map((item) => {
                    const option = options?.find((opt) => opt.value === item);
                    return (
                      <Badge key={item} variant="default" className="text-xs">
                        {option?.label}
                        <span
                          role="button"
                          tabIndex={0}
                          className="hover:bg-destructive hover:text-destructive-foreground ml-1 rounded-full p-0.5 transition-all"
                          onKeyDown={(e) =>
                            e.key === "Enter" && handleUnselect(item)
                          }
                          onClick={() => handleUnselect(item)}
                        >
                          <X className="h-3 w-3" />
                        </span>
                      </Badge>
                    );
                  })
                )}
              </div>
              <hr className="border-border mx-0.5 my-auto h-6 border-l bg-red-300" />
              <span
                role="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpen((prev) => !prev);
                }}
                tabIndex={0}
                className={cn(
                  "mx-1.5 my-auto h-full p-1 outline-none",
                  "focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-2",
                  "hover:bg-accent/50 cursor-pointer rounded-sm",
                )}
              >
                <ChevronsUpDown className="h-4 w-4 shrink-0 opacity-50" />
              </span>
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-full p-0" align="start">
            <Command>
              <CommandInput autoFocus={false} placeholder="Search items..." />
              <CommandList>
                <CommandEmpty className="p-0">
                  {isLoading ? (
                    <div className="p-2">
                      {Array.from({ length: 6 }).map((_, index) => (
                        <Skeleton
                          key={index}
                          className="mb-1 h-4 w-full last:mb-0"
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="text-muted-foreground py-4 text-center text-sm">
                      No items found.
                    </div>
                  )}
                </CommandEmpty>
                <CommandGroup>
                  {options?.map((option) => (
                    <CommandItem
                      key={option.value}
                      value={option.value}
                      onSelect={() => handleSelect(option.value)}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          value.includes(option.value)
                            ? "opacity-100"
                            : "opacity-0",
                        )}
                      />
                      {option.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
