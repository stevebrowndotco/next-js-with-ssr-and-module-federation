import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

type Item = {
  id: number;
  name: string;
};

type FetchItemsParams = {
  criteria: string;
  start: number;
  pagesize: number;
  contextid?: string;
  searchTerm: string;
};

export const fetchProducts = async ({
  criteria,
  start,
  pagesize,
  contextid,
  searchTerm,
}: FetchItemsParams): Promise<any> => await axios.get('/products-fragment');

export const useGetProductFragments = ({
  criteria,
  start,
  pagesize,
  contextid,
  searchTerm,
}: FetchItemsParams) => {
  return useQuery<unknown, Error>(
    ['items', criteria, start, pagesize, contextid, searchTerm],
    () =>
      fetchProducts({ criteria, start, pagesize, contextid, searchTerm }).then(
        (res) => {
          const products = res.data
            .toString()
            .split('<=>')
            .filter((data: Array<string>) => {
              return data.indexOf('<script') > -1;
            });
          console.log('products', res.data.toString().split('<=>'));
          return products;
        }
      )
  );
};
