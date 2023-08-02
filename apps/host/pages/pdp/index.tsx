import { GetServerSidePropsContext } from 'next';
import { lazy } from 'react';

// @ts-ignore
const RemotePDP = lazy(() => import('pdp/index'));

export function PDPPage(props: Record<string, any>) {
  console.log('props', props);
  return <RemotePDP {...props} />;
}

export async function getServerSideProps(
  context: GetServerSidePropsContext<{ id: string }>
) {
  // @ts-ignore
  const page = await import('pdp/index');

  return page.getServerSideProps(context);
}

export default PDPPage;
