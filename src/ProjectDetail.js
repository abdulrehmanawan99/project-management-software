import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";

function ProjectDetail() {
  const [detail, setDetail] = useState();
  const params = useParams();

  useEffect(() => {
    const detailPage = JSON.parse(localStorage.getItem("projects"));
    detailPage.forEach((element, index) => {
      if (index === Number(params.productDetail)) {
        setDetail(element);
      
      }
    });
  }, [params.productDetail]);

  return (
    <Container>
      <Row className="Justify-content-center">
        <Col lg={10}>
          <h2>View Detail Of Project</h2>
          {detail && (
            <div>
              <p>Project Name: {detail.projectName}</p>
              <p>Cost: {detail.projectCost}</p>
              <p>Duration: {detail.projectDuration}</p>
          
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
}
export default ProjectDetail;
