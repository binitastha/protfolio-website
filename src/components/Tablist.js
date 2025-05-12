import React from 'react';
import { Link } from 'react-router-dom';
import { BsHouse, BsPerson, BsPersonWorkspace, BsChat } from 'react-icons/bs';

function TabList() {
  return (
    <div className="tab-list d-flex flex-lg-column justify-content-center align-items-end gap-4 gap-lg-2">
      <Link to="/" className="button-secondary" title='Home'>
        <BsHouse size={16} />
      </Link>

      <Link to="/about" className="button-secondary" title='About'>
        <BsPerson size={16} />
      </Link>

      <Link to="/projects" className="button-secondary" title='Protfolio'>
        <BsPersonWorkspace size={16} />
      </Link>

      <Link to="/contact" className="button-secondary" title='Contact'>
        <BsChat size={16} />
      </Link>
    </div>
  );
}

export default TabList;
