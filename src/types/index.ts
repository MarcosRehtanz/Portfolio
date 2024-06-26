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
  src: string;
  invert: boolean;
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
  description: string;
  tags: Tag[];
  stacks: Tool[];
  buttonLink: string;
  logo: React.JSX.Element | null;
}
