import { BsFillPersonFill, BsFillBellFill } from "react-icons/bs";
import { Container, Content } from "./styles";

export function Header() {
  return (
    <Container>
      <Content>
        <h4>Test Painel</h4>
        <BsFillPersonFill />
        <BsFillBellFill />
      </Content>
    </Container>
  );
}
