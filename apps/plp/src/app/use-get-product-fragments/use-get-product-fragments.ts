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

function extractScriptTags(content: string): string[] {
  const regex = /<script\b[^>]*>([\s\S]*?)<\/script>/gm;
  const matches = [];

  let match;
  while ((match = regex.exec(content)) !== null) {
    matches.push(match[1]);
  }

  return matches;
}

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
        (res) =>
          res.data
            .toString()
            .split('<=>')
            .filter((data: Array<string>) => {
              return data.indexOf('<script') > -1;
            })
      )
  );
};
