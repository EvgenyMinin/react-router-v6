import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './styles.module.css';

export const Navigation = () => (
  <nav className={styles.container}>
    <NavLink
      to="/"
      className={({ isActive }) => (isActive ? `${styles.active}` : '')}
      end
    >
      Products
    </NavLink>
    <NavLink
      to="/admin"
      className={({ isActive }) => (isActive ? `${styles.active}` : '')}
    >
      Admin
    </NavLink>
  </nav>
);
