import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineHome } from 'react-icons/ai';
// import { PiDownloadSimpleFill } from 'react-icons/pi';
// import { MdOutlineHistory } from 'react-icons/md';
// import { CgProfile } from 'react-icons/cg';
// import { HiOutlineVideoCamera } from 'react-icons/hi';
import './sidebar.css';

interface ISidebarProps {
  /**
   * What will be the theme of sidebar be?
   */
  theme?: 'dark' | 'light';
  /**
   * sidebar options
   */
  options: Array<String>;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

export default function Sidebar({
  theme,
  options,
}: ISidebarProps): JSX.Element {
  const [showContent, setShowContent] = useState(false);
  return (
    <aside
      className={showContent ? `sidebar ${theme}` : `sidebar-hidden ${theme}`}
    >
      <div className="sidebar-header">
        <div onClick={() => setShowContent((visible) => !visible)}>
          <GiHamburgerMenu size={22} />
        </div>
        <h3 className={showContent ? '' : 'hidden'} style={{ margin: 0 }}>
          Sidebar
        </h3>
      </div>
      <div className="sidebar-content">
        {options.map((option) => (
          <div className={`menu-select-${theme}`}>
            <AiOutlineHome size={22} />
            <p className={showContent ? 'menu-title' : 'menu-title hidden'}>
              {option}
            </p>
          </div>
        ))}
        {/* <div className={`menu-select-${theme}`}>
          <HiOutlineVideoCamera size={22} />
          <p className={showContent ? 'menu-title' : 'menu-title hidden'}>
            Menu Item 2
          </p>
        </div>
        <div className={`menu-select-${theme}`}>
          <MdOutlineHistory size={22} />
          <p className={showContent ? 'menu-title' : 'menu-title hidden'}>
            Menu Item 3
          </p>
        </div>
        <div className={`menu-select-${theme}`}>
          <AiOutlineEye size={22} />
          <p className={showContent ? 'menu-title' : 'menu-title hidden'}>
            Menu Item 4
          </p>
        </div>
        <div className={`menu-select-${theme}`}>
          <PiDownloadSimpleFill size={22} />
          <p className={showContent ? 'menu-title' : 'menu-title hidden'}>
            Menu Item 5
          </p>
        </div>
        <div className={`menu-select-${theme}`}>
          <CgProfile size={22} />
          <p className={showContent ? 'menu-title' : 'menu-title hidden'}>
            Menu Item 6
          </p>
        </div> */}
      </div>
    </aside>
  );
}

Sidebar.defaultProps = {
  theme: 'dark',
  options: ['first', 'second', 'third', 'forth'],
};
