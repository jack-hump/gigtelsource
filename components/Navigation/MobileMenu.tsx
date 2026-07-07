import Image from "next/image";
import { NavLinks } from "./NavLinks";

interface Props {
  open: boolean;
  setOpen: (v: boolean) => void;
}

export const MobileMenu = ({ open, setOpen }: Props) => {
  return (
    <div
      className={`fixed inset-0 bg-white z-50 transform transition-transform duration-300 lg:hidden ${
        open ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between h-16 px-4 border-b border-black">
        <Image
          src="/images/logo.svg"
          alt="Source Internet"
          width={126}
          height={50}
        />

        <button onClick={() => setOpen(false)}>
          <Image
            src="/images/cross.svg"
            alt="Close"
            width={28}
            height={28}
          />
        </button>
      </div>

      <div className="p-6">
        <NavLinks />
      </div>
    </div>
  );
};

