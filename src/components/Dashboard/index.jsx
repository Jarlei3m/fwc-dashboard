import { UsersTable } from "../UsersTable";
import { Container, Content } from "./styles";

export function Dashboard({ admin }) {
  return (
    <Container>
      <Content>
        <UsersTable admin={admin} />
      </Content>
    </Container>
  );
}
