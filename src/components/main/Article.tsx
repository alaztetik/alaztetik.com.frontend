import React from "react";

type ArticleProps = {
  children?: React.ReactNode;
  title: string;
  body: string;
  link?: string;
  author?: string;
};

const Article: React.FC<ArticleProps> = ({ children, title, body }) => {
  return (
    <article className="p-5">
      <h3 className="text-xl font-bold">{title}</h3>
      <p>{body}</p>
      {children}
    </article>
  );
};

export default Article;
