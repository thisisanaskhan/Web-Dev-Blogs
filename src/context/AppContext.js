import { createContext, useState } from 'react';
import {blogUrl} from '../blogUrl';

export const AppContext=createContext();


 export  function AppContextProvider({children}){

    const[loading,setLoading]=useState(false);
    const[posts,setPosts]=useState([]);
    const[page,setPage]=useState(1);
    const[totalPages,setTotalPages]=useState(null);


    async function fetchBlogs(page = 1){
        setLoading(true);
        let url=`${blogUrl}?page=${page}`;

        try{
            const data=await fetch(url);
            const result = await data.json();

            setPage(result.page);
            setPosts(result.posts);
            setTotalPages(result.totalPages);
        }

        catch(error){
            alert("unable to load");
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }
        setLoading(false);
    }

    function handlePageChange(page){
        setPage(page);
        fetchBlogs(page)

    }
    
    
const value={
    loading,
    setLoading,
    posts,
    setPosts,
    page,
    setPage,
    totalPages,
    setTotalPages,
    handlePageChange,
    fetchBlogs


};

   return <AppContext.Provider value={value}>
    {children}
    
   </AppContext.Provider>
}
 