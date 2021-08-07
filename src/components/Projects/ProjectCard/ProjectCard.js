import React from 'react';
import { Card, Col } from 'react-bootstrap';

const ProjectCard = (props) => {

    // console.log(props.data);
    
    const { previewImage, prjName, liveLink, repoLink, details } = props.data;

    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={previewImage} />
                <Card.Body>
                <Card.Title>{prjName}</Card.Title>
                <Card.Text>
                    {details}
                </Card.Text>
                <Card.Link href={liveLink}>Live Link</Card.Link>
                <Card.Link href={repoLink}>Repo Link</Card.Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ProjectCard;