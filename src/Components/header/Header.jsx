import React from 'react';
import { Link } from 'react-router';

const Header = () => {

  const links = [
    {id:1, link:"/", name:"Home"},
    {id:2, link:"/simpleForm", name:"Simple Form"},
    {id:3, link:"/formAction", name:"Form Action"},
  ]

  return (
    <header className='flex justify-center py-10'>
      
      {/* Nav menu */}
      <nav>
        <ul className='flex gap-5'>
          {links.map(({id, link, name}) => 
            <Link key={id} to={link}>{name}</Link>
          )}
        </ul>
      </nav>

    </header>
  );
};

export default Header;