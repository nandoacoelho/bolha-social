import ALIMENTACAO from '../../assets/icons/ALIMENTACAO.svg'
import CARROS from '../../assets/icons/CARROS.svg'
import CIENCIA from '../../assets/icons/CIENCIA.svg'
import DECORACAO from '../../assets/icons/DECORACAO.svg'
import ECONOMIA from '../../assets/icons/ECONOMIA.svg'
import EDUCACAO from '../../assets/icons/EDUCACAO.svg'
import ESOTERISMO from '../../assets/icons/ESOTERISMO.svg'
import ESPORTE from '../../assets/icons/ESPORTES.svg'
import FACEBOOK from '../../assets/icons/FACEBOOK.svg'
import FITNESS from '../../assets/icons/FITNESS.svg'
import HUMOR from '../../assets/icons/HUMOR.svg'
import INSTAGRAM from '../../assets/icons/INSTAGRAM.svg'
import INTERNACIONAL from '../../assets/icons/INTERNACIONAL.svg'
import JOGOS from '../../assets/icons/JOGOS.svg'
import LINKEDIN from '../../assets/icons/LINKEDIN.svg'
import MODA from '../../assets/icons/MODA.svg'
import NATUREZA from '../../assets/icons/NATUREZA.svg'
import NOTICIAS from '../../assets/icons/NOTICIAS.svg'
import POLITICA from '../../assets/icons/POLITICA.svg'
import POPARTE from '../../assets/icons/POPARTE.svg'
import React from 'react'
import SERIESEFILMES from '../../assets/icons/SERIESEFILMES.svg'
import SEXO from '../../assets/icons/SEXO.svg'
import TECNOLOGIA from '../../assets/icons/TECNOLOGIA.svg'
import TVECELEBRIDADES from '../../assets/icons/TVECELEBRIDADES.svg'
import TWITTER from '../../assets/icons/TWITTER.svg'
import VIAGENS from '../../assets/icons/VIAGENS.svg'
import YOUTUBE from '../../assets/icons/YOUTUBE.svg'
import getColor from '../../utils/use-category-color'
import styles from './CategoryItem.module.scss'

const eita = {
  ['ALIMENTAÇÃO E SAÚDE']: ALIMENTACAO,
  CARROS,
  ['CIÊNCIA']: CIENCIA,
  ['DECORAÇÃO']: DECORACAO,
  ECONOMIA,
  EDUCACAO,
  ESOTERISMO,
  ESPORTE,
  FACEBOOK,
  INSTAGRAM,
  JOGOS,
  LINKEDIN,
  MODA,
  NATUREZA,
  INTERNACIONAL,
  HUMOR,
  ['NOTÍCIAS']: NOTICIAS,
  ['POLÍTICA']: POLITICA,
  ['SÉRIES E FILMES']: SERIESEFILMES,
  SEXO,
  TECNOLOGIA,
  ['TV E CELEBRIDADES']: TVECELEBRIDADES,
  ['POP/ARTE']: POPARTE,
  TWITTER,
  VIAGENS,
  YOUTUBE,
  FITNESS
}

export default function CategoryItem({ category }) {
  return (
    <div className={styles.categoryItem}>
      <img width="20px" src={eita[category.categoryTitle]} />
    <p className={styles.categoryTitleSmall}>
      <span style={{ color: getColor(category) }}>{category.categoryPercentage.toFixed(2)}%</span>
      {' - '}
      {category.categoryTitle}
    </p>
    </div>
  )
}
