import React from 'react'
import { FiThumbsUp } from 'react-icons/fi';

import {
    CardContainer,
    ImageBackground,
    Content,
    HasInfo,
    PostInfo,
    UserInfo,
    UserPicture
} from './styles';

const Card =() => {
  return (
      <CardContainer>
          <ImageBackground src='https://media.licdn.com/dms/image/v2/D5616AQGdw66zuQ7wzQ/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1730216461520?e=1736380800&v=beta&t=Wrajhz4E0l_hgqbAq7i3QHA1mRS7OCsD5GdDVBZHb5w'/>
          <Content>
              <UserInfo>
                  <UserPicture src='https://avatars.githubusercontent.com/u/130259118?s=400&u=d2eb5267db5f43722e65ba0252aeada665af9cbc&v=4' />
                  <div>
                      <h4>Alexandre Fernandes</h4>
                      <p>Há 8 minutos</p>
                  </div>
              </UserInfo>
              <PostInfo>
                  <h4>Projeot para curso de HTML e CSS</h4>
                  <p>Projeto feito o curso de html e css no bootcamp dio do Global avanade ...<strong>Saiba Mais</strong> </p>
              </PostInfo>
              <HasInfo>
                  <h4>#HTML #CSS #Javascript</h4>
                  <p>
                      <FiThumbsUp />10
                  </p>
              </HasInfo>
          </Content>
      
    </CardContainer>
  )
}

export {Card}
