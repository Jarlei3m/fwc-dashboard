import styled from "styled-components";

export const Container = styled.form`
  h2 {
    color: var(--blue-dark);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  div {
    max-width: 470px;
    margin: 0 auto;

    input,
    select {
      width: 100%;
      padding: 0 1rem;
      height: 3rem;
      border-radius: 0.25rem;
      border: 1px solid #d7d7d7;
      color: var(--text);

      & + input {
        margin-top: 1rem;
      }
    }

    div {
      margin-top: 1rem;
      display: flex;
      align-items: center;
      color: var(--text);

      input {
        height: unset;
        width: unset;
        margin-left: 0.5rem;
      }
    }

    select {
      margin-top: 0.375rem;
      color: var(--text);
      height: 3.375rem;
    }

    &:last-child {
      margin-top: 4rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.5rem;

      button {
        font-weight: 700;
        font-size: 1rem;
        padding: 0 1.5rem;
        width: 100%;
        height: 2.5rem;
        background-color: var(--blue);
        color: var(--white);
        border: none;
        border-radius: 0.25rem;

        transition: filter 0.2s;

        &:hover {
          filter: brightness(0.9);
        }
      }
    }
  }
`;
