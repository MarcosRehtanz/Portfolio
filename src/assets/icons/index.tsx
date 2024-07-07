import React, { SVGProps } from "react";
import StyledComponents from "./StyledComponents";
import Storybook from "./Storybook";

type IconProps = SVGProps<SVGSVGElement>;
type IconType = (props: IconProps) => JSX.Element;

export enum IconNames {
  styledComponents = "styledComponents",
  storybook = "storybook",
}

const IconKeys: Record<IconNames, IconType> = {
  styledComponents: StyledComponents,
  storybook: Storybook,
};

type IconComponentProps = {
  icon: IconNames;
  props?: IconProps;
};
export const IconComponent = ({ icon, props }: IconComponentProps) => {
  const Component = IconKeys[icon];
  return <Component {...props} />;
};
