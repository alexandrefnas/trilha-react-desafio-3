import { useNavigate } from "react-router-dom";
import { MdEmail, MdLock } from 'react-icons/md';
import { Button } from '../../components/Button';
import { Header } from "../../components/Header";
import { Input } from '../../components/Input';
import { api } from '../../services/api';

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";



import {Collumn, Container, CriarText, EsqueciText, Row, SubtitleLogin, Title, TitleLogin, Wrapper} from "./styles";

const schema = yup.object({
    email: yup.string().email('email não é valido').required('Campo obrigatorio'),
    password: yup.string().min(3, 'No minimo 3 caracteres').required('Campo obrigatorio'),
}).required();

const Login = () => {
    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    // console.log(isValid, errors);

    const onSubmit = async formData => {
        try {
            const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`);
            if(data.length && data[0].id){
                navigate('/feed') 
                return
            }
            
            alert('Email ou senha inválido!')                
            
        } catch {
            alert('Houve um erro, tente novamente')
        }
        // console.log(data);
    }
    
    const handleClickCad = () => {    
        navigate('/cad')
    }

    return (<>
        <Header />
        <Container>
            <Collumn>
                <Title>
                    A plataforma para voce aprender com experts, dominar as principais tecnologias
                    e entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Collumn>
            <Collumn>
                <Wrapper>
                    <TitleLogin> Faça seu cadastro</TitleLogin>
                    <SubtitleLogin> Faça seu login e make the change._</SubtitleLogin>
                    <form onSubmit={handleSubmit(onSubmit)}>                        
                        <Input
                            name="email"
                            control={control}
                            errorMessage={errors?.email?.message}
                            placeholder="E-mail"
                            leftIcon={<MdEmail />}
                        />
                        <Input
                            name="password"
                            control={control}
                            errorMessage={errors?.password?.message}
                            placeholder="Senha"
                            type="password"
                            leftIcon={<MdLock />}
                        />
                        <Button title="Entrar" variant="secondary" type="submit" />
                    </form>
                    <Row>
                        <EsqueciText>Esqueci minha senha</EsqueciText>
                        <CriarText onClick={handleClickCad}>Criar Conta</CriarText>
                    </Row>
                </Wrapper>
                {/* <Input placeholder="email" /> */}
            </Collumn>
        </Container>
    </>);
}

export { Login };