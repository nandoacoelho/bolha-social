import React, { Component, Fragment } from 'react'

import ALIMENTACAO from '../../assets/icons/ALIMENTACAO.svg'
import CARROS from '../../assets/icons/CARROS.svg'
import CIENCIA from '../../assets/icons/CIENCIA.svg'
import CategoryDescription from '../CategoryDescription/CategoryDescription'
import DECORACAO from '../../assets/icons/DECORACAO.svg'
import ECONOMIA from '../../assets/icons/ECONOMIA.svg'
import EDUCACAO from '../../assets/icons/EDUCACAO.svg'
import ESOTERISMO from '../../assets/icons/ESOTERISMO.svg'
import ESPORTES from '../../assets/icons/ESPORTES.svg'
import FACEBOOK from '../../assets/icons/FACEBOOK.svg'
import INSTAGRAM from '../../assets/icons/INSTAGRAM.svg'
import JOGOS from '../../assets/icons/JOGOS.svg'
import LINKEDIN from '../../assets/icons/LINKEDIN.svg'
import MODA from '../../assets/icons/MODA.svg'
import NATUREZA from '../../assets/icons/NATUREZA.svg'
import NOTICIAS from '../../assets/icons/NOTICIAS.svg'
import POLITICA from '../../assets/icons/POLITICA.svg'
import SERIESEFILMES from '../../assets/icons/SERIESEFILMES.svg'
import SEXO from '../../assets/icons/SEXO.svg'
import Slider from 'react-slick'
import TECNOLOGIA from '../../assets/icons/TECNOLOGIA.svg'
import TVECELEBRIDADES from '../../assets/icons/TVECELEBRIDADES.svg'
import TWITTER from '../../assets/icons/TWITTER.svg'
import VIAGENS from '../../assets/icons/VIAGENS.svg'
import YOUTUBE from '../../assets/icons/YOUTUBE.svg'
import { getCategoryTitle } from '../../utils/use-category-title'
import getColor from '../../utils/use-category-color'
import sortBy from 'lodash/sortBy'
import styles from './CategoriesSlider.module.scss'

export default class CategoriesSlider extends Component {
  render() {
    const { historyData } = this.props
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }

