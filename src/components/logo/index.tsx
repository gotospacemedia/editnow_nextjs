import logo from "@/assets/white-logo-1.png";
import Image from "next/image";

const Logo = () => {
  return (
    <div>
      <Image src={logo} alt="logo" width={100} />
    </div>
  );
};

export default Logo;
