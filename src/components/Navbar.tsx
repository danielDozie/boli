import {
  Navbar as HeroNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Avatar,
  useDisclosure,
} from "@heroui/react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { ProfileDrawer } from "./ProfileDrawer";
import { Logo } from "./Logo";

export function Navbar({ currentPath }: { currentPath?: string }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <HeroNavbar maxWidth="xl" className="bg-white/70 dark:bg-black/70 backdrop-blur-md border-b border-divider">
        <NavbarBrand>
          <Link href="/" className="flex items-center gap-0 text-inherit">
            <Logo />
            <p className="font-bold text-2xl tracking-tight">B.oli</p>
          </Link>
        </NavbarBrand>

        <NavbarContent className="hidden sm:flex gap-8" justify="center">
          <NavbarItem isActive={currentPath === "/" || currentPath === ""}>
            <Link href="/" className={`font-medium ${currentPath === "/" || currentPath === "" ? "text-primary" : "text-default-600"}`}>
              Discover
            </Link>
          </NavbarItem>
          <NavbarItem isActive={currentPath === "/markets"}>
            <Link href="/markets" className={`font-medium ${currentPath === "/markets" ? "text-primary" : "text-default-600"}`}>
              Markets
            </Link>
          </NavbarItem>
          <NavbarItem isActive={currentPath === "/challenges"}>
            <Link href="#" className="text-default-600 font-medium opacity-50 cursor-not-allowed">
              Challenges
            </Link>
          </NavbarItem>
          <NavbarItem isActive={currentPath === "/awoof-hub"}>
            <Link href="/awoof-hub" className={`font-medium ${currentPath === "/awoof-hub" ? "text-primary" : "text-default-600"}`}>
              Awoof Hub
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end" className="gap-4">
          <NavbarItem className="hidden sm:flex">
            <ThemeSwitcher />
          </NavbarItem>
          <NavbarItem>
            <div className="flex items-center gap-2 bg-default-100 dark:bg-default-50 px-3 py-1.5 rounded-full">
              <span className="text-sm font-bold text-primary">2,450 SC</span>
              <div className="w-5 h-5 bg-warning rounded-full flex items-center justify-center text-[10px] font-bold text-white">
                $
              </div>
            </div>
          </NavbarItem>
          <NavbarItem>
            <Avatar
              isBordered
              color="primary"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              className="cursor-pointer hover:scale-105 transition-transform"
              onClick={onOpen}
            />
          </NavbarItem>
        </NavbarContent>
      </HeroNavbar>

      <ProfileDrawer isOpen={isOpen} onClose={onClose} />
    </>
  );
}
