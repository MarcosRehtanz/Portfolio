import React from "react";
import {
  FaBolt,
  FaFistRaised,
  FaHeart,
  FaMagic,
  FaShieldAlt,
  FaStarOfLife,
} from "react-icons/fa";
import { IconType } from "react-icons";
import { StateKeys } from "../../../../types";

type Props = {
  value: string;
  x: number;
  y: number;
};

const Icons: Record<StateKeys, IconType> = {
  hp: FaHeart,
  speed: FaBolt,
  attack: FaFistRaised,
  defense: FaShieldAlt,
  special_attack: FaMagic,
  special_defense: FaStarOfLife,
};

export const IconResolver = ({ x, y, value }: Props) => {
  const Icon = Icons[value as StateKeys];
  return <Icon x={x - 8} y={y - 8} fill="#fff" />;
};
