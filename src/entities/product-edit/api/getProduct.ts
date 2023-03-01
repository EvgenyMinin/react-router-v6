export const getProduct = async (id: string) => {
  const response = await fetch(`/api/products/${id}`);

  if (response.ok) {
    return await response.json();
  }

  throw new Error('Something went wrong');
};
