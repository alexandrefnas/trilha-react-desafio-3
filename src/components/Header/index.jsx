import React from 'react'
import logo from '../../assets/logo-dio.png'
import { Button } from '../Button'
import { useNavigate } from "react-router-dom";

import {
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper
} from './styles'

const Header = ({ autenticado }) => {
  const navigate = useNavigate();

  const handleClickLogin = () => {
    navigate('/login')    
  }

  const handleClickCad = () => {    
    navigate('/cad')
  }

  const handleClickHome = () => {    
    navigate('/')
  }
  
  return (
    <Wrapper>
        <Container>
            <Row>                
                <img src={logo} alt="Logo da dio" onClick={handleClickHome} />
                {autenticado ? (<>
                  <BuscarInputContainer>
                      <Input placeholder='Buscar...'/>
                  </BuscarInputContainer>
                  <Menu>Live Code</Menu>
                  <Menu>Global</Menu>
                  </>) : null}
            </Row>
        <Row>
          {autenticado ? (<>
              <UserPicture src="https://avatars.githubusercontent.com/u/130259118?s=400&u=d2eb5267db5f43722e65ba0252aeada665af9cbc&v=4"/>
          </>) : (<>
              <MenuRight href='#'>Home</MenuRight>
              <Button title="Entrar" onClick={handleClickLogin}/>
              <Button title="Cadastrar" onClick={handleClickCad}/>
          </>)}
            </Row>
        </Container>
    </Wrapper>
  )
}

export {Header}