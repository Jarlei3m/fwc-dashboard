import { useRef } from "react";
import { auth } from "../../lib/firebase";
import { Container } from "./styles";

export function LoginForm() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const signUp = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((user) => {
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
        window.alert("Por favor, preencha os campos corretamente.");
      });
  };

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((user) => {
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
        window.alert(
          "Usuário não encontrado, preencha corretamente ou cadastre-se."
        );
      });
  };

  return (
    <Container>
      <form action="">
        <h2>Entrar / Cadastrar</h2>
        <div>
          <input ref={emailRef} type="email" required placeholder="Email*" />
          <input
            ref={passwordRef}
            type="password"
            required
            placeholder="Senha*"
            minLength="6"
          />
        </div>

        <div>
          <button onClick={signIn}>Entrar</button>
          <p>
            Não possui conta? Preencha os campos e clique em{" "}
            <span onClick={signUp}>Cadastrar.</span>
          </p>
        </div>
      </form>
    </Container>
  );
}
