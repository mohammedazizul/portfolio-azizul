import React from 'react';
import { Card, Col } from 'react-bootstrap';

const ProjectCard = (props) => {

    // console.log(props.data);
    
    const { previewImage, prjName, liveLink, repoLink, details } = props.data;

    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={previewImage} style={{height:"200px", width:"auto"}}/>
                <Card.Body>
                <Card.Title>{prjName}</Card.Title>
                <Card.Text>
                    {details}
                </Card.Text>
                <Card.Link href={liveLink} target="_blank">Live Link</Card.Link>
                {
                    repoLink && <Card.Link href={repoLink} target="_blank">Repo Link</Card.Link>
                }
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ProjectCard;