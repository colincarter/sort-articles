import React from "react";
import "./App.css";
import "h8k-components";

import Articles from "./components/Articles";

const title = "Sorting Articles";

function App({ articles }) {
  const [sortedArticles, dispatch] = React.useReducer(articlesReducer, [
    ...articles.sort(sortUpvotes),
  ]);

  return (
    <div className="App">
      <h8k-navbar header={title}></h8k-navbar>
      <div className="layout-row align-items-center justify-content-center my-20 navigation">
        <label className="form-hint mb-0 text-uppercase font-weight-light">
          Sort By
        </label>
        <button
          data-testid="most-upvoted-link"
          className="small"
          onClick={() => dispatch({ type: "upvote" })}
        >
          Most Upvoted
        </button>
        <button
          data-testid="most-recent-link"
          className="small"
          onClick={() => dispatch({ type: "recent" })}
        >
          Most Recent
        </button>
      </div>
      <Articles articles={sortedArticles} />
    </div>
  );
}

function sortUpvotes(article1, article2) {
  if (article1.upvotes > article2.upvotes) {
    return -1;
  }
  if (article1.upvotes < article2.upvotes) {
    return 1;
  }
  return 0;
}

function sortRecent(article1, article2) {
  const d1 = new Date(article1.date);
  const d2 = new Date(article2.date);

  if (d1 > d2) {
    return -1;
  }
  if (d1 < d2) {
    return 1;
  }
  return 0;
}

function articlesReducer(state, action) {
  switch (action.type) {
    case "upvote":
      return [...state.sort(sortUpvotes)];
    case "recent":
      return [...state.sort(sortRecent)];
    default:
      return state;
  }
}

export default App;
