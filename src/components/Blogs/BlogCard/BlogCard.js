import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const BlogCard = (props) => {

    const { title, previewText, image, liveLink } = props.data;
    // console.log(props.data);

    return (
        <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Img 
                style={{
                    height:"200px", 
                    width:"auto"}} 
                    variant="top" 
                    src={image} />
                <Card.Body>
                    <Card.Title><b>{title}</b></Card.Title>
                    <Card.Text>{previewText}</Card.Text>
                    <Button 
                    style={{
                        color: "steelBlue",
                        border: "1px solid steelBlue"
                    }}
                    variant="" 
                    href={liveLink}
                    target="_blank"
                    >Click to visit</Button>
                </Card.Body>
            </Card>
        </Col>

    );
};

export default BlogCard;