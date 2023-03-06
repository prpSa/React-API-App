import React,{useState,useEffect} from "react";
import Course from "./Course";
import base_url from "./../api/api";
import axios from "axios";
import { toast } from "react-toastify";
import App from "../App";
function AllCourses() {

    useEffect(() => {
        document.title = "All Courses";
        getAllCoursesfromServer();
    }, []);

    const getAllCoursesfromServer = () => {
        axios.get(`${base_url}/courses`).then(
            (response) => {
                console.log(response.data);
                toast.success("Courses are Updated",{
                    position:"bottom-center"
                });
                setstate(response.data);
            },
            (error) => {
                console.log(error);
                toast.error("Something went wrong",{
                    position:"bottom-center"
                });
            }
        );
    };




    const [courses, setstate] = useState([
        { title: "Python Djnago", description: "Demo Course" },
        { title: "Java Core", description: "Demo Course" },
        { title: "Java SpringBoot", description: "Demo Course" },
        { title: "AWS", description: "Demo Course" }
    ]);
    return (
        <div>
            <h1>All Courses</h1>
            <p>List of all courses are below:</p>
            {courses.length > 0 ? courses.map((item) => <Course course={item}></Course>) : "No Courses"}
        </div>
    );
}
export default AllCourses;