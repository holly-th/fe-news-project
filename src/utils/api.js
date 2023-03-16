import axios from "axios";
const newsApi = axios.create({
  baseURL: "https://backend-news-project-drc2.onrender.com",
});

export function getArticles(topic, sortby, orderby) {
  return newsApi
    .get("/api/articles", {
      params: {
        topic: topic,
        sortby: sortby,
        orderby: orderby,
      },
    })
    .then((articles) => {
      return articles.data.results;
    });
}

export function getArticleById(article_id) {
  return newsApi.get(`/api/articles/${article_id}`).then((article) => {
    return article.data.article[0];
  });
}

export function getComments(article_id) {
  return newsApi
    .get(`/api/articles/${article_id}/comments`)
    .then(({ data }) => {
      return data.comments;
    });
}
export function patchVotes(article_id, voteChange) {
  return newsApi
    .patch(`/api/articles/${article_id}`, { inc_votes: voteChange })
    .then(({ data }) => {
      return data.changedArticle[0].votes;
    });
}

export function getTopics() {
  return newsApi.get("/api/topics").then(({ data }) => {
    return data;
  });
}
