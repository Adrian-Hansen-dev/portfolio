import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { NavigationMenuProps } from "@radix-ui/react-navigation-menu";
import { Button } from "@/components/ui/button.tsx";
import { scrollTo } from "@/util/scrollTo.tsx";

export const NavMenu = (props: NavigationMenuProps) => (
  <NavigationMenu {...props}>
    <NavigationMenuList className="gap-6 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start">
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Button variant="ghost" onClick={() => scrollTo("about")}>
            About
          </Button>
        </NavigationMenuLink>
      </NavigationMenuItem>
      {/*<NavigationMenuItem>*/}
      {/*  <NavigationMenuLink asChild>*/}
      {/*    <Button variant="ghost" onClick={() => scrollTo("experience")}>*/}
      {/*      Experience*/}
      {/*    </Button>*/}
      {/*  </NavigationMenuLink>*/}
      {/*</NavigationMenuItem>*/}
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
