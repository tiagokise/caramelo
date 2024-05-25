'use client';

import { Header } from 'src/components/Header/Header';
import { Menu } from 'src/components/Menu/Menu';
import styled from 'styled-components';

const StyledPage = styled.div`
  .page {
  }
`;

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.styled-components file.
   */
  return (
    <>
      <Menu />
      <Header />
    </>
  );
}
