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

export const updateProduct = async (payload: Product) => {
  console.log('payload', payload);
  const response = await fetch(`/api/products/${payload.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (response.ok) {
    console.log('response', response);
    return await response.json();
  }

  throw new Error('Something went wrong!');
};
