const MenuItem = ({ title, href, count }) => {
  return (
    <>
      <li>
        <a className='text-slate-700 hover:text-slate-900' href={href}>
          {title}
        </a>
      </li>
      {Boolean(count) && count > 1 && <span>&nbsp; ({count} messages)</span>}
      {Boolean(count) && count === 1 && <span>&nbsp; ({count} message)</span>}
      {count === 0 && <span>&nbsp; (no messages)</span>}
    </>
  );
};

export default MenuItem;
