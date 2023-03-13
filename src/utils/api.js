import axios from "axios";
const newsApi = axios.create({
  baseURL: "https://backend-news-project-drc2.onrender.com",
});

export function getArticles() {
  return newsApi.get("/api/articles").then((articles) => {
    console.log(articles.data.results);
    return articles.data.results;
  });
}

export function getArticleById(article_id) {
  return newsApi.get(`/api/articles/${article_id}`).then((article) => {
    return article.data.article[0];
  });
}
