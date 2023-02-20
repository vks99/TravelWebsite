import { NavLink } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { post } from 'jquery';
import BlogPost from '../components/BlogPost';
import '../App.css';

import blogPost from '../types/blogPost';

const Blogs=()=>{

    const [posts, setPosts] = useState<blogPost[]>([]);

    useEffect(() => {
        axios.get('http://localhost:8000/blogs')
          .then(res => {
            setPosts(res.data)
            console.log(posts);
          }
          )
          .catch(err => console.log(err));
      }, []);

    return(
        <div className="blogpost">
        <div className='container'>
  <div className='row'>
  <div className='col-12'>
  <h1 className='blog-title'>Exploring the Unexplored: A Journey to the Unknown</h1>
    </div>

  </div>
  <div className='row'>
    {posts.map((post, index) => (
      <div className='col-md-12 col-sm-12' key={index}>
        <div className='card mb-3'>
          <div className='card-body'>
            <h2 className='card-title'>{post.title}</h2>
            <p className='card-text'>{post.content}</p>
            <p className='card-text'>
              <small className='text-muted'>By {post.author}</small>
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
</div>
    )
}

export default Blogs;