import Header from './components/Header';
import Blogs from './components/Blogs';
import Pagination from './components/Pagination';
import { useContext, useEffect } from 'react';
import { AppContext } from './context/AppContext';




function App() {  

  const{fetchBlogs}=useContext(AppContext);
  useEffect(()=>{
    fetchBlogs();
  },[])
  return (
    <div className='w-11/12 mx-auto max-w-[1300px] flex flex-col'>
 
     <Header/>
     <Blogs/>
     <Pagination/>

    </div>
  );
}

export default App;
