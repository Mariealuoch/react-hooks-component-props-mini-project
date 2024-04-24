import React from "react";
import blogData from "../data/blog";
import Article from "./Article";

function ArticleList({articles}){
    return(
        <div>
            <main>
               {articles.map((article)=>(
               <Article
               key={article.id}
               title={article.title}
               date = {article.date}
               preview={article.preview}
               />
            ))}
            </main>
        </div>
    )
}
export default ArticleList;