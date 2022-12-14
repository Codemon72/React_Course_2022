import { Link } from 'wouter';
import MenuItem from './MenuItem';

const Aside = ({ messageCounter }) => {
  const menu = [
    { title: 'Home', href: '/' },
    { title: 'MessageNotification', href: '#inbox', count: messageCounter },
    { title: 'Dynamic Routing', href: '#dynamicRouting' },
    { title: 'API call + local storage', href: '#apiCallLocalStorage' },
  ];

  return (
    <aside className='aside'>
      <ul>
        {menu.map((menuItem, index) => (
          <Link href={menuItem.href} key={index}>
            <MenuItem
              title={menuItem.title}
              href={menuItem.href}
              count={menuItem.count}
            />
          </Link>
        ))}
      </ul>
    </aside>
  );
};

export default Aside;
