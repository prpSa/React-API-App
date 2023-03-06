import React, { Fragment,useEffect } from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";

const AddCourse=()=>{

    useEffect(() => {
        document.title="Add Courses";
     }, []);

    return(
        <Fragment>
            <h1 className="text-center my-3">Fill Course Details</h1>
            <Form>
                <FormGroup>
                    <label for="id">Course ID</label>
                    <Input
                    type="text"
                    placeholder="Enter course ID"
                    name="id"
                    id="id">
                    </Input>
                </FormGroup>
                <FormGroup>
                    <label for="title">Course Title</label>
                    <Input
                    type="text"
                    placeholder="Enter Course Title"
                    id="title"></Input>
                </FormGroup>
                <FormGroup>
                    <label for="description">Course Description</label>
                    <Input 
                    type="textarea"
                    placeholder="Enter Course Description"
                    id="description"
                    style={{height:100}}
                    ></Input>
                </FormGroup>
                <Container className="text-center">
                    <Button color="success">Add Course</Button>
                    <Button color="warning ms-3">Clear</Button>
                </Container>
            </Form>
        </Fragment>
    )
}
export default AddCourse;