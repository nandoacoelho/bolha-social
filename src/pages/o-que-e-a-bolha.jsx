import Footer from '../components/Footer/Footer'
import Helmet from 'react-helmet'
import Hero from '../components/Hero/Hero'
import React from 'react'
import config from '../../config/SiteConfig'
import whatHeroImage1 from '../assets/images/what1-hero.png'
import whatHeroImage2 from '../assets/images/what2-hero.png'
import whatHeroImage3 from '../assets/images/what3-hero.png'
import whatHeroImage4 from '../assets/images/what4-hero.png'
import whatHeroImage5 from '../assets/images/what5-hero.png'

const What = () => (
  <div className="container about-container">
    <Helmet title={`O que é a bolha social? | ${config.siteTitle}`} />
    <Hero
      title={'O que é a bolha social?'}
      body={[
        'Já percebeu que, quando você acessa a internet, você começa a ter um fluxo não linear de informações?',
        'Uma pesquisa simples que, inicialmente, poderia ser rápida, mas quando você percebe, já se passaram três horas e agora seu navegador está no Youtube reproduzindo um vídeo de pandas risonhos.'
      ]}
      image={whatHeroImage1}
    />
    <Hero
      isLeftImage
      body={[
        'Ficamos tão imersos na navegação que não percebemos mais quais páginas acessamos ou temos alguma lembrança do conteúdo que consumimos. E daí?'
      ]}
      image={whatHeroImage2}
    />
    <Hero
      body={[
        'Imersos, nós clicamos em páginas e mais páginas de assuntos do nosso interesse. E, no fim das contas, ficamos mais tempo do que geralmente gostaríamos, pois os algoritmos são muito bons em nos recomendar temas que, através do nosso perfil ou de histórico de busca, nos seduzem e nos mantém vidrados.'
      ]}
      image={whatHeroImage3}
    />
    <Hero
      isLeftImage
      body={[
        'Na bolha social, você tem acesso ao seu próprio consumo de conteúdo. Ou seja, parte do que os algoritmos sabem sobre você está sendo disponibilizado para o seu autoconhecimento.',
        'Assim, você pode entender de como é composta a sua bolha de conteúdo e comparar com a de todos que participaram desse experimento.'
      ]}
      image={whatHeroImage4}
    />
    <Hero
      body={[
        'Além de descobrir mais sobre a sua bolha, ao ver o comparativo, o usuário estoura a bolha. Uma vez que ele tem consciência, na prática, que existe outra configuração de consumo do  conteúdo que não a sua.'
      ]}
      image={whatHeroImage5}
      linkTitle="baixe aqui e estoure a sua bolha!"
      linkUrl="https://chrome.google.com/webstore/detail/kallcfbeikglpoaapgfldobcfkgdcfle/"
    />
    <Footer />
  </div>
)

export default What
