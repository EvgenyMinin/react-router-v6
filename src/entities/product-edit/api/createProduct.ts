import { nanoid } from 'nanoid';

import { Product } from '../../../shared';

export const createProduct = async (payload: Omit<Product, 'id'>) => {
  const response = await fetch(`/api/products`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...payload, id: Date.now().toString() }),
  });

  if (response.ok) {
    return await response.json();
  }

  throw new Error('Something went wrong!');
};
