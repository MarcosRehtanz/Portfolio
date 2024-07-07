import React from "react";
import { IconLink } from "../../IconLink/IconLink";
import { Button } from "../../Button/Button";
import { Project } from "../../../types";

export const ProjectCard = ({
  img,
  stacks,
  tags,
  description,
  title,
  link,
  buttonLink,
  logo,
}: Project) => {
  return (
    <div className="w-min p-3 flex flex-col items-center">
      <div className="max-w-[507px] rounded-md grid-flow-col md:flex max-md:w-[300px] itchio bg-white">
        {/** LEFT */}
        <div
          id="shroud"
          className="md:w-[207px] p-3 pb-0 md:border-r max-md:border-b border-gray-300 grid content-start overflow-hidden"
        >
          <div className="max-h-[140px] overflow-hidden flex items-center">
            <img
              className="w-[180px] max-md:w-full rounded-t"
              src={img}
              alt={title}
            />
          </div>
          <div className="w-full flex flex-wrap">
            {tags.map((tag, i) => {
              return (
                <h2
                  key={tag.name + i}
                  className={`max-w-max m-1 px-2 font-mono rounded-xl ${tag.bg} ${tag.text}`}
                  style={{ fontSize: "0.75rem" }}
                >
                  <strong>{tag.name}</strong>
                </h2>
              );
            })}
          </div>
        </div>

        {/** RIGHT */}
        <div
          id="game_summary"
          className="w-64 pl-4 pr-2 py-2 flex flex-col justify-between"
        >
          {/** UP */}
          <div>
            {/** TITLE */}
            <h3
              className={`tittle w-max font-bold text-2xl ${
                link && "hover:text-pink-500"
              }`}
            >
              {link ? (
                <a href={link} target="_blank">
                  {title}
                </a>
              ) : (
                title
              )}
            </h3>

            {/** STACKS */}
            <div className="flex">
              {stacks.map((tool, i) => {
                return (
                  <IconLink
                    key={tool.name + i}
                    item={tool}
                    className={{
                      a: "h-[22px] min-w-[22px] flex justify-center items-center",
                      img: "h-[18px] transition-all hover:h-[20px]",
                    }}
                  />
                );
              })}
            </div>

            {/** DESCRIPTION */}
            <div>
              {description.split("\n").map((des, i) => {
                return (
                  <h3 key={des + i} title={des} className="description">
                    {des}
                  </h3>
                );
              })}
            </div>
          </div>

          {/** DOWN */}
          <div>
            {/** BUTTON */}
            {link && (
              <div className="flex">
                <a target="_blank" className="button" href={link}>
                  <Button
                    className="h-9 my-2 rounded bg-pink-400 border-pink-400 hover:bg-pink-300 flex items-center justify-center"
                    onClick={() => {}}
                  >
                    <strong className="playButton">{buttonLink}</strong>
                  </Button>
                </a>
              </div>
            )}

            {/** LOGO */}
            <div className="h-4 flex justify-end">{logo}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
