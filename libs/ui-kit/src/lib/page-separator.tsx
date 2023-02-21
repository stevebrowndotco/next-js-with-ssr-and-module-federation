import { ReactNode } from 'react';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface PageSeperatorProps {
  children: ReactNode;
}

const StyledUiKit = styled.div`
  padding: 20px;
  border: 1px solid red;
  margin-bottom: 20px;
  color: #333;
  font-family: arial;
`;

export function PageSeparator({ children }: PageSeperatorProps) {
  return <StyledUiKit>{children}</StyledUiKit>;
}

export default PageSeperatorProps;
