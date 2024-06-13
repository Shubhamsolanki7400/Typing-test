import React, { useEffect, useState } from 'react';
import US from "../assets/us.webp";
import logo from "../assets/logo.png";
import '../styles/navbar.css';
import { Link } from 'react-router-dom';
import { RiArrowDownSFill } from 'react-icons/ri';
import Typewriter from './Typewriter';

const Navbar = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setSticky(offset > 1);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleItemHover = (itemName) => {
    setActiveItem(itemName);
  };

  return (
    <>
      <div className={isSticky ? 'banner sticky' : 'banner'}>
        <div className="parent-div">
          <div className="head1">
            <img src={logo} alt="Logo" />
            <div className="dropdown">
              <button className="dropbtn">
                Instructor <RiArrowDownSFill />
              </button>
              <div className="dropdown-content">
                <a
                  className={activeItem === 'teachers' ? 'active' : ''}
                  onMouseEnter={() => handleItemHover('teachers')}
                  onMouseLeave={() => handleItemHover(null)}
                >
                  Teachers
                </a>
                <a
                  className={activeItem === 'school' ? 'active' : ''}
                  onMouseEnter={() => handleItemHover('school')}
                  onMouseLeave={() => handleItemHover(null)}
                >
                  School & Districts
                </a>
                <a
                  className={activeItem === 'homeschool' ? 'active' : ''}
                  onMouseEnter={() => handleItemHover('homeschool')}
                  onMouseLeave={() => handleItemHover(null)}
                >
                  Homeschool
                </a>
              </div>
            </div>
            <div className="dropdown">
              <button className="dropbtn">
                Students <RiArrowDownSFill />
              </button>
              <div className="dropdown-content">
                <a
                  className={activeItem === 'Typing Test' ? 'active' : ''}
                  onMouseEnter={() => handleItemHover('Typing Test')}
                  onMouseLeave={() => handleItemHover(null)}
                >
                  Typing Test
                </a>
                <a
                  className={activeItem === 'Typing Games' ? 'active' : ''}
                  onMouseEnter={() => handleItemHover('Typing Games')}
                  onMouseLeave={() => handleItemHover(null)}
                >
                  Typing Games
                </a>
                <a
                  className={activeItem === 'Digital Literacy' ? 'active' : ''}
                  onMouseEnter={() => handleItemHover('Digital Literacy')}
                  onMouseLeave={() => handleItemHover(null)}
                >
                  Digital Literacy
                </a>
                <a
                  className={activeItem === 'Coding Curriculum' ? 'active' : ''}
                  onMouseEnter={() => handleItemHover('Coding Curriculum')}
                  onMouseLeave={() => handleItemHover(null)}
                >
                  Coding Curriculum
                </a>
              </div>
            </div>
          </div>
          <div className="head2">
            <div className="dropdown2">
              <img src={US} className="dropbtn2" alt="US" />
              <div className="dropdown-content2">
                <a
                  className={activeItem === 'Coding Curriculum' ? 'active' : ''}
                  onMouseEnter={() => handleItemHover('Coding Curriculum')}
                  onMouseLeave={() => handleItemHover(null)}
                >
                  Coding
                </a>
                <a
                  className={activeItem === 'test' ? 'active' : ''}
                  onMouseEnter={() => handleItemHover('test')}
                  onMouseLeave={() => handleItemHover(null)}
                >
                  Test
                </a>
                <a
                  className={activeItem === 'type' ? 'active' : ''}
                  onMouseEnter={() => handleItemHover('type')}
                  onMouseLeave={() => handleItemHover(null)}
                >
                  Type
                </a>
                <a
                  className={activeItem === 'nested' ? 'active' : ''}
                  onMouseEnter={() => handleItemHover('nested')}
                  onMouseLeave={() => handleItemHover(null)}
                >
                  Nested
                </a>
              </div>
            </div>
            <Link className='login' to="#">Log In</Link>
            <button className='signin'>Sign Up</button>
          </div>
        </div>
      </div>
      <div className="content">
        <Typewriter />
        {/* Add more content here to test the scrolling effect */}
      </div>
    </>
  );
};

export default Navbar;
