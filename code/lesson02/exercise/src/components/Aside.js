import MenuItem from "./MenuItem"

const Aside = ({numberOfMessages}) => {

  const menu = [{title: 'Home', href: '#'}, {title: 'About me', href: '#about' }, {title: 'Inbox', href: '#inbox', count: numberOfMessages}]

  return (
    <aside className='w-1/4 h-full border-slate-400 border-r p-4'>
          <ul className='flex flex-col gap-2 font-semibold'>
            {menu.map(menuItem => 
              (<MenuItem
                title={menuItem.title}
                href={menuItem.href}
                count={menuItem.count}
              />)
            )}
          </ul>
        </aside>
  )
}

export default Aside
