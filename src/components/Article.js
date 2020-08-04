import React from "react";

function Article({ title, upvotes, date }) {
  return (
    <>
      <td data-testid="article-title">{title}</td>
      <td data-testid="article-upvotes">{upvotes}</td>
      <td data-testid="article-date">{date}</td>
    </>
  );
}

export default Article;
