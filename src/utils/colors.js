export function getColor(gistItem) {
  switch (gistItem.categoryTitle) {
    case 'LINKEDIN':
    case 'FACEBOOK':
    case 'YOUTUBE':
    case 'INSTAGRAM':
    case 'CIÊNCIA':
    case 'TECNOLOGIA':
    case 'JOGOS':
      return '#82a8f7'

    case 'CARROS':
    case 'VIAGENS':
    case 'MODA':
    case 'INTERNACIONAL':
    case 'TV E CELEBRIDADES':
    case 'ESOTERISMO':
    case 'EMPREGOS E CONCURSOS':
    case 'HUMOR':
      return '#8877c6'

    case 'FITNESS':
    case 'ECONOMIA':
    case 'EDUCACAO':
    case 'SERIES E FILMES':
    case 'POP/ARTE':
    case 'SEXO':
      return '#e6937f'

    case 'ALIMENTAÇÃO E SAÚDE':
    case 'NATUREZA':
    case 'POLITICA':
    case 'NOTÍCIAS':
    case 'CULINÁRIA':
    case 'DECORAÇÃO':
      return '#84cbbb'
  }
}
