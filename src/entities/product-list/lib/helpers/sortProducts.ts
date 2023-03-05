import { Product } from '../../../../shared/lib';

export const sortProductsFromParams = (
  data: Product[],
  params: { [k: string]: string }
) => {
  const sorted = data.sort((x, y) => {
    const { sort, order } = params;
    switch (order) {
      case 'ascending': {
        return x[sort as keyof Product] > y[sort as keyof Product] ? 1 : -1;
      }
      case 'descending': {
        return x[sort as keyof Product] < y[sort as keyof Product] ? 1 : -1;
      }
      default: {
        return 0;
      }
    }
  });

  return sorted;
};
