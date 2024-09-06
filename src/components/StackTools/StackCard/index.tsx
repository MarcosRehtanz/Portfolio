import React from "react";
import { IconLink } from "../../IconLink/IconLink";
import { Tool } from "../../../types";

const ToolCard = ({ children }: { children: React.ReactNode }) => (
  <div className="w-64 flex-shrink-0 flex flex-row flex-wrap gap-2 justify-center content-center">
    {children}
  </div>
);

interface StackCardProps {
  title: string;
  description: React.ReactNode;
  toolList: Tool[];
}

export const StackCard = ({ title, description, toolList }: StackCardProps) => (
  <section className="container md:pt-3 w-fit mx-auto poppins">
    <div className="mx-5 md:mx-auto bg-[--color-1] rounded-xl shadow-md overflow-hidden md:max-w-3xl m-5">
      <div className="w-full flex flex-wrap flex-col md:flex-row justify-center content-center items-center">
        <div className="min-w-[200px] max-w-xs min-h-[200px] p-2 flex flex-col flex-wrap justify-start content-center">
          <h2 className="w-full text-left tracking-wide text-3xl text-white font-bold">
            {title}
          </h2>
          <div className="mt-2 px-3 pt-4 border-l-2 border-gray-500">
            {description}
          </div>
          <br />
        </div>
        <ToolCard>
          {toolList.map((tool, i) => {
            return (
              <IconLink
                key={tool.name + i}
                item={tool}
                className={
                  "h-[60px] min-w-[60px] flex justify-center items-center"
                }
              />
            );
          })}
        </ToolCard>
      </div>
    </div>
  </section>
);
