import React from 'react';
import NavBar from '../NavBar/NavBar';
import './Blogs.css'

const Blogs = () => {
    return (
        <div>
            <NavBar />
            <div className="blog-wrapper">
                <div className="blog-info">
                    <a 
                    href="/home" 
                    className="btn-blog" 
                    >Back to Home</a>
                </div>
            </div>
        </div>
    );
};

export default Blogs;