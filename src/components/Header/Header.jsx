import { NavLink } from 'react-router-dom';

import { HeaderNav, HeaderNavList, HeaderNavItem } from './Header.styled';

const navItem = [
  { href: '/', text: 'Home' },
  { href: 'movies', text: 'Movies' },
];

const Header = () => {
  return (
    <HeaderNav>
      <HeaderNavList>
        {navItem.map(({ href, text }) => (
          <HeaderNavItem>
            <NavLink to={href} key={text}>
              {text}
            </NavLink>
          </HeaderNavItem>
        ))}
      </HeaderNavList>
    </HeaderNav>
  );
};
export default Header;
