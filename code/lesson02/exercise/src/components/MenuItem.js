const MenuItem = ({title, href, count}) => {
  return (
    <>
      <li>
        <a className='text-slate-700 hover:text-slate-900' href={href}>
          {title}
        </a>
      </li>
      {count && <span>&nbsp; ({count} messages)</span>}
    </>
  );
}

export default MenuItem