const BlackBox = ({divStyle}) => {
// todo
  function onDoubleClickHandler(e){
    console.log('black')
    console.log(e.target.innerHTML)
  }

  return (
    <div style={divStyle}>
      Look what I done! 🫢
      <br />
      <span onDoubleClick={onDoubleClickHandler}>(This is my component Blackbox)</span>
    </div>
  )
}

export default BlackBox
