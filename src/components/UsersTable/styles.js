import styled from "styled-components";

export const Container = styled.div`
  table {
    width: 100%;
    padding: 0.5rem 0;
    border-collapse: collapse;

    th {
      color: var(--text-title);
      padding: 1rem;
      font-weight: 700;
      text-align: left;
      line-height: 1.5rem;
      font-size: 0.9375rem;
    }
    tbody {
      tr {
        width: 100%;
        border-bottom: 1px solid #d7d7d7;
        border-top: 1px solid #d7d7d7;
      }

      td {
        padding: 1rem;
        border: none;
        font-size: 0.875rem;
        color: #1f2425;

        &:last-child {
          color: #676570;
          display: flex;
          align-items: center;
          justify-content: end;

          svg {
            font-size: 1rem;
            cursor: pointer;

            transition: filter 0.2s;

            &:hover {
              filter: brightness(0.6);
            }

            &:first-child {
              font-size: 1.125rem;
            }
            &:last-child {
              font-size: 0.875rem;
            }
            & + svg {
              margin-left: 1rem;
            }
          }
        }
      }
    }
  }
`;

export const Footer = styled.footer`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    background: var(--blue);
    width: 6rem;
    height: 1.8rem;
    border: none;
    border-radius: 0.25rem;
    color: var(--white);
    font-weight: 700;
    transition: all 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }

  div {
    display: grid;
    grid-template-columns: 1fr 0.5fr 0.7fr;
    align-items: center;
    color: var(--text);
    font-size: 0.875rem;

    p {
      justify-self: flex-end;
    }

    select {
      border: none;
      cursor: pointer;
      justify-self: center;
    }
  }
`;