    const descriptions = [
      {
        image: ALIMENTACAO,
        title: 'ALIMENTAÇÃO',
        description:
          'São captados assuntos e temas descritos nas categorias da url amigável dos sites acessados. As palavras chaves como alimentação, saúde, nutrição, alimentação saudável, comida, receitas, vegano entre outras. Atualmente, a leitura do algoritmo está focada na categoria macro dos sites.'
      },
      {
        image: CARROS,
        title: 'CARROS',
        description:
          'São captados assuntos e temas descritos nas categorias da url amigável dos sites acessados. As palavras chaves como pneus, automóveis, quatro rodas, carro, câmbio, motor, entre outras. Atualmente, a leitura do algoritmo está focada na categoria macro dos sites.'
      },
      {
        image: CIENCIA,
        title: 'CIÊNCIA',
        description:
          'São captados assuntos e temas descritos nas categorias da url amigável dos sites acessados. As palavras chaves como ciência, pesquisa, química, laboratório, testes, artigos acadêmicos, lattes, entre outras. Atualmente, a leitura do algoritmo está focada na categoria macro dos sites.'
      },
      {
        image: DECORACAO,
        title: 'DECORAÇÃO',
        description:
          'São captados assuntos e temas descritos nas categorias da url amigável dos sites acessados. As palavras chaves como decoração, papel de parede, pantone, revista de decoração, casa vogue, iluminação, escritório, arquiteto, entre outras. Atualmente, a leitura do algoritmo está focada na categoria macro dos sites.'
      },
      {
        image: ECONOMIA,
        title: 'ECONOMIA',
        description:
          'São captados assuntos e temas descritos nas categorias da url amigável dos sites acessados. As palavras chaves como economia, poupança, financeiro, câmbio, dólar, Bovespa, bolsa de valores, entre outras. Atualmente, a leitura do algoritmo está focada na categoria macro dos sites.'
      },
      {
        image: EDUCACAO,
        title: 'EDUCAÇÃO',
        description:
          'São captados assuntos e temas descritos nas categorias da url amigável dos sites acessados. As palavras chaves como educação, ensino, ensino à distância, universidade, ensino médio, sala de aula, aprendizado, entre outras. Atualmente, a leitura do algoritmo está focada na categoria macro dos sites.'
      },
      {
        image: ESOTERISMO,
        title: 'ESOTERISMO',
        description:
          'São captados assuntos e temas descritos nas categorias da url amigável dos sites acessados. As palavras chaves como esoterismo, signos, horóscopo, mapa astral, zodíaco, tarot, wicca, thelema, Aleister Crawley, entre outras. Atualmente, a leitura do algoritmo está focada na categoria macro dos sites.'
      },
      {
        image: ESPORTES,
        title: 'ESPORTES',
        description:
          'São captados assuntos e temas descritos nas categorias da url amigável dos sites acessados. As palavras chaves como esportes, vôlei, basquete, futebol, olimpíadas, tênis, jogadores, copa do mundo, e-sports, entre outras. Atualmente, a leitura do algoritmo está focada na categoria macro dos sites.'
      },
      {
        image: FACEBOOK,
        title: 'FACEBOOK',
        description:
          'São captados assuntos e temas descritos nas categorias da url amigável dos sites acessados. A palavra-chave Facebook já condiciona a localização de que o conteúdo daquela página é sobre a rede social ou o conteúdo de acesso veio direto da plataforma.'
      },
      {
        image: INSTAGRAM,
        title: 'INSTAGRAM',
        description:
          'São captados assuntos e temas descritos nas categorias da url amigável dos sites acessados. A palavra-chave Instagram já condiciona a localização de que o conteúdo daquela página é sobre a rede social ou o conteúdo de acesso veio direto da plataforma.'
      },
      {
        image: TWITTER,
        title: 'TWITTER',
        description:
          'São captados assuntos e temas descritos nas categorias da url amigável dos sites acessados. A palavra-chave Twitter já condiciona a localização de que o conteúdo daquela página é sobre a rede social ou o conteúdo de acesso veio direto da microplataforma.'
      },
      {
        image: YOUTUBE,
        title: 'YOUTUBE',
        description:
          'São captados assuntos e temas descritos nas categorias da url amigável dos sites acessados. A palavra-chave YouTube já condiciona a localização de que o conteúdo daquela página é sobre a rede social ou o conteúdo de acesso veio direto da plataforma de vídeos.'
      },
      {
        image: JOGOS,
        title: 'JOGOS',
        description:
          'São captados assuntos e temas descritos nas categorias da url amigável dos sites acessados. As palavras chaves como jogo, vídeo game, jogatina, wii, Xbox, Playstation, poker, resta um, Blizzard, multiplayer, MMPOG, entre outras. Atualmente, a leitura do algoritmo está focada na categoria macro dos sites.'
      },
      {
        image: LINKEDIN,
        title: 'LINKEDIN',
        description:
          'São captados assuntos e temas descritos nas categorias da url amigável dos sites acessados. A palavra-chave Linkedin já condiciona a localização de que o conteúdo daquela página é sobre a rede social de profissionais ou o que conteúdo de acesso veio direto da plataforma.'
      },
      {
        image: MODA,
        title: 'MODA',
        description:
          'São captados assuntos e temas descritos nas categorias da url amigável dos sites acessados. As palavras chaves como moda, estilo, desfile, coleção, fashion week, modelos, passarela, fashion, primavera-verão, outono-inverno, entre outras. Atualmente, a leitura do algoritmo está focada na categoria macro dos sites.'
      },
      {
        image: NATUREZA,
        title: 'NATUREZA',
        description:
          'São captados assuntos e temas descritos nas categorias da url amigável dos sites acessados. As palavras chaves como natureza, montanhas, sustentabilidade, coleção, oceano, mares, animal planet, florestas, entre outras. Atualmente, a leitura do algoritmo está focada na categoria macro dos sites.'
      },
      {
        image: NOTICIAS,
        title: 'NOTÍCIAS',
        description:
          'São captados assuntos e temas descritos nas categorias da url amigável dos sites acessados.  Nesta categoria específica, foram concentrados os principais veículos de notícias do país como G1, Folha de São Paulo, Estadão, Uol, O Dia, O Extra, entre outros. Atualmente, a leitura do algoritmo está focada na categoria macro dos sites.'
      },
      {
        image: POLITICA,
        title: 'POLÍTICA',
        description:
          'São captados assuntos e temas descritos nas categorias da url amigável dos sites acessados. As palavras chaves como política, eleições, presidente, lava jato, deputado, voto, candidato, vereador, entre outras. Atualmente, a leitura do algoritmo está focada na categoria macro dos sites.'
      },
      {
        image: SERIESEFILMES,
        title: 'SÉRIES E FILMES',
        description:
          'São captados assuntos e temas descritos nas categorias da url amigável dos sites acessados. As palavras chaves como séries, filmes, Netflix, TNT, AXN, universal, crackle, Paramount, telecine, warner, omelete, HBO, entre outras. Atualmente, a leitura do algoritmo está focada na categoria macro dos sites.'
      },
      {
        image: SEXO,
        title: 'SEXO',
        description:
          'São captados assuntos e temas descritos nas categorias da url amigável dos sites acessados. As palavras chaves como sexo, pornhub, oral, contos eróticos, xvideos, brazzers, brasileirinhas filmes, tushy, porntube, entre outras. Atualmente, a leitura do algoritmo está focada na categoria macro dos sites.'
      },
      {
        image: TECNOLOGIA,
        title: 'TECNOLOGIA',
        description:
          'São captados assuntos e temas descritos nas categorias da url amigável dos sites acessados. As palavras chaves como tecnologia, imasters, cibercultura, computador, TI, celular, intel, tech, tecnologia da informação, machine learning, computador entre outras. Atualmente, a leitura do algoritmo está focada na categoria macro dos sites.'
      },
      {
        image: TVECELEBRIDADES,
        title: 'TV e CELEBRIDADES',
        description:
          'São captados assuntos e temas descritos nas categorias da url amigável dos sites acessados. As palavras chaves como tv, celebridades, ator, purepeople, rede tv, atriz, blastingnews, hugo gloss, globo, E!, globo.com, entre outras. Atualmente, a leitura do algoritmo está focada na categoria macro dos sites.'
      },
      {
        image: VIAGENS,
        title: 'VIAGENS',
        description:
          'São captados assuntos e temas descritos nas categorias da url amigável dos sites acessados. As palavras chaves como viagens, mochilão, LATAM, GOL, AZUL, hotel urbano, Europa, Estados Unidos, América Latina, entre outras. Atualmente, a leitura do algoritmo está focada na categoria macro dos sites.'
      }
    ]
    console.log('historyData', historyData)
    console.log('items', descriptions)

