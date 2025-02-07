import { useEffect, useState } from 'react';
import AddTimer from './components/AddTimer.tsx';
import Header from './components/Header.tsx';
import Timers from './components/Timers.tsx';
import TimersContextProvider from './store/timers-context.tsx';
import { get } from './util/http.ts';
import { BlogPost } from './components/BlogPosts.tsx';

function App() {

  const [fetchedPosts, setFetchedPosts] = useState<BlogPost[] | undefined>()


  useEffect(()=> {

async function  fetchPosts(){
  const data = await get('https://jsonplaceholder.typicode.com/posts')
}

fetchPosts()
  },[])
 
  return (
    <TimersContextProvider>
      <Header />
      <main>
        <AddTimer />
        <Timers />
      </main>
    </TimersContextProvider>
  );
}

export default App;
