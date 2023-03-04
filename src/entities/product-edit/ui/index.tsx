import { FC, SyntheticEvent, useEffect, useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import { createProduct, updateProduct, getProduct } from '../api';
import { ProductDelete } from '../../product-delete';

import styles from './styles.module.css';
import { SubmitButton } from '../../../shared/ui';

type Form = {
  id: string;
  name: string;
  description: string;
  price: number;
};

type OwnProps = {
  isEdit?: boolean;
};

export const ProductEdit: FC<OwnProps> = ({ isEdit }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [form, setForm] = useState<Form>({} as Form);

  useEffect(() => {
    if (!isEdit) {
      setForm({
        id: '',
        description: '',
        name: '',
        price: 0,
      });

      return;
    }

    (async () => {
      try {
        if (id) {
          const product = await getProduct(id);
          setForm(product);
        }
      } catch (error) {
        console.warn(error);
        navigate('/admin', { replace: true });
      }
    })();
  }, [id]);

  const updateField = ({
    name,
    value,
  }: {
    name: string;
    value: string | number;
  }) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleCreate = async (e: SyntheticEvent) => {
    try {
      e.preventDefault();
      const { id } = await createProduct(form);
      navigate(`/admin/${id}`);
    } catch (error) {
      console.warn(error);
    }
  };

  const handleUpdate = async (e: SyntheticEvent) => {
    try {
      e.preventDefault();
      await updateProduct(form);
      alert(`Updated ${form.name}`);
      navigate('/admin');
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <form className={styles.form}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        className={styles.input}
        value={form.name}
        onChange={({ target }) => {
          updateField(target);
        }}
      />
      <input
        type="number"
        name="price"
        placeholder="Price"
        value={form.price}
        className={styles.input}
        onChange={({ target: { name, value } }) => {
          updateField({ name, value: parseInt(value, 10) });
        }}
      />
      <textarea
        name="description"
        placeholder="Description"
        value={form.description}
        className={styles.textarea}
        onChange={({ target }) => {
          updateField(target);
        }}
      />

      {!isEdit && <SubmitButton label="Create" onClick={handleCreate} />}

      {isEdit && (
        <div className={styles.buttonContainer}>
          <SubmitButton label="Update" onClick={handleUpdate} />
          <ProductDelete id={form.id} name={form.name} />
        </div>
      )}
    </form>
  );
};
