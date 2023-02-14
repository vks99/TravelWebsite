import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import axios from 'axios';
import { redirect } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';

type blogPost = {
  title: String,
  author: String,
  content: String
}


const BlogForm = () => {

  const [blogData, setBlogData] = useState<blogPost[]>([]);
  const [successMessage, setSuccessMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await axios.post(
      'http://localhost:8000/BlogForm',blogData
  )
  .then((res) => {
      if(res.data===true)
      {
        console.log(res.data);
          redirect('/Blog');
      }
      else{
        console.log("Unable to submit the blog data");
      }
      console.log(res.data);
  })
  .catch((error) => {
      console.error(error);
  });

  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBlogData({ ...blogData, [e.target.name]: e.target.value });
  };

  const handleChangeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBlogData({ ...blogData, [e.target.name]: e.target.value });
};

  return (
    <div className="container">
      <div className = "blog_images">
      <Carousel className='my-1'>
            <Carousel.Item>
                <img
                className="bg-img-top"
                src="/blog_bg4.jpg"
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="bg-img-top"
                src="/blog_bg3.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="bg-img-top"
                src="/blog_bg2.jpg"
                alt="Fourth slide"
                />
            </Carousel.Item>
            </Carousel>
      </div>
      <div>
        <h1 className="text-center">Share your experience through blogging!</h1>
        <form onSubmit={handleSubmit} className='row g-3'>
          <div className="col-md-8">
            <label className='form-label'>Title</label>
            <input type="text" className='form-control' name='title' onChange={handleChange} placeholder='Enter Title' required />
          </div>
          <div className="col-md-8">
            <label className='form-label'>Author</label>
            <input type="text" className='form-control' name='author' onChange={handleChange} placeholder='Enter Author' required />
          </div>
          <div className="col-12">
            <label htmlFor="inputMessage" className='form-label'>Blog Content</label>
            <textarea className='form-control' rows={5} name='content' onChange={handleChangeTextArea} placeholder='Enter Content' required></textarea>
          </div>
          <div className="col-12">
            <button className='button bg-dark' type="submit">Post Blog!</button>
          </div>
          <div className="col-12">
              <br />
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogForm;
