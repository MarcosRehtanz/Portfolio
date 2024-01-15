import React from 'react'

interface ClassStyle {
    a?: string
    img?: string
}

interface InputIconLink {
    item: any
    className: string | ClassStyle
}

export const IconLink = ({ item, className }: InputIconLink) => {
    const imgCard = 'h-12 transition-all hover:h-14';

    const classStyle = typeof className === 'string' ? {} : className;

    return (
        <a className={(classStyle.a ? classStyle.a : className + (item.invert && ' invert'))} href={item.url} target="_blank" rel="noreferrer">
            <img src={item.src} alt={item.name} className={classStyle.img ? classStyle.img : imgCard} />
        </a>
    );
};
