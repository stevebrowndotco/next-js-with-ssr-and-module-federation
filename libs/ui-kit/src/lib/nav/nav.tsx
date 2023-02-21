import styled from 'styled-components';

/* eslint-disable-next-line */
export interface NavProps {}

const StyledNav = styled.div`
  color: pink;
`;

export function Nav(props: NavProps) {
  return (
    <StyledNav>
      <h1>Welcome to Nav!</h1>
    </StyledNav>
  );
}

export default Nav;
