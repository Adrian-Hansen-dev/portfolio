import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { NavMenu } from "@/pages/navigation/NavMenu.tsx";
import Logo from "@/components/custom/Logo.tsx";

export const NavSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <Logo />
          </SheetTitle>
        </SheetHeader>
        <div className="flex justify-start p-4">
          <NavMenu orientation="vertical" className="text-xl" />
        </div>
      </SheetContent>
    </Sheet>
  );
};
