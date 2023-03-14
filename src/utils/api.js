import axios from "axios";
const newsApi = axios.create({
  baseURL: "https://backend-news-project-drc2.onrender.com",
});

export function getArticles() {
  return newsApi
    .get("/api/articles")
    .then((articles) => {
      return articles.data.results;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function getComments(article_id) {
  return newsApi
    .get(`/api/articles/${article_id}/comments`)
    .then(({ data }) => {
      console.log(data.results);
      return data.results;
    });
}
