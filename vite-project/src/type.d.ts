interface IArticle {
  id: number
  title: string
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
