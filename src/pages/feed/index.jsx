import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";

import { Container, Column, Title, TitleHighlight } from './styles';

const Feed = () => {
    return (<>
        <Header autenticado={true} />
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
                <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
                <UserInfo percentual={80} nome="Julia Romenia" image="https://avatars.githubusercontent.com/u/124843205?v=4" />
                <UserInfo percentual={70} nome="Julia Romenia" image="https://avatars.githubusercontent.com/u/124843205?v=4" />
                <UserInfo percentual={60} nome="Julia Romenia" image="https://avatars.githubusercontent.com/u/124843205?v=4" />
                <UserInfo percentual={50} nome="Julia Romenia" image="https://avatars.githubusercontent.com/u/124843205?v=4" />
                <UserInfo percentual={40} nome="Julia Romenia" image="https://avatars.githubusercontent.com/u/124843205?v=4" />
            </Column>            
        </Container>
    </>)
}

export { Feed }