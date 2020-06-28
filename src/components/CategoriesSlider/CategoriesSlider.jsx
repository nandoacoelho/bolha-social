import React, { Component } from 'react'

import CategoryDescription from '../CategoryDescription/CategoryDescription'
import Slider from 'react-slick'
import styles from './CategoriesSlider.module.scss'

export default function CategoriesSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  const descriptions = [
    {
      title: 'ALIMENTAÇÃO',
      description:
        'São captados assuntos e temas descritos nas categorias da url amigável dos sites acessados. As palavras chaves como alimentação, saúde, nutrição, alimentação saudável, comida, receitas, vegano entre outras. Atualmente, a leitura do algoritmo está focada na categoria macro dos sites.'
    },
    {
      title: 'CARROS',
      description:
        'São captados assuntos e temas descritos nas categorias da url amigável dos sites acessados. As palavras chaves como pneus, automóveis, quatro rodas, carro, câmbio, motor, entre outras. Atualmente, a leitura do algoritmo está focada na categoria macro dos sites.'
    },
    {
      title: 'CIÊNCIA',
      description:
        'São captados assuntos e temas descritos nas categorias da url amigável dos sites acessados. As palavras chaves como ciência, pesquisa, química, laboratório, testes, artigos acadêmicos, lattes, entre outras. Atualmente, a leitura do algoritmo está focada na categoria macro dos sites.'
    },
    {
      title: 'DECORAÇÃO',
      description:
        'São captados assuntos e temas descritos nas categorias da url amigável dos sites acessados. As palavras chaves como decoração, papel de parede, pantone, revista de decoração, casa vogue, iluminação, escritório, arquiteto, entre outras. Atualmente, a leitura do algoritmo está focada na categoria macro dos sites.'
    },
    {
      title: 'ECONOMIA',
      description:
        'São captados assuntos e temas descritos nas categorias da url amigável dos sites acessados. As palavras chaves como economia, poupança, financeiro, câmbio, dólar, Bovespa, bolsa de valores, entre outras. Atualmente, a leitura do algoritmo está focada na categoria macro dos sites.'
    },
    {
      title: 'EDUCAÇÃO',
      description:
        'São captados assuntos e temas descritos nas categorias da url amigável dos sites acessados. As palavras chaves como educação, ensino, ensino à distância, universidade, ensino médio, sala de aula, aprendizado, entre outras. Atualmente, a leitura do algoritmo está focada na categoria macro dos sites.'
    },
    {
      title: 'ESOTERISMO',
      description:
        'São captados assuntos e temas descritos nas categorias da url amigável dos sites acessados. As palavras chaves como esoterismo, signos, horóscopo, mapa astral, zodíaco, tarot, wicca, thelema, Aleister Crawley, entre outras. Atualmente, a leitura do algoritmo está focada na categoria macro dos sites.'
    },
    {
      title: 'ESPORTES',
      description:
        'São captados assuntos e temas descritos nas categorias da url amigável dos sites acessados. As palavras chaves como esportes, vôlei, basquete, futebol, olimpíadas, tênis, jogadores, copa do mundo, e-sports, entre outras. Atualmente, a leitura do algoritmo está focada na categoria macro dos sites.'
    },
    {
      title: 'FACEBOOK',
      description:
        'São captados assuntos e temas descritos nas categorias da url amigável dos sites acessados. A palavra-chave Facebook já condiciona a localização de que o conteúdo daquela página é sobre a rede social ou o conteúdo de acesso veio direto da plataforma.'
    },
    {
      title: 'INSTAGRAM',
      description:
        'São captados assuntos e temas descritos nas categorias da url amigável dos sites acessados. A palavra-chave Instagram já condiciona a localização de que o conteúdo daquela página é sobre a rede social ou o conteúdo de acesso veio direto datitle:  plataforma.'
    },
    {
      title: 'TWITTER',
      description:
        'São captados assuntos e temas descritos nas categorias da url amigável dos sites acessados. A palavra-chave Twitter já condiciona a localização de que o conteúdo daquela página é sobre a rede social ou o conteúdo de acesso veio direto da microplataforma.'
    },
    {
      title: 'YOUTUBE',
      description:
        'São captados assuntos e temas descritos nas categorias da url amigável dos sites acessados. A palavra-chave YouTube já condiciona a localização de que o conteúdo daquela página é sobre a rede social ou o conteúdo de acesso veio direto da plataforma de vídeos.'
    },
    {
      title: 'JOGOS',
      description:
        'São captados assuntos e temas descritos nas categorias da url amigável dos sites acessados. As palavras chaves como jogo, vídeo game, jogatina, wii, Xbox, Playstation, poker, resta um, Blizzard, multiplayer, MMPOG, entre outras. Atualmente, a leitura do algoritmo está focada na categoria macro dos sites.'
    },
    {
      title: 'LINKEDIN',
      description:
        'São captados assuntos e temas descritos nas categorias da url amigável dos sites acessados. A palavra-chave Linkedin já condiciona a localização de que o conteúdo daquela página é sobre a rede social de profissionais ou o que conteúdo de acesso veio direto da plataforma.'
    },
    {
      title: 'MODA',
      description:
        'São captados assuntos e temas descritos nas categorias da url amigável dos sites acessados. As palavras chaves como moda, estilo, desfile, coleção, fashion week, modelos, passarela, fashion, primavera-verão, outono-inverno, entre outras. Atualmente, a leitura do algoritmo está focada na categoria macro dos sites.'
    },
    {
      title: 'NATUREZA',
      description:
        'São captados assuntos e temas descritos nas categorias da url amigável dos sites acessados. As palavras chaves como natureza, montanhas, sustentabilidade, coleção, oceano, mares, animal planet, florestas, entre outras. Atualmente, a leitura do algoritmo está focada na categoria macro dos sites.'
    },
    {
      title: 'NOTÍCIAS',
      description:
        'São captados assuntos e temas descritos nas categorias da url amigável dos sites acessados.  Nesta categoria específica, foram concentrados os principais veículos de notícias do país como G1, Folha de São Paulo, Estadão, Uol, O Dia, O Extra, entre outros. Atualmente, a leitura do algoritmo está focada na categoria macro dos sites.'
    },
    {
      title: 'POLÍTICA',
      description:
        'São captados assuntos e temas descritos nas categorias da url amigável dos sites acessados. As palavras chaves como política, eleições, presidente, lava jato, deputado, voto, candidato, vereador, entre outras. Atualmente, a leitura do algoritmo está focada na categoria macro dos sites.'
    },
    {
      title: 'SÉRIES E FILMES',
      description:
        'São captados assuntos e temas descritos nas categorias da url amigável dos sites acessados. As palavras chaves como séries, filmes, Netflix, TNT, AXN, universal, crackle, Paramount, telecine, warner, omelete, HBO, entre outras. Atualmente, a leitura do algoritmo está focada na categoria macro dostitle:  sites.'
    },
    {
      title: 'SEXO',
      description:
        'São captados assuntos e temas descritos nas categorias da url amigável dos sites acessados. As palavras chaves como sexo, pornhub, oral, contos eróticos, xvideos, brazzers, brasileirinhas filmes, tushy, porntube, entre outras. Atualmente, a leitura do algoritmo está focada na categoria macro dostitle:  sites.'
    },
    {
      title: 'TECNOLOGIA',
      description:
        'São captados assuntos e temas descritos nas categorias da url amigável dos sites acessados. As palavras chaves como tecnologia, imasters, cibercultura, computador, TI, celular, intel, tech, tecnologia da informação, machine learning, computador entre outras. Atualmente, a leitura do algoritmo está focada na categoria macro dos sites.'
    },
    {
      title: 'TV  e CELEBRIDADES',
      description:
        'São captados assuntos e temas descritos nas categorias da url amigável dos sites acessados. As palavras chaves como tv, celebridades, ator, purepeople, rede tv, atriz, blastingnews, hugo gloss, globo, E!, globo.com, entre outras. Atualmente, a leitura do algoritmo está focada na categoria macro dos sites.'
    },
    {
      title: 'VIAGENS',
      description:
        'São captados assuntos e temas descritos nas categorias da url amigável dos sites acessados. As palavras chaves como viagens, mochilão, LATAM, GOL, AZUL, hotel urbano, Europa, Estados Unidos, América Latina, entre outras. Atualmente, a leitura do algoritmo está focada na categoria macro dostitle:  sites.'
    }
  ]

  return (
    <div className={styles.sliderWrapper}>
      <button className={styles.prevArrow} onClick={() => this.slider.slickPrev()}>
        {'<'}
      </button>
      <button className={styles.nextArrow} onClick={() => this.slider.slickNext()}>
        {'>'}
      </button>
      <Slider ref={c => (this.slider = c)} {...settings}>
        {descriptions.map(item => (
          <CategoryDescription title={item.title} description={item.description} />
        ))}
      </Slider>
    </div>
  )
}
