import React from "react";
import blogData from "../data/blog";
import Header from "./header";
import About from "./About";
import Article from "./Article";
import Articlelist from "./Articlelist";
import ArticleList from "./Articlelist";

console.log(blogData);

function App() {
  return (
    <div className="App">
     <Header name= {blogData.name}/>
     <main>
      <aside>
      <About image={blogData.image}
      about={blogData.about}
      />
      </aside>
      <ArticleList articles={blogData.posts}/>

     </main>

  
    </div>
  
  );
}

export default App;
