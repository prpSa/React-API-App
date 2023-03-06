import React,{useEffect} from "react";
import { Button, Container} from 'reactstrap';
const Home=()=>{

    useEffect(() => {
        document.title="Home";
     }, []);

    return(
        <div class="jumbotron">
      
        <h1>Enjoy our Courses!</h1>
        <p>Nice to see you! Enjoy our different courses available here. Hope you like it. Start Learning!</p>
        <Container>
            <Button color="primary">Start Exploring</Button>
        </Container>
   
        </div>
    )
}

export default Home;