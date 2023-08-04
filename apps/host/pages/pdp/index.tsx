import { GetServerSidePropsContext } from 'next';

// @ts-ignore
import RemotePDP from 'pdp/index';

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
