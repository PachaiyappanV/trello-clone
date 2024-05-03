import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full h-14 px-4 border-b shadow-sm bg-white flex items-center">
      <div className="flex items-center justify-between w-full md:max-w-screen-2xl mx-auto">
        <Logo />
        <div className="flex justify-between items-center space-x-4 w-full md:w-auto md:block ">
          <Button size="sm" variant="ghost">
            Privacy policy
          </Button>
          <Button size="sm" variant="ghost">
            Terms of service
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Footer;
