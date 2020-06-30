export default function getColor(gistItem) {
  switch (gistItem.categoryTitle) {
    case 'LINKEDIN':
    case 'FACEBOOK':
    case 'YOUTUBE':
    case 'INSTAGRAM':
    case 'TWITTER':
    case 'CIÊNCIA':
    case 'TECNOLOGIA':
    case 'JOGOS':
    case 'POLÍTICA':
      return '#5fa9ff'

    case 'CARROS':
    case 'VIAGENS':
    case 'MODA':
    case 'INTERNACIONAL':
    case 'TV E CELEBRIDADES':
    case 'ESOTERISMO':
    case 'EMPREGOS E CONCURSOS':
    case 'HUMOR':
    case 'DECORAÇÃO':
      return '#9475d0'

    case 'EDUCAÇÃO':
    case 'SÉRIES E FILMES':
    case 'POP/ARTE':
    case 'SEXO':
      return '#ff8f79'

    case 'ALIMENTAÇÃO E SAÚDE':
    case 'NATUREZA':
    case 'NOTÍCIAS':
    case 'CULINÁRIA':
    case 'DECORAÇÃO':
    case 'FITNESS':
    case 'ECONOMIA':
    case 'ESPORTE':
    default:
      return '#00cfb9'
  }
}
