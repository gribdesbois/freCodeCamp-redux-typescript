interface IArticle {
  id: number
  title: number
  body: string
}

type ArticleState = {
  // state object type
  articles: IArticle[]
}

type ArticleAction = {
  // action creators
  type: string
  article: IArticle
}

type DispatchType = (args: ArticleAction) => ArticleAction // dispatch
