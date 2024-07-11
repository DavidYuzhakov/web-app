const Cap = ({ className }: { className?: string}) => {
  return (
    <div className={`cap ${className}`}>
      <img className='dec-image' src="./bottom/decoration.svg" alt="" />
      <img className='cap-image' src="./bottom/cap-power.svg" alt="" />
      <img className='line-image' src="./bottom/line.svg" alt="" />
    </div>
  )
}

export default Cap
