export const Star = ({width}) => {
  return (
    <div className='star'>
        <span className="empty">☆</span>
        <span className="filled" style={{width:`${width*100}%`}}>★</span>
    </div>
  )
}
