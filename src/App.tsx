import { ReactNode, useEffect, useState } from "react";
// import AddTimer from './components/AddTimer.tsx';
// import Header from './components/Header.tsx';
// import Timers from './components/Timers.tsx';
import TimersContextProvider from "./store/timers-context.tsx";
import { get } from "./util/http.ts";
import BlogPosts, { BlogPost } from "./components/BlogPosts.tsx";
import fetchingImg from './assets/data-fetching.png'
import { set } from "zod";
import ErrorMessage from "./components/ErrorMessage.tsx";
type RawDataBlogPost = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

function App() {
  const [fetchedPosts, setFetchedPosts] = useState<BlogPost[] | undefined>();
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState<string>();


  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true);

try{

     const data = (await get(
        "https://jsonplaceholder.typicode.com/posts"
      )) as RawDataBlogPost[];


      const blogPosts: BlogPost[] = data.map((rawPost) => {
        return {
          id: rawPost.id,
          title: rawPost.title,
          text: rawPost.body,
        };
      });
     setFetchedPosts(blogPosts)
}catch(error){
if (error instanceof Error){
  setError(error.message)
}

setError((error as Error).message)
  // setError("Failed to fetch posts!")

}
    
      setIsFetching(false);
 
    }

    fetchPosts();
  }, [])

let content: ReactNode;

if(error){
content = <ErrorMessage text={error} />
}


if(fetchedPosts){
  content = <BlogPosts posts={fetchedPosts} />
}

if(isFetching){
content = <p id="loading-fallback">Fetching post ...</p>
}

  return( 
  <main>
  <img src={fetchingImg} alt="An abstract image of data fetching"/>
  {content}
  </main>
  )
}

export default App;
