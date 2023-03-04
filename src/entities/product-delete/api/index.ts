export const deleteProduct = async (id: string) => {
  const response = await fetch(`/api/products/${id}`, {
    method: 'DELETE',
  });

  if (response.ok) {
    return await response.json();
  }

  throw new Error('Something went wrong');
};
