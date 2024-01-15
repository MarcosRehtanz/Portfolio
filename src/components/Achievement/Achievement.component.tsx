import React from 'react'
import { IconLink } from '../IconLink/IconLink'
import { Achievement as Props } from '../../utils/achievements'

export const Achievement = ({ title, description, image, stacks }: Props) => {


    return (<div className="w-full p-3 flex flex-col items-center">
        <div className="max-w-[507px] rounded-md flex w-[300px] itchio bg-white">
            {/** LEFT */}
            <div
                id="shroud"
                className="w-[207px] p-3 pb-0 border-r border-b border-gray-300 grid content-start overflow-hidden"
            >
                <div className="max-h-[40px] overflow-hidden flex items-center">
                    <img
                        className="h-full rounded-t"
                        src={image}
                        alt={title}
                    />
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
                    <h1
                        className={`tittle w-max font-bold text-2xl hover:text-pink-500`}
                    >
                        {title}
                    </h1>

                    {/** STACKS */}
                    <div className="flex">
                        {stacks.map((took, i) => {
                            return (
                                <IconLink
                                    key={took.name + i}
                                    item={took}
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
            </div>
        </div>
    </div>)
}