import { MdEmail, MdLock } from 'react-icons/md';
import { FaUser } from "react-icons/fa";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { Column, Container, JaTemConta, Politica, Row, SubTitleLogin, Title, TitleLogin, Wrapper, Login } from './styles';

const Register = () => {
    return (<>
        <Header />
        <Container>
            <Column>
                <Title>
                A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Comece agora grátis</TitleLogin>
                    <SubTitleLogin>Crie sua conta e make the change._</SubTitleLogin>
                    <form>
                        <Input placeholder="Nome completo" leftIcon={<FaUser />}/>
                        <Input placeholder="E-mail" leftIcon={<MdEmail />}/>
                        <Input placeholder="Password" type="password" leftIcon={<MdLock />} />
                        <Button title="Criar minha conta" variant="secondary" />
                    </form>
                    <Row>
                        <Politica>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</Politica>
                    </Row>
                    <Row>
                        <JaTemConta>Já tenho conta.</JaTemConta>
                        <Login>Fazer login</Login>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Register }