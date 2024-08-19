import { Tool } from "../types";
import {
  figma,
  apollo,
  bash,
  bootstrap,
  csharp,
  css3,
  express,
  git,
  graphql,
  html5,
  illustrator,
  javascript,
  jest,
  nodejs,
  photoshop,
  storybook,
  mongodb,
  firebase,
  postgresql,
  react,
  redux,
  sequelize,
  tailwind,
  typescript,
  unity,
} from "./stack";

export const mainStack: Tool[] = [
  figma,
  storybook,
  //   html5,
  //   javascript,
  typescript,
  react,
  graphql,
  mongodb,
  firebase,
];

export const frontend: Tool[] = [
  figma,
  react,
  redux,
  tailwind,
  bootstrap,
  apollo,
  typescript,
  html5,
  css3,
  javascript,
];
export const backend: Tool[] = [
  nodejs,
  express,
  apollo,
  graphql,
  sequelize,
  postgresql,
  mongodb,
  jest,
];
export const tools: Tool[] = [bash, git, csharp, unity, illustrator, photoshop];
