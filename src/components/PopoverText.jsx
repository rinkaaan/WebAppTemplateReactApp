import './PopoverText.scss'

export function PopoverText({ children }) {
  return (
    <div className='popover-text'>
      {children}
      <div className='underline' />
    </div>
  )
}
