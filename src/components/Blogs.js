import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';

 const Blogs = () => {
    const {posts,loading}=useContext(AppContext);
  return (
    <div>
        {
            loading ? (<Spinner/>) :

            (
                posts.length===0 ? 
               ( <div>
                    <p>No Post Found</p>
                </div>   ) 
                :
                (posts.map((post)=>(
                    <div className='' key={post.id}>
                        <p className='font-bold'>{post.title}</p>
                        <p>By <span className='italic'> {post.author} </span>on <span> {post.category}</span></p>
                        <p>Posted on {post.date}</p>
                        <p>{post.content}</p>
                        <div>
                            {post.tags.map((tag,index)=>{
                                return <span className='text-blue-500' key={index}>{`#${tag}`}</span>
                            })}

                        </div>
                        </div>
                      

                ) ))
            )
        }

    </div>
  )
}
export default Blogs
