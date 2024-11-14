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
                <UserInfo percentual={80} nome="Julia Romenia" image="https://w7.pngwing.com/pngs/915/511/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png" />
                <UserInfo percentual={70} nome="Jose Luiz" image="https://cdn-icons-png.flaticon.com/256/147/147142.png" />
                <UserInfo percentual={60} nome="Maria Carla" image="https://w7.pngwing.com/pngs/831/902/png-transparent-account-avatar-profile-user-avatars-icon.png" />
                <UserInfo percentual={50} nome="Thomas Junior" image="https://cdn-icons-png.flaticon.com/512/8090/8090465.png" />
                <UserInfo percentual={40} nome="Lorena Silva" image="https://cdn.icon-icons.com/icons2/2643/PNG/512/female_woman_people_person_avatar_black_tone_icon_159364.png" />
            </Column>            
        </Container>
    </>)
}

export { Feed }