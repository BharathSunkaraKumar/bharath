import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { useDeleteBlogMutation, useGetBlogItemsQuery, useLazyGetBlogItemsQuery } from '../../services/blog'
import './blog.css'

function Blog() {
  const [searchTerm, setSearchTerm] = useState('')
  const {data, isLoading, refetch} = useGetBlogItemsQuery(searchTerm)
  const navigate = useNavigate()
  const [dfn] = useDeleteBlogMutation()
  const [rfn] = useLazyGetBlogItemsQuery()

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }

  const handleDetails = (id) => {
    navigate(`/blogdetails/${id}`)
  }
  const handleDelete = (id) => {
    dfn(id).then((res) => {
        rfn()
        refetch()
    })
  }
  useEffect(()=>{
      refetch()
  },[data])
  const handleAddBlog = () => {
    navigate('/addblog')
  }
  const handleEdit = (id) => {
    navigate(`/editblog/${id}`)
  }
  return (
    <div className='blog-box'>
        <ul className='blog-container'>
        <h1 style={{textAlign: 'center', fontWeight: 'bold', letterSpacing: '1px', padding: '5px', color: 'dodgerblue'}}>Blog</h1>
        <div className="search-bar">
            <input type='text' value={searchTerm} onChange={handleSearch} placeholder='search blog' className='search-blog'/>  
            <button onClick={handleAddBlog}>Add blog post</button>
        </div>
            <div className="blog-center three-column-layout wrapper">
                
                {
                    isLoading ?
                    <h3 style={{color: "dodgerblue", textAlign: 'center'}}>loading...</h3>
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
                                    <button className='edit' onClick={()=>{handleEdit(id)}}>edit</button>
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