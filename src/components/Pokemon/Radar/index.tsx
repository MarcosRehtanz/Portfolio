import React from "react";
import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";
import {
  FaBolt,
  FaFistRaised,
  FaHeart,
  FaMagic,
  FaShieldAlt,
  FaShieldVirus,
  FaStarOfLife,
} from "react-icons/fa";
import { IconType } from "react-icons";

type Props = {
  data: {
    name: string;
    base_stat: number;
  }[];
};

type StateKeys =
  | "hp"
  | "speed"
  | "attack"
  | "defense"
  | "special_attack"
  | "special_defense";

const RadarPokemon = ({ data }: Props) => {
  const Icons: Record<StateKeys, IconType> = {
    hp: FaHeart,
    speed: FaBolt,
    attack: FaFistRaised,
    defense: FaShieldAlt,
    special_attack: FaMagic,
    special_defense: FaStarOfLife,
  };
  return (
    <ResponsiveContainer width={200} height={200}>
      <RadarChart outerRadius={50} data={data}>
        <PolarGrid />
        <PolarAngleAxis
          dataKey="name"
          tick={({ payload, x, y, width, height }) => {
            const Icon = Icons[payload.value as StateKeys];
            return <Icon x={x - 8} y={y - 8} fill="#fff" />;
          }}
        />
        <PolarRadiusAxis axisLine={false} tick={false} domain={[0, 160]} />
        <Radar
          name="name"
          dataKey="base_stat"
          stroke="#82ca9d"
          fill="#82ca9d"
          fillOpacity={0.6}
        />
        {/* <Legend /> */}
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default RadarPokemon;
