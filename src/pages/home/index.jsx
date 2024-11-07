import { useNavigate } from "react-router-dom";

import banerImage from '../../assets/banner.png'
import { Button } from '../../components/Button';
import { Header } from "../../components/Header";

import {Container, TextContent, Title, TitleHighLight, DivButton } from "./styles";

const Home = () => {
    const navigate = useNavigate();

    const handleClickSignIn = () => {
        navigate('/login')
    }

    return (
        <>
            <Header />   
            <Container>
                <div>
                    <div>
                    <Title>
                        <TitleHighLight>
                            Implemente
                            <br/>
                        </TitleHighLight>
                        O seu futuro Global agora!
                    </Title>
                    <TextContent>
                        Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo
                        desafio profissional, evoluindo em comunidade com os melhores experts.
                    </TextContent>
                    </div>
                    <DivButton>
                        <Button title="Começar agora" variant="secondary" onClick={handleClickSignIn}/>
                    </DivButton>
                </div>
                <div>
                    <img src={banerImage} alt="Imagem principal" />
                </div>
            </Container>
        </>
    );
}

export { Home };