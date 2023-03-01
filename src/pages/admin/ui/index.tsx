import { Link, Route, Routes } from 'react-router-dom';

import { ProductEdit } from '../../../entities/product-edit';
import { ProductList } from '../../../entities/product-list';

import styles from './styles.module.css';

export const AdminScreen = () => {
  return (
    <div>
      <div className={styles.header}>
        <h1>Admin</h1>
        <Link to="new" className={styles.link}>
          New
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/new" element={<ProductEdit />} />
        <Route path="/:id" element={<ProductEdit isEdit />} />
      </Routes>
    </div>
  );
};
