import React from "react";
import  {FiThumbsUp} from "react-icons/fi";

import {
    CardContainer,
    Content,
    HasInfo,
    ImageBackground,
    PostInfo,
    UserInfo,
    UserPicture
} from './styles';

const Card = () => {
    return (
        <CardContainer>
            <ImageBackground src="https://wallpapers.com/images/hd/purple-gradient-background-1920-x-1080-06vdpubkg9sljoie.jpg" />
            <Content>
                <UserInfo>
                    <UserPicture src="https://avatars.githubusercontent.com/u/124843205?v=4" />
                    <div>
                        <h4>Julia Romenia</h4>
                        <p>Há 8 minutos</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>Projeto para curso de HTML e CSS</h4>
                    <p>Projeto feito no curso de html e css no bootcamp da dio do Global avanade...<strong>Saiba Mais</strong></p>
                </PostInfo>
                <HasInfo>
                    <h4>#HTML #CSS #JavaScript</h4>
                    <p>
                        <FiThumbsUp /> 10
                    </p>
                </HasInfo>
            </Content>
        </CardContainer>
    );
};

export { Card }