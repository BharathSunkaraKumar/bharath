import React from 'react'
import { useGetBlogItemsQuery } from '../../services/blog'
import './blog.css'

function Blog() {
  const {data, isLoading} = useGetBlogItemsQuery()
  return (
    <div className='blog-box'>
        {data && console.log(data)}
        <ul className='blog-container'>
        <h1 style={{textAlign: 'center', fontWeight: 'bold', letterSpacing: '1px', padding: '5px', color: 'dodgerblue'}}>Blog</h1>
        <div className="search-bar">
            <input type='text' placeholder='search blog' className='search-blog'/>  
        </div>
            <div className="blog-center three-column-layout wrapper">
                {
                    isLoading ? <h3>loading...</h3> : (
                        data && data.map((e) => {
                            const {id, title, slug, content, excerpt, author, date, tags, image} = e
                            return (
                                <li key={id} className='blog-items'>
                                    <img src={image} alt={title} width='100px'/>
                                    <h2 className='b-item'>{title}</h2>
                                    <p className='b-item author'>{author}</p>
                                    <p className='b-item date'>{date}</p>
                                    <p className='b-item excerpt'>{excerpt}</p>
                                    <button className='b-item'>Continue Reading →</button>
                                </li>
                            )
                        })
                    )
                }
            </div>
        </ul>
    </div>
  )
}

export default Blog