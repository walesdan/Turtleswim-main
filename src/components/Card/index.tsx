import React, { useMemo } from "react";
import Image from "next/image";

import { Avatar } from "components/Avatar";

import { IconFire, IconHouse, IconWallet } from "assets/icons";

export type TCard = "HOUSE" | "VILLA" | "APARMENT";

export interface ICard {
  image: string;
  type: TCard;
  status: "Popular" | "New House" | "Best Deals";
  name: string;
  price: string;
  owner: {
    avatar: string;
    name: string;
    address: string;
  };
}
export const Card: React.FC<ICard> = ({ image, status, name, price, owner }) => {
  const { backgroundStatus, iconStatus, textColor } = useMemo(() => {
    let backgroundStatus = "";
    let textColor = "";
    let iconStatus: any = null;

    switch (status) {
      case "New House": {
        iconStatus = <IconHouse width={16} height={16} className="fill-blue700" />;
        backgroundStatus = "#DBEAFE";
        textColor = "#1D4ED8";
        break;
      }
      case "Best Deals": {
        iconStatus = <IconWallet width={16} height={16} className="fill-green700" />;
        backgroundStatus = "#D1FAE5";
        textColor = "#047857";
        break;
      }
      default: {
        iconStatus = <IconFire width={16} height={16} className="fill-red500" />;
        backgroundStatus = "#FEE2E2";
        textColor = "#EF4444";
        break;
      }
    }

    return {
      backgroundStatus,
      iconStatus,
      textColor,
    };
  }, [status]);

  return (
    <div className="w-full flex flex-col gap-[1rem] xs:gap-[1.5rem] snap-center">
      <div className="relative w-full max-h-[23.875rem] rounded-[1.5rem] overflow-hidden select-none">
        <Image width={340} height={382} objectFit="cover" layout="responsive" src={image} />
        <div
          className="absolute left-[1rem] bottom-[1rem] flex justify-center items-center gap-[0.625rem] font-medium text-[0.875rem] px-[1rem] py-[0.5rem] rounded-[2rem]"
          style={{ background: backgroundStatus, color: textColor }}
        >
          {iconStatus}
          {status}
        </div>
      </div>
      <div className="w-full flex flex-col gap-[0.5rem]">
        <h1 className="font-medium text-[1rem] xs:text-[1.25rem] md:text-[1.5rem] text-[#0E1735] md:leading-[2rem]">
          {name}
        </h1>
        <h3 className="font-medium text-[0.875rem] xs:text-[1.125rem] md:text-[1.25rem] text-[#3C4563] md:leading-[2rem]">
          {price}
        </h3>
      </div>
      <div className="w-full flex items-center gap-[1rem]">
        <Avatar src={owner.avatar} size="md" />
        <div className="flex flex-col gap-[0.25rem]">
          <h3 className="font-medium text-[1rem] xs:text-[1.125rem] text-[#0E1735]">
            {owner.name}
          </h3>
          <h6 className="font-medium text-[0.875rem] text-gray">{owner.address}</h6>
        </div>
      </div>
    </div>
  );
};
