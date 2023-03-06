import './App.css';
import Home from './components/Home';
import Course from './components/Course';
import AllCourses from './components/AllCourses';
import AddCourse from './components/AddCourse';
import Header from './components/Header';
import { Row,Col, Container } from 'reactstrap';
import Menu from './components/Menu';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div> 
      <ToastContainer/>
      <Router>
      <Container>
      <Header></Header>
      <Row>
        <Col md={4}>
          <Menu></Menu>
        </Col>
        <Col md={8}>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/add-course' element={<AddCourse/>}></Route>
            <Route path='/view-course' element={<AllCourses/>}></Route>
          </Routes>
        </Col>
      </Row>
      </Container>
      </Router>
      </div>
  );
}

export default App;
