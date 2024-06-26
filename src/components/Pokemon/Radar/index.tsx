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
import { IconResolver } from "./IconResolver";

type StateType = {
  name: string;
  base_stat: number;
};
export type PokemonType = {
  [key: string]: any;
  stats?: StateType[];
};
const initialStats: StateType[] = [
  { name: "hp", base_stat: 0 },
  { name: "attack", base_stat: 0 },
  { name: "defense", base_stat: 0 },
  { name: "special_attack", base_stat: 0 },
  { name: "special_defense", base_stat: 0 },
  { name: "speed", base_stat: 0 },
];

type Props = {
  data?: StateType[];
};

const RadarPokemon = ({ data }: Props) => {
  return (
    <ResponsiveContainer width={200} height={200}>
      <RadarChart outerRadius={50} data={data ?? initialStats}>
        <PolarGrid />
        <PolarAngleAxis
          dataKey="name"
          tick={({ payload, x, y }) => (
            <IconResolver {...{ x, y, value: payload.value }} />
          )}
        />
        <PolarRadiusAxis axisLine={false} tick={false} domain={[0, 180]} />
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
