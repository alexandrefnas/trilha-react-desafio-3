import { useNavigate } from "react-router-dom";
import { MdEmail, MdLock, MdPerson } from 'react-icons/md';
import { Button } from '../../components/Button';
import { Header } from "../../components/Header";
import { Input } from '../../components/Input';
import { api } from '../../services/api';

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";



import {Collumn, Container, Text, SubtitleCad, Title, TitleCad, Wrapper, DivButton} from "./styles";

const schema = yup.object({
    name: yup.string().min(3, 'No minimo 3 caracteres').required('Campo obrigatorio'),
    email: yup.string().email('email não é valido').required('Campo obrigatorio'),
    password: yup.string().min(3, 'No minimo 3 caracteres').required('Campo obrigatorio'),
}).required();

const Cadastro = () => {
    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    const onSubmit = async formData => {
           
    }

    const handleClickLogin = () => {
        navigate('/login')    
      }
    
    // const handleClickCad = () => {
    // }

    return (<>
        <Header />
        <Container>
            <Collumn>
                <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Collumn>
            <Collumn>
                <Wrapper>
                    <TitleCad>Comece agora grátis</TitleCad>
                    <SubtitleCad> Crie sua conta e make the change._</SubtitleCad>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <Input
                            name="name"
                            control={control}
                            errorMessage={errors?.name?.message}
                            placeholder="Nome"
                            leftIcon={<MdPerson />}
                        />
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
                        <DivButton>
                            <Button title="Criar minha conta" variant="secondary" type="submit" />
                        </DivButton>
                    </form>
                    <Text>
                        Ao Clicar em "Criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.
                        <h4>Já tenho conta. <strong onClick={handleClickLogin}>Fazer login</strong> </h4>
                    </Text>
                </Wrapper>
            </Collumn>
        </Container>
    </>);
}

export { Cadastro };