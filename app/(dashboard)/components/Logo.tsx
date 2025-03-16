import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image height={130} width={130} alt="Logo" src="/logo.svg" />
    </Link>
  );
};

export default Logo;
