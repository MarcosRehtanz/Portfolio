import { useId } from 'react'
import { Tool } from '../../types'
import { IconComponent } from '../../assets/icons'
import { Tooltip } from '../Tooltip'

interface ClassStyle {
  a?: string;
  img?: string;
}

interface InputIconLink {
  item: Tool;
  className: string | ClassStyle;
}

export const IconLink = ({ item, className }: InputIconLink) => {
  const gen_id = useId()
  const tooltip_id = `${item.name}-${gen_id}`

  const imgCard = 'h-12 m-2 transition-all hover:h-14 hover:m-1'

  const classStyle = typeof className === 'string' ? {} : className

  return (
    <>
      <a
        className={classStyle.a ? classStyle.a : item.invert ? ' invert' : ''}
        data-tooltip-target={tooltip_id}
        data-tooltip-style="dark"
        href={item.url}
        target="_blank"
        rel="noreferrer"
        title={item.name}
      >
        {item?.icon ? (
          <IconComponent
            icon={item.icon}
            props={{ className: classStyle.img ? classStyle.img : imgCard }}
          />
        ) : (
          <img
            src={item.src}
            alt={item.name}
            className={classStyle.img ? classStyle.img : imgCard}
          />
        )}
      </a>
      <Tooltip id={tooltip_id} title={item.name} />
    </>
  )
}
