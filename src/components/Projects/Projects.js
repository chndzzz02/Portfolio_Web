import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ecommerce1 from "../../Assets/Projects/ecommerce1.png";
import ecommerce2 from "../../Assets/Projects/ecommerce2.png";
import ecommerce3 from "../../Assets/Projects/ecommerce3.png";
import kasir3 from "../../Assets/Projects/kasir3.png";
import kasir1 from "../../Assets/Projects/kasir1.png";
import kasir2 from "../../Assets/Projects/kasir2.png";
import keuangan from "../../Assets/Projects/keuangan.png";
import crm1 from "../../Assets/Projects/crm1.png";
import crm2 from "../../Assets/Projects/crm2.png";
import crm3 from "../../Assets/Projects/crm3.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              images={[ecommerce1, ecommerce2, ecommerce3]}
              isBlog={false}
              title="E-Commerce Platform"
              description="A full-featured e-commerce platform with product management, shopping cart, and payment integration. Built with Laravel."
              ghLink="https://github.com/chndzzz02/e-commerce_UMKM"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={keuangan}
              isBlog={false}
              title="Money Management"
              description="A personal finance management application that helps users track their income, expenses, and savings goals. Built with Laravel and MySQL."
              ghLink="https://github.com/chndzzz02/sistem_keuangan"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              images={[kasir1, kasir2, kasir3]}
              isBlog={false}
              title="Point of Sale System"
              description="A modern point of sale system designed for retail businesses, featuring inventory management, sales tracking, and reporting. Built with Laravel Framework."
              ghLink="https://github.com/chndzzz02/sistem_kasir"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              images={[crm1, crm2, crm3]}
              isBlog={false}
              title="Customer Relationship Management (CRM)"
              description="A comprehensive CRM solution for managing customer interactions, tracking sales, and analyzing customer data. Built with Laravel Framework."
              ghLink="https://github.com/chndzzz02/CRM_SaaS"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
