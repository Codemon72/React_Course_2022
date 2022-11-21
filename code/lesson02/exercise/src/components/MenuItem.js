const MenuItem = ({title, href, count}) => {
  return (
    <>
      <li>
        <a className='text-slate-700 hover:text-slate-900' href={href}>
          {title}
        </a>
      </li>
      {/* {count && <span>&nbsp; ({count} messages)</span>} */}
      {count && count > 1 && <span>&nbsp; ({count} messages)</span>}
      {count && count === 1 && <span>&nbsp; ({count} message)</span>}
      {count && count === 0 && <span>&nbsp; (no messages)</span>}
    </>
  );
}

export default MenuItem