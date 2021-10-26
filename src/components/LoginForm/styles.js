import styled from "styled-components";
export const Container = styled.div`
  max-width: 420px;
  margin: 4rem auto;
  background: var(--white);
  padding: 2rem;
  border-radius: 0.25rem;

  h2 {
    margin-bottom: 2rem;
    color: var(--blue);
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
      width: 100%;
      height: 2.5rem;
      padding: 0.5rem 1rem;
      border: 1px solid #d7d7d7;
      border-radius: 0.25rem;

      & + input {
        margin-top: 1rem;
      }
    }

    &:last-child {
      margin-top: 2rem;

      button {
        width: 100%;
        height: 2.5rem;
        padding: 0.5rem 1rem;
        background: var(--blue);
        border: none;
        border-radius: 0.25rem;
        color: var(--white);
        transition: filter 0.2s;

        font-size: 1rem;
        font-weight: 700;
        &:hover {
          filter: brightness(0.9);
        }
      }

      p {
        margin-top: 0.5rem;
        font-size: 0.75rem;
        color: var(--text);
        align-self: start;

        span {
          cursor: pointer;
          font-weight: 700;
          transition: all 0.2s;

          &:hover {
            color: var(--blue);
            text-decoration: underline;
          }
        }
      }
    }
  }
`;
