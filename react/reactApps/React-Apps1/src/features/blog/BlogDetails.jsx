import React from 'react'
import './blog.css'
import { useNavigate, useParams } from 'react-router'
import { useGetBlogDetailsQuery } from '../../services/blog'

function BlogDetails() {
   const {bid} = useParams()
   const navigate = useNavigate()
   const {data, isLoading} =  useGetBlogDetailsQuery(bid)
//    const {title, slug, content, excerpt, author, tags, image} = data
  return (
    <div className='box'>
        {data && console.log(data)}
        <div style={{background: 'lightgray', width: '100%', padding: '20px', borderRadius: '5px', lineHeight: '35px'}}>
            {
                data && <>
                    <h1>{data.title} Details</h1>
                    <img src={data.image} width='150px'  style={{borderRadius: '10px', marginTop: '10px'}}/>
                    <h1 style={{color: 'dodgerblue', fontWeight: 'bold', textTransform: 'capitalize',letterSpacing: '1px'}}>{data.title}</h1>
                    <div style={{color: '#303031', letterSpacing: '1px'}}>
                        <p>{data.slug}</p>
                        <p>{data.content}</p>
                        <p>{data.excerpt}</p>
                        <p>{data.author}</p>
                        <p>{data.date}</p>
                    </div>
                </>
            }
        <button onClick={()=>{navigate('/blog')}} style={{border: 'none', padding: '5px', background:'none',cursor: 'pointer'}}>← Back to home</button>
        </div>
    </div>
  )
}

export default BlogDetails