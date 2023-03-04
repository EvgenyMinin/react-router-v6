import { FC, SyntheticEvent } from 'react';

import { useNavigate } from 'react-router';
import { SubmitButton } from '../../../shared/ui';

import { deleteProduct } from '../api';

type OwnProps = {
  id: string;
  name: string;
};

export const ProductDelete: FC<OwnProps> = ({ id, name }) => {
  const navigate = useNavigate();

  const handleDelete = async (e: SyntheticEvent) => {
    if (!window.confirm(`Really delete ${name}`)) {
      return;
    }
    try {
      e.preventDefault();
      await deleteProduct(id);
      navigate('/admin');
    } catch (error) {
      console.warn(error);
    }
  };

  return <SubmitButton label="Delete" onClick={handleDelete} isDelete />;
};
