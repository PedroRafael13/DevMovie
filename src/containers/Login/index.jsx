
import Logo from "../../components/assets/logo.png"
import { Container, ContainerItems, Form, InputContainer, Title } from "./style"

export function Login() {

  return (
    <Container>
      <div className="header">
        <img src={Logo} alt="logo" />
      </div>


      <ContainerItems>
        <Title>Olá Seja bem vindo! faça seu login</Title>

        <Form>
          <InputContainer>
            <label>Emai</label>
            <input type="text" />
          </InputContainer>

          <InputContainer>
            <label>Senha</label>
            <input type="password" />
          </InputContainer>
        </Form>

        <p>Não possui conta ? clique aqui</p>
      </ContainerItems>
    </Container>
  )
}