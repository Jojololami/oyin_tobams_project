import Image from "next/image";

type BoltItemProps = {
  children: React.ReactNode;
};

const BoltItem = ({ children }: BoltItemProps) => {
  return (
    <li className="flex items-start gap-3">
      <Image
        src="/icons/bolt.svg"
        alt=""
        width={16}
        height={16}
        className="w-4 h-4 mt-1"
      />
      <span>{children}</span>
    </li>
  );
};

export default BoltItem;