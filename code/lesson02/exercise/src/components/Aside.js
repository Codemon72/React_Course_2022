const Aside = () => {
  return (
    <aside className='w-1/4 h-full border-slate-400 border-r p-4'>
          <ul className='flex flex-col gap-2 font-semibold'>
            <li>
              <a className='text-slate-700 hover:text-slate-900' href='#'>
                Home
              </a>
            </li>
            <li>
              <a className='text-slate-700 hover:text-slate-900' href='#'>
                About me
              </a>
            </li>
            <li>
              <a className='text-slate-700 hover:text-slate-900' href='#'>
                Inbox
              </a>
            </li>
          </ul>
        </aside>
  )
}

export default Aside
