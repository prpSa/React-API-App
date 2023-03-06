import React from "react";
import { Button, Card, CardBody, CardSubtitle, CardText, Container } from "reactstrap";

const Course=( {course})=>{
    return(
        <div className="text-center">
            <Card>
                <CardBody>
                    <CardSubtitle className="fw-bold">
                        {course.title}
                    </CardSubtitle>
                    <CardText>{course.description}</CardText>
                    <Container className="text-center">
                        <Button color="danger" >Delete</Button>
                        <Button color="warning ms-3" >Update</Button>
                    </Container>
                </CardBody>
            </Card>
        </div>
    )
}

export default Course;