import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { navLinks } from "@/constants";

const Header = () => {
  return (
    <header className="w-full py-5 px-8">
      <nav className="flex justify-between items-center">
        <Image
          src={"/logo.png"}
          alt="logo"
          className="size-12"
          width={10}
          height={10}
        />

        <div className="flex space-x-6">
          {navLinks.map((item) => (
            <Link
              key={item.sn}
              href={item.route}
              className="text-slate-700 text-[15px]"
            >
              {item.title}
            </Link>
          ))}
        </div>

        <div>
          <SignedIn>
            <div className="flex items-center space-x-3">
              <Button variant={"outline"} size={"lg"}>
                <Link href={"/dashboard"}>Dashboard</Link>
              </Button>
              <UserButton afterSwitchSessionUrl="/" />
            </div>
          </SignedIn>
          <SignedOut>
            <Button variant={"outline"} size={"lg"}>
              <Link href={"/sign-in"}>Login</Link>
            </Button>
          </SignedOut>
        </div>
      </nav>
    </header>
  );
};

export default Header;
