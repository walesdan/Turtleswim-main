import React from "react";
import Image from "next/image";
import classNames from "classnames";

interface IProps {
  src: string;
  size?: "sm" | "md" | "lg";
  className?: string;
  bordered?: boolean;
}
export const Avatar: React.FC<IProps> = ({ src, size = "lg", bordered = false, className }) => {
  return (
    <div
      className={classNames(
        "rounded-[50%] overflow-hidden bg-[#ddd]",
        { "w-[3.5rem] h-[3.5rem]": size === "lg" },
        { "w-[2.5rem] h-[2.5rem]": size === "md" },
        { "w-[2rem] h-[2rem]": size === "sm" },
        { "border-white border-[0.1875rem]": bordered },

        className
      )}
    >
      <Image width={100} height={100} src={src} objectFit="cover" objectPosition="center" />
    </div>
  );
};
