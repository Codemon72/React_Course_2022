import { Link } from 'wouter';
import MenuItem from './MenuItem';

const Aside = ({ messageCounter }) => {
  const menu = [
    { title: 'Home', href: '/' },
    { title: 'About me', href: '/about' },
    { title: 'Inbox', href: '#inbox', count: messageCounter },
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
