import { useState } from 'react';
import { BiDownArrowCircle } from 'react-icons/bi';
import './dropdown.css';

interface DropdownProps {
  /**
   * What will be the theme of sidebar be?
   */
  theme?: 'dark' | 'light';
  /**
   * dropdown options
   */
  options: Array<String>;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

export const Dropdown = ({ theme, options }: DropdownProps): JSX.Element => {
  const [showContent, setShowContent] = useState(false);

  return (
    <div className="container">
      <div
        className="header-container"
        onClick={() => setShowContent((visible) => !visible)}
      >
        <h3>Click Here</h3>
        <BiDownArrowCircle size={25} />
      </div>
      {showContent &&
        options.map((option) => (
          <div className="menu-items-container">
            <div className={`menu-item-${theme}`}>
              <p>{option}</p>
            </div>
            <hr />
          </div>
        ))}
    </div>
  );
};

Dropdown.defaultProps = {
  theme: 'dark',
  options: ['first', 'second', 'third', 'forth', 'fifth'],
};
