import { useEffect, useState } from "react";
// import AddTimer from './components/AddTimer.tsx';
// import Header from './components/Header.tsx';
// import Timers from './components/Timers.tsx';
import TimersContextProvider from "./store/timers-context.tsx";
import { get } from "./util/http.ts";
import { BlogPost } from "./components/BlogPosts.tsx";

type RawDataBlogPost = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

function App() {
  const [fetchedPosts, setFetchedPosts] = useState<BlogPost[] | undefined>();

  useEffect(() => {
    async function fetchPosts() {
      const data = (await get("https://jsonplaceholder.typicode.com/posts")) as RawDataBlogPost[];
    }

    fetchPosts();
  }, []);

  return <h1>Data Fetching</h1>;
}

export default App;
