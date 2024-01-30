import Link from "next/link";
import React from "react";
import { ModeToggle } from "./ModeToggle";
import Search from "./Search";
import { Avatar, AvatarImage } from "./ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <Avatar>
              <AvatarImage src="/logo-cartola-ia-full.png" />
            </Avatar>
            <span className="inline-block font-bold">Cartola IA</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1 gap-3">
            <Avatar>
              {/* <AvatarImage src="/user-default-dark.jpg" /> */}
            </Avatar>
          </nav>
        </div>
      </div>
    </header>
  )
};

export default Navbar;
