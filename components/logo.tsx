import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";

const textFont = localFont({
  src: "../public/fonts/font.woff2",
});

const Logo = () => {
  return (
    <Link href="/">
      <div className="hidden md:flex items-center gap-x-2 transition hover:opacity-75">
        <Image
          src="/logo.svg"
          alt="logo"
          height={30}
          width={30}
          className="-translate-y-0.5"
        />
        <p className={cn("text-lg text-neutral-700 pb-1", textFont.className)}>
          Taskify
        </p>
      </div>
    </Link>
  );
};

export default Logo;
