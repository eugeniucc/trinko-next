import Image from "next/image";

export const Logo = () => {
  return (
    <a href="/">
      <Image src="/logo/icon.png" alt="Logo" width={72} height={72} priority />
    </a>
  );
};
