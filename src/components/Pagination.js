import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

 const Pagination = () => {

 const{page,handlePageChange,totalPages}=useContext(AppContext);   

  return (
    <div>
        <div className='w-full h-[0.1rem] border border-black'>

        </div>
        <div className='flex justify-between'>
        <div  >
            {   page >1 &&
                <button className='bg-slate-200 p-1 mr-2 ' onClick={ ()=>{handlePageChange(page-1)}}>Previous</button>
            }

            {
                page<totalPages &&
                <button className='bg-slate-200 p-1'  onClick={()=>{handlePageChange(page+1)}}>Next</button>
            }
            </div>
            <div>
            <p>{page}of{handlePageChange}</p>
            </div>
            

        </div>

    </div>
  )
}

export default Pagination
