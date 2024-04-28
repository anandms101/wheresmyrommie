import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "./mode-toggle";
import { UserButton } from "@clerk/clerk-react";

export default function Navbar() {
  return (
    <>
      <div className="flex flex-row containe justify-between">
        <NavigationMenu>
          <NavigationMenuList className="container flex justify-between">
            <NavigationMenuItem className="font-welcomeheading text-xl font-bold tracking-wider">
              wheresmyroommie
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex flex-row space-x-4">
          <UserButton />
          <ModeToggle />
        </div>
      </div>
    </>
  );
}
