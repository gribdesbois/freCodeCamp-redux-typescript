import * as actionTypes from './actionTypes'

export function addArticle(article: IArticle) {
  const action: ArticleAction = {
    type: actionTypes,
    article,
  }
}
