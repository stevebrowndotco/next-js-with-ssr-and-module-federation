import { useEffect } from 'react';
import { useGetProductFragments } from '../use-get-product-fragments/use-get-product-fragments';
import { useGetProducts } from '../use-get-products/use-get-products';

/* eslint-disable-next-line */
export interface PlPListProps {}

export function PlPList(props: PlPListProps) {
  const { data: productFragments } = useGetProductFragments({
    criteria: 'https://ci-test.next.co.uk',
    start: 0,
    pagesize: 8,
    searchTerm: 'suits',
  });

  return (
    <>
      {(productFragments as Array<string>)?.map((html: string) => {
        return <div dangerouslySetInnerHTML={{ __html: html }} />;
      })}
    </>
  );
}

export default PlPList;
