import styled from "styled-components";

export const Container = styled.header`
  background: var(--blue);
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
`;

export const Content = styled.div`
  margin-left: auto;
  max-width: 1440px;
  margin: 0 auto;
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: var(--white);

  h4 {
    margin-right: 1rem;
  }

  svg:last-child {
    margin-left: 1.5rem;
  }
`;
