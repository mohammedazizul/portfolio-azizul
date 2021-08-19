import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const BlogCard = (props) => {

    const { title, previewText, image, liveLink } = props.data;
    // console.log(props.data);

    return (
        <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} style={{height:"200px", width:"auto"}}/>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{previewText}</Card.Text>
                    <Button 
                    variant="primary" 
                    href={liveLink}
                    target="_blank"
                    >Click to visit</Button>
                </Card.Body>
            </Card>
        </Col>

    );
};

export default BlogCard;