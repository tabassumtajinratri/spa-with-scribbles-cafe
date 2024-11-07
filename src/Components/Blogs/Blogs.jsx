import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleAddToBookMark, markAddRead}) => {
    const [blogs, setblogs]=useState([])


    useEffect(()=>{
        fetch('blogs.json')
        .then(res=> res.json())
        .then(data => setblogs(data))
    },[])
    return (
        <div className="md:w-2/3">
            <h1 className="text-3xl">Blogs:{blogs.length}</h1>
            {
                blogs.map(blog=><Blog handleAddToBookMark={handleAddToBookMark} markAddRead={markAddRead} key={blog.id} blog={blog}></Blog>)
            }
        </div>
    );
};

export default Blogs;
