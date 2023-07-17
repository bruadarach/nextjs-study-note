import React from "react";

const NewsArticleList = ({ articles }) => {
  return (
    <>
      {articles.map((article) => (
        <div key={article.id}>
          <h2>
            {article.id} {article.title} {article.category}
          </h2>
        </div>
      ))}
    </>
  );
};

export default NewsArticleList;

export async function getServerSideProps() {
  const response = await fetch("http://localhost:3001/news");
  const data = await response.json();

  console.log("Pre-rendering NewsArticleList");

  return {
    props: {
      articles: data,
    },
  };
}
