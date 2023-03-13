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
