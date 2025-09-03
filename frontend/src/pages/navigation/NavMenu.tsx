import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { NavigationMenuProps } from "@radix-ui/react-navigation-menu";
import { Button } from "@/components/ui/button.tsx";
import { scrollTo } from "@/util/scrollTo.tsx";
import { Badge } from "@/components/ui/badge.tsx";

export const NavMenu = (props: NavigationMenuProps) => (
  <NavigationMenu {...props}>
    <NavigationMenuList className="relative gap-6 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start">
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Button variant="ghost" onClick={() => scrollTo("about")}>
            About
          </Button>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Button
            disabled={true}
            variant="ghost"
            onClick={() => scrollTo("experience")}
          >
            Experience
            <Badge className="absolute -top-1 -right-2.5 px-1 py-0.5 text-[0.6em]">
              Soon
            </Badge>
          </Button>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Button variant="ghost" onClick={() => scrollTo("projects")}>
            Projects
          </Button>
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
);
