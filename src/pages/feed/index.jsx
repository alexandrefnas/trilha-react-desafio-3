import React from 'react';

import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';
import { Header } from "../../components/Header";


import {Container, Column, Title, TitleHighLight } from "./styles";

const Feed = () => {
    return (<>
        <Header autenticado={true}/>   
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
                <TitleHighLight># RANKING 5 TOP DA SEMANA</TitleHighLight>
                <UserInfo percentual={85} nome="Alexandre Fernandes" image="https://avatars.githubusercontent.com/u/130259118?s=400&u=d2eb5267db5f43722e65ba0252aeada665af9cbc&v=4"/>
                <UserInfo percentual={65} nome="Alexandre Fernandes" image="https://avatars.githubusercontent.com/u/130259118?s=400&u=d2eb5267db5f43722e65ba0252aeada665af9cbc&v=4"/>
                <UserInfo percentual={43} nome="Alexandre Fernandes" image="https://avatars.githubusercontent.com/u/130259118?s=400&u=d2eb5267db5f43722e65ba0252aeada665af9cbc&v=4"/>
                <UserInfo percentual={20} nome="Alexandre Fernandes" image="https://avatars.githubusercontent.com/u/130259118?s=400&u=d2eb5267db5f43722e65ba0252aeada665af9cbc&v=4"/>
                <UserInfo percentual={10} nome="Alexandre Fernandes" image="https://avatars.githubusercontent.com/u/130259118?s=400&u=d2eb5267db5f43722e65ba0252aeada665af9cbc&v=4"/>
            </Column>
        </Container>
    </>);
}

export { Feed };