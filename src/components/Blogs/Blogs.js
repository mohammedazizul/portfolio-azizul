import './Blogs.css';
import React from 'react';
import NavBar from '../NavBar/NavBar';
import { Row } from 'react-bootstrap';
import BlogCard from './BlogCard/BlogCard';
import blog101 from '../../images/blog101.jpg';
import blog102 from '../../images/blog102.jpg';
import blog103 from '../../images/blog103.jpg';
import blog104 from '../../images/blog104.jpg';
import blog105 from '../../images/blog105.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Footer from '../Footer/Footer';

// data to preview blogs info
const blogData = [
    {
        blogSl: 101,
        title: "JavaScript splice() basic",
        previewText: "The array is a very big and vast knowledge . . . ",
        image: blog101,
        liveLink: "https://mohammedazizul.medium.com/javascript-splice-basic-58a3a2151e4c"
    },
    {
        blogSl: 102,
        title: "Some Basics of JavaScript",
        previewText: "There are a lot of things to discuss in JavaScript but . . . ", image: blog102,
        liveLink: "https://mohammedazizul.medium.com/some-basics-of-javascript-b5adbee0f418"
    },
    {
        blogSl: 103,
        title: "React.js In My View",
        previewText: "There are some very fundamental topics of react.js . . . ",
        image: blog103,
        liveLink: "https://mohammedazizul.medium.com/react-js-in-my-view-e2745b4b91b4"
    },
    {
        blogSl: 104,
        title: "Some concepts of JavaScript",
        previewText: "undefined, null, scope, let vs. var vs. const . . . ",
        image: blog104,
        liveLink: "https://mohammedazizul.medium.com/some-concepts-of-javascript-baab52ac00fc"
    },
    {
        blogSl: 105,
        title: "Some Methods of JavaScript String",
        previewText: "very basic discussion on concat(), toLowerCase() . . . ",
        image: blog105,
        liveLink: "https://mohammedazizul.medium.com/some-methods-of-javascript-string-ed22a2c9168b"
    }
];

const Blogs = () => {
    return (
        <div>
            <NavBar />
            <p></p>
            <div className="blog-wrapper">
                <Row xs={1} md={2} className="g-4">
                    {
                        blogData.map(
                            data => <BlogCard data={data} key={data.blogSl} />
                        )
                    }
                </Row>
                <div className="blog-info">
                    <a
                        href="https://mohammedazizul.medium.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="btn-blog"
                    >Visit All My Blogs <FontAwesomeIcon icon={faArrowRight} size="1x" color="steelBlue" /></a>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Blogs;