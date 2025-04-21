import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { useDeleteBlogMutation, useGetBlogItemQuery, useGetBlogItemsQuery, useLazyGetBlogItemQuery, useLazyGetBlogItemsQuery } from '../../services/blog'
import './blog.css'

function Blog() {
  const {data, isLoading, refetch} = useGetBlogItemsQuery()
  const [searchTerm, setSearchTerm] = useState('')
  const {data:blog} = useGetBlogItemQuery(""||searchTerm)
  const navigate = useNavigate()
  const [dfn] = useDeleteBlogMutation()
  const [rfn] = useLazyGetBlogItemsQuery()
  const [drfn] = useLazyGetBlogItemQuery()

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }

  const handleDetails = (id) => {
    navigate(`/blogdetails/${id}`)
    console.log(rfn)
  }
  const handleDelete = (id) => {
    dfn(id).then((res) => {
        // refetch()
        rfn()
        drfn()
    })
  }
  return (
    <div className='blog-box'>
        <ul className='blog-container'>
        <h1 style={{textAlign: 'center', fontWeight: 'bold', letterSpacing: '1px', padding: '5px', color: 'dodgerblue'}}>Blog</h1>
        <div className="search-bar">
            <input type='text' value={searchTerm} onChange={handleSearch} placeholder='search blog' className='search-blog'/>  
        </div>
            <div className="blog-center three-column-layout wrapper">
                
                {
                    searchTerm ?
                    //  <h3 style={{color: "dodgerblue", textAlign: 'center'}}>loading...</h3> 
                    //  
                    blog && blog.map((e) => {
                        const {id, title, slug, content, excerpt, author, date, tags, image} = e
                        return <li key={id} className='blog-items'>
                                <img src={image} alt={title} width='100px'/>
                                <h2 className='b-item'>{title}</h2>
                                <p className='b-item author'>{author}</p>
                                <p className='b-item date'>{date}</p>
                                <p className='b-item excerpt'>{excerpt}</p>
                                <button onClick={()=>{handleDetails(id)}} className='b-item'>Continue Reading →</button>
                                <button className='del' onClick={()=>{handleDelete(id)}} >X</button>
                            </li>
                        
                    })
                     : (
                        data && data.map((e) => {
                            const {id, title, slug, content, excerpt, author, date, tags, image} = e
                            return <li key={id} className='blog-items'>
                                    <img src={image} alt={title} width='100px'/>
                                    <h2 className='b-item'>{title}</h2>
                                    <p className='b-item author'>{author}</p>
                                    <p className='b-item date'>{date}</p>
                                    <p className='b-item excerpt'>{excerpt}</p>
                                    <button onClick={()=>{handleDetails(id)}} className='b-item'>Continue Reading →</button>
                                    <button className='del' onClick={()=>{handleDelete(id)}} >X</button>
                                </li>
                            
                        })
                    )
                }
            </div>
        </ul>
    </div>
  )
}

export default Blog

// onClick={()=>{handleDelete(id)}}