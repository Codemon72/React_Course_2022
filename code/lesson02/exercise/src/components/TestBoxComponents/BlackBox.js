const BlackBox = ({divStyle}) => {

  function onDoubleClickHandler(e){
    console.log(e.target.innerHTML)
  }

  return (
    <div style={divStyle} onDoubleClick={onDoubleClickHandler}>
      Look what I done! 🫢
      <br />
      <span>(This is my component Blackbox)</span><br />
      <span>(Double click to log its HTML)</span>
    </div>
  )
}

export default BlackBox
