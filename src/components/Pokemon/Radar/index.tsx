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

type Props = {
  data: {
    name: string;
    base_stat: number;
  }[];
};

const RadarPokemon = ({ data }: Props) => {
  return (
    <ResponsiveContainer width={200} height={200}>
      <RadarChart outerRadius={50} data={data}>
        <PolarGrid />
        <PolarAngleAxis
          dataKey="name"
          tick={({ payload, x, y }) => (
            <IconResolver {...{ x, y, value: payload.value }} />
          )}
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
