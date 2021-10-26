import { Container } from "./styles";

export function HeaderTable({ onOpenNewRegisterModal }) {
  return (
    <Container>
      <h2>Listagem</h2>
      <button type="button" onClick={onOpenNewRegisterModal}>
        +
      </button>
    </Container>
  );
}
