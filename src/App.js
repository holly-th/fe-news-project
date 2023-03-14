import { Routes, Route } from "react-router-dom";
import "./App.css";
import Articles from "./Articles";
import Comments from "./Comments";
import Topic from "./Topics";
import ArticleCard from "./ArticleCard";
import Header from "./Header";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Articles />} />

        <Route path="/articles/:article_id/comments" element={<Comments />} />
        <Route path="/topics" element={<Topic />} />
        <Route path="/articles/:article_id" element={<ArticleCard />} />
      </Routes>
    </div>
  );
}

export default App;
