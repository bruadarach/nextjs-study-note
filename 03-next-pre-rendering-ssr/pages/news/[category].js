const ArticleListByCategory = ({ articles, category }) => {
  return (
    <>
      <h1>Showing news for category {category} </h1>
      {articles.map((article) => (
        <div key={article.id}>
          <h2>
            {article.id} {article.title} {article.description}
          </h2>
        </div>
      ))}
    </>
  );
};

export default ArticleListByCategory;

export async function getServerSideProps(context) {
  // context is an object which contains a key called params
  //   const { params } = context;

  // req : the HTTP incomingMessage object
  // res : the HTTP response object
  // query: an object which contains the query string parameters
  const { params, req, res, query } = context;
  // to get cookies from the request object
  console.log(req.headers.cookie); // name=Sujeong
  console.log(query); // { category: 'sports' }
  // to set cookies in the response object
  res.setHeader("Set-Cookie", ["name=Sujeong"]);

  const { category } = params;
  const response = await fetch(
    `http://localhost:3001/news?category=${category}`
  );
  const data = await response.json();

  console.log(`Pre-rendering News Articles For category ${category}`);

  return {
    props: {
      articles: data,
      category,
    },
  };
}