    return (
      <div id="bubble-description-wrapper" className={styles.eachBubbleDataWrapper}>
        <div className={styles.categoriesListWrapper}>
          <p className={styles.title}>O que tem em cada bolha?</p>
          <div className={styles.categoriesList}>
            {historyData &&
              sortBy(historyData.totalPerCategory, item => item.categoryTitle).map(
                (category, index) => (
                  <p
                    key={`list-${category.categoryTitle}`}
                    onClick={() => {
                      this.slider.slickGoTo(index, true)
                    }}
                    className={styles.categoryTitleSmall}
                    style={{
                      color: getColor(category)
                    }}
                  >
                    {getCategoryTitle(category.categoryTitle)}
                  </p>
                )
              )}
          </div>
        </div>
        <div className={styles.categoriesDetails}>
          <button className={styles.prevArrow} onClick={() => this.slider.slickPrev()}>
            {'<'}
          </button>
          <button className={styles.nextArrow} onClick={() => this.slider.slickNext()}>
            {'>'}
          </button>
          <Slider ref={c => (this.slider = c)} {...settings}>
            {sortBy(descriptions, item => item.title).map(item => (
              <CategoryDescription
                key={`slider-${item.title}`}
                image={item.image}
                title={getCategoryTitle(item.title)}
                description={item.description}
              />
            ))}
          </Slider>
        </div>
      </div>
    )
  }
}
