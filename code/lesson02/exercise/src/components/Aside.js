import MenuItem from "./MenuItem"

const Aside = ({numberOfMessages}) => {

  const menu = [{title: 'Home', href: '#'}, {title: 'About me', href: '#about' }, {title: 'Inbox', href: '#inbox', count: numberOfMessages}]

  return (
    <aside className='w-1/4 h-full border-slate-400 border-r p-4'>
          <ul className='flex flex-col gap-2 font-semibold'>
            {menu.map(menuItem => {
              <MenuItem title={menuItem.title} href={menuItem.href} count={menuItem.count} />
            })}
            {[<li>
              <a className='text-slate-700 hover:text-slate-900' href='#'>
                Home
              </a>
            </li>,
            <li>
              <a className='text-slate-700 hover:text-slate-900' href='#'>
                About me
              </a>
            </li>,
            <li>
              <a className='text-slate-700 hover:text-slate-900' href='#'>
                Inbox
              </a><span>&nbsp; ({numberOfMessages} messages)</span>
            </li>]}
          </ul>
        </aside>
  )
}

export default Aside
