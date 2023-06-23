import { Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const SingleBlog = () => {
    const [blog, setBlog] =  useState({});
         const { id } = useParams();

     console.log('id' + id);

    const getBlog = async ()=>{
        const res = await axios.get(
          `https://64924de4428c3d2035d00605.mockapi.io/blog/${id}`
        );
        console.log(res.data);
        setBlog(res.data);
    }
    useEffect(()=>{
        getBlog();
    });
  return (
    <div>
        Single Blog

<h1>{blog.title}</h1>
<img src={blog.image} alt=""/>
<p>{blog.description}</p>
       


    </div>
  )
}

export default SingleBlog;