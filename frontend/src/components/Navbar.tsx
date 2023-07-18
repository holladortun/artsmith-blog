/* eslint-disable import/no-extraneous-dependencies */
import { Link, NavLink } from 'react-router-dom';

import navitems from '../utils/navitems';

const Navbar = () => {
  return (
    <div className=' bg-secondary'>
      <div className='max-w-[1440px] mx-auto px-[50px] container flex justify-between items-center py-4'>
        <div className='w-1/3'>
          <Link to="/home" className='text-2xl font-bold'>Logo</Link>
        </div>
        <div className='flex items-center justify-end w-full '>
          <div className='flex items-center gap-5'>
            {navitems.map((item) => {
              return (
                <NavLink to={item.url} key={item.id}>
                  {item.item}
                </NavLink>
              );
            })}
          </div>
          <div className='ml-8'>
            <Link to='/createpost' className='px-5 py-2 text-white rounded-full bg-primary'>
              Create Post
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
