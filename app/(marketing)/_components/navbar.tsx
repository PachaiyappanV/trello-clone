import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full h-14 px-4 border-b shadow-sm bg-white flex items-center">
      <div className="flex items-center justify-between w-full md:max-w-screen-2xl mx-auto">
        <Logo />
        <div className="flex justify-between items-center space-x-4 w-full md:w-auto md:block ">
          <Button size="sm" variant="outline" asChild>
            <Link href="/signin">Login</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/signup">Get Taskify for free</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
