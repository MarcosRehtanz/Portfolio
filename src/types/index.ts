import { IconNames } from "../assets/icons";
import type { Language, Translations } from "../i18n";

export type StateKeys =
  | "hp"
  | "speed"
  | "attack"
  | "defense"
  | "special_attack"
  | "special_defense";

export interface Tool {
  name: string;
  url: string;
  src?: string;
  invert: boolean;
  icon?: IconNames;
}

export interface Tag {
  name: string;
  bg: string;
  text: string;
}

export interface Project {
  title: string;
  img: string;
  link: string | null;
  description: Record<Language, string>;
  tags: Tag[];
  stacks: Tool[];
  buttonLink: keyof Translations["projects"] | null;
  logo: React.JSX.Element | null;
}
