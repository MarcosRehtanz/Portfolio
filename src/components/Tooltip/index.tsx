type TooltipProps = {
  id: string,
  title: string,
}

export const Tooltip = ({ id, title }: TooltipProps) => {
  return (
    <div id={id} role="tooltip"
         className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-xs opacity-0 tooltip dark:bg-gray-700">
      {title}
      <div className="tooltip-arrow" data-popper-arrow></div>
    </div>
  )
}