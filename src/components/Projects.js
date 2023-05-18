import { Container, Row, Col, Button, Table } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

function Projects() {
  const [projects, setProjects] = useState([]);

  //   useEffect(() => {
  //     const projectName = localStorage.getItem("projectName");
  //     const projectCost = localStorage.getItem("projectCost");
  //     const projectDuration = localStorage.getItem("projectDuration");
  //     if (projectName && projectCost && projectDuration) {
  //       setProjects([...projects, { projectName, projectCost, projectDuration }]);
  //     }
  //   }, []);

  useEffect(() => {
    const getProjects = localStorage.getItem("projects");
    setProjects(JSON.parse(getProjects));
  }, []);

  const navigate = useNavigate();
//   const params = useParams();

  function navigateHandler() {
    navigate("/addprojects");
  }

  function editHandler(index) {
    navigate(`/addprojects/${index}`);
  
  }

  function DetailHandler(index) {
    navigate(`/projectdetail/${index}`);
  
  }

  function delHandler(index) {
    const updatedProjects = [...projects];
    updatedProjects.splice(index, 1);
    localStorage.setItem("projects", JSON.stringify(updatedProjects));
    setProjects(updatedProjects);
  }

  return (
    <>
      <Container>
        <Row className="mt-5">
          <Col>
            <h1>Kaarigar Projects</h1>
          </Col>
          <Col className="text-end">
            <Button
              variant="secondary"
              className="text-right"
              onClick={navigateHandler}
            >
              Add Projects
            </Button>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg={10}>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Project Name</th>
                  <th>Cost</th>
                  <th>Duration</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{project.projectName}</td>
                    <td>{project.projectCost}</td>
                    <td>{project.projectDuration}</td>
                    <td>
                      <Button variant="primary" onClick={() => editHandler(index)}>Edit</Button>
                      <Button
                        variant="danger"
                        onClick={() => delHandler(index)}
                      >
                        Delete
                      </Button>
                      <Button
                       
                        onClick={() => DetailHandler(index)}
                      >
                        View Detail
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Projects;
