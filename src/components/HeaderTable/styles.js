import styled from "styled-components";

export const Container = styled.header`
  padding: 1rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    color: var(--blue);
  }

  button {
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
    border: 2px solid gray;
    font-size: 1.5rem;
    margin-right: 1.5rem;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
