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
}: FetchItemsParams): Promise<Item[]> => await axios.get('/item-numbers');

export const useGetProducts = ({
  criteria,
  start,
  pagesize,
  contextid,
  searchTerm,
}: FetchItemsParams) => {
  return useQuery<Item[], Error>(
    ['items', criteria, start, pagesize, contextid, searchTerm],
    () => fetchProducts({ criteria, start, pagesize, contextid, searchTerm })
  );
};
