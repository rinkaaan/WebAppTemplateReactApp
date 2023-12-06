export function PopoverText({ children }) {
  return (
    <div className='cursor-pointer'>
      <h4 className="m-0">{children}</h4>
      <div className="w-full border-t-2 border-dashed border-black mt-[1px]" />
    </div>
  )
}
