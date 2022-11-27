import MenuItem from "./MenuItem"

const Aside = ({messageCounter}) => {

  const menu = [{title: 'Home', href: '#'}, {title: 'About me', href: '#about' }, {title: 'Inbox', href: '#inbox', count: messageCounter}]

  return (
    <aside className='aside'>
          <ul>
            {menu.map((menuItem, index) => 
              (<MenuItem
                title={menuItem.title}
                href={menuItem.href}
                count={menuItem.count}
                key={index}
              />)
            )}
          </ul>
        </aside>
  )
}

export default Aside
