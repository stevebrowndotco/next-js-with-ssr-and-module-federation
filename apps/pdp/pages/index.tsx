import Link from 'next/link';

interface Props {
  message: string;
}

export function Index({ message }: Props) {
  return (
    <div>
      <Link href="/">{message}</Link>
    </div>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      message: 'PDP test',
    },
  };
}

export default Index;
