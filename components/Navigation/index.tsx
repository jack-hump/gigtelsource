import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MobileMenu } from "./MobileMenu";
import { NavLinks } from "./NavLinks";

export const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b border-black bg-white/80 backdrop-blur-sm fixed top-0 left-0 z-50">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4">
        
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.svg"
            alt="Source Internet"
            width={126}
            height={50}
            className="h-[50px] w-[126px]"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex">
          <NavLinks />
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden"
          onClick={() => setOpen(true)}
        >
          <Image
            src="/images/hamburger.svg"
            alt="Menu"
            width={28}
            height={28}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <MobileMenu open={open} setOpen={setOpen} />
    </header>
  );
};

