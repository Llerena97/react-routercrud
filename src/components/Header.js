import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <NavLink to="/products" className="navbar-brand" activeClassName="active">
          React CRUD Routing
        </NavLink>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink to="/products" className="nav-link" activeClassName="active">
              Products
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/new-product" className="nav-link" activeClassName="active">
              New Product
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header;
