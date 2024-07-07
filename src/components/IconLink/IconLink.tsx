import React from "react";
import { Tool } from "../../types";
import { IconComponent } from "../../assets/icons";

interface ClassStyle {
  a?: string;
  img?: string;
}

interface InputIconLink {
  item: Tool;
  className: string | ClassStyle;
}

export const IconLink = ({ item, className }: InputIconLink) => {
  const imgCard = "h-12 transition-all hover:h-14";

  const classStyle = typeof className === "string" ? {} : className;

  return (
    <a
      className={classStyle.a ? classStyle.a : item.invert ? " invert" : ""}
      href={item.url}
      target="_blank"
      rel="noreferrer"
    >
      {item?.icon ? (
        <IconComponent
          icon={item.icon}
          props={{ className: classStyle.img ? classStyle.img : imgCard }}
        />
      ) : (
        <img
          src={item.src}
          alt={item.name}
          className={classStyle.img ? classStyle.img : imgCard}
        />
      )}
    </a>
  );
};
