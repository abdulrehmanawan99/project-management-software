import { Container, Row, Col, Button, Form } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function AddProject() {
  const [projectName, setProjectName] = useState("");
  const [projectCost, setProjectCost] = useState("");
  const [projectDuration, setProjectDuration] = useState("");
  const [saveProjects, setSaveProjects] = useState([]);


  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
 const editForm = JSON.parse(localStorage.getItem("projects"));
    //    setEdit(JSON.parse(editForm));
  editForm.forEach((element, index) => {
      if (index === Number(params.productId)) {
        setProjectName(element.projectName);
        setProjectCost(element.projectCost);
        setProjectDuration(element.projectDuration);
      
      }
    });
  }, [params]);
  //   console.log(params.productId);

  const handleAdd = (e) => {
    const previousProjects = JSON.parse(localStorage.getItem("projects")) || [];

    if (params?.productId) {
      previousProjects.forEach((element, index) => {
        if (index === Number(params.productId)) {
          element.projectName = projectName;
          element.projectCost = projectCost;
          element.projectDuration = projectDuration;
        }
      });
      localStorage.setItem("projects", JSON.stringify(previousProjects));
    } else {
      e.preventDefault();
      const newProject = {
        projectName: projectName,
        projectCost: projectCost,
        projectDuration: projectDuration,
      };
      const updatedProjects = [...previousProjects, newProject];

      localStorage.setItem("projects", JSON.stringify(updatedProjects));
      setSaveProjects(updatedProjects);

      setProjectName("");
      setProjectCost("");
      setProjectDuration("");
    }

    navigate("/projects");
  };

  return (
    <Container>
      <Row className="Justify-content-center">
        <Col lg={10}>
          <h2>Add Projects</h2>
          <Form onSubmit={handleAdd}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Project Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Project Name"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Project Cost</Form.Label>
              <Form.Control
                type="text"
                placeholder="Project Cost"
                value={projectCost}
                onChange={(e) => setProjectCost(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Project Duration</Form.Label>
              <Form.Control
                type="text"
                placeholder="Project Duration"
                value={projectDuration}
                onChange={(e) => setProjectDuration(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Add
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
export default AddProject;
