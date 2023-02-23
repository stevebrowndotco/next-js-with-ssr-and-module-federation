import { useGetProductFragments } from '../use-get-product-fragments/use-get-product-fragments';
import { useGetProducts } from '../use-get-products/use-get-products';

/* eslint-disable-next-line */
export interface PlPListProps {}

export function PlPList(props: PlPListProps) {
  // const { data: productNumbers } = useGetProducts({
  //   criteria: 'https://ci-test.next.co.uk',
  //   start: 0,
  //   pagesize: 8,
  //   searchTerm: 'suits',
  // });
  const { data: productFragments } = useGetProductFragments({
    criteria: 'https://ci-test.next.co.uk',
    start: 0,
    pagesize: 8,
    searchTerm: 'suits',
  });

  console.log('productFragments', productFragments);

  return <>Welcome to PlPList!</>;
}

export default PlPList;
