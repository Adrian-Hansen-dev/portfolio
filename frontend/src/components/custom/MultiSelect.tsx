"use client";

import * as React from "react";
import { Check } from "lucide-react";
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
import useIsMobile from "@/hooks/useIsMobile.tsx";

interface MultiSelectProps {
  options?: { label: string; value: string }[];
  icon?: React.ReactNode;
  label: string;
  value: string[];
  onChange: (selected: string[]) => void;
  className?: string;
  isLoading?: boolean;
  disabled?: boolean;
}

export default function MultiSelect({
  options,
  value,
  icon,
  label,
  onChange,
  className,
  isLoading = false,
  disabled = false,
}: MultiSelectProps) {
  const isMobile = useIsMobile();
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
    <div className={className}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger
          className={cn(
            "border-input bg-background flex h-9 w-fit max-w-md cursor-pointer items-center justify-between rounded-md border text-sm transition-all",
            "focus:ring-ring focus:ring-2 focus:ring-offset-2 focus:outline-none",
            "disabled:cursor-not-allowed disabled:opacity-50",
            "hover:bg-accent hover:text-accent-foreground",
          )}
          disabled={disabled}
          aria-expanded={open}
        >
          <div className="flex flex-1 justify-between overflow-hidden">
            <span className="text-muted-foreground flex items-center gap-1 px-2 text-sm">
              {icon} {!isMobile ? label : value.length !== 0 && value.length}
            </span>
            {value.length !== 0 && !isMobile && (
              <div
                className="flex flex-1 gap-1 overflow-x-auto px-3 py-2"
                style={{
                  scrollbarWidth: "thin",
                  scrollbarColor: "hsl(var(--border)) transparent",
                }}
              >
                {value.length > 3 ? (
                  <>
                    <hr className="border-border mx-0.5 my-auto h-6 border-l bg-red-300" />

                    <Badge variant="default" className="text-xs">
                      {value.length} skills selected
                    </Badge>
                  </>
                ) : (
                  <>
                    <hr className="border-border mx-0.5 my-auto h-6 border-l bg-red-300" />
                    {value.map((item) => {
                      const option = options?.find((opt) => opt.value === item);
                      return (
                        <Badge key={item} variant="default" className="text-xs">
                          {option?.label}
                        </Badge>
                      );
                    })}
                  </>
                )}
              </div>
            )}
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0" align="start">
          <Command>
            <CommandInput
              autoFocus={false}
              placeholder={"Search " + label.toLowerCase() + "..."}
            />
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
                    No {label.toLowerCase()} found.
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
                    {value.includes(option.value) ? (
                      <div className="mr-2 rounded-sm bg-black p-0.5">
                        <Check className="h-2.5 w-2.5 text-white" />
                      </div>
                    ) : (
                      <div className="mr-2 h-5 w-5 rounded-sm border"></div>
                    )}

                    {option.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
