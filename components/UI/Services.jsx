import React from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/services.module.css";
import ServicesItem from "./ServicesItem";

const Services = () => {
  return (
    <section id="services">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className={`${classes.services__container}`}>
              <div>
                <ServicesItem title="App Development" icon="ri-apps-line" />

                <ServicesItem title="Web Development" icon="ri-computer-line" />
              </div>

              <ServicesItem
                title="Full-Stack Development"
                icon="ri-code-s-slash-line"
              />
            </div>
          </Col>

          <Col lg="6" md="6" className={`${classes.service__title}`}>
            <SectionSubtitle subtitle="What I do" />
            <h3 className="mb-0 mt-4">Better Design,</h3>
            <h3 className="mb-4">Better Experience</h3>
            
<p>Full-Stack Web Development:
    Custom website development tailored to your unique needs
    Responsive and mobile-friendly designs for seamless user experiences
    Front-end development using modern frameworks such as React or Vue.js
    Back-end development with technologies like Node.js or Django </p>
<p>API Development and Integration:
    Designing and building robust RESTful APIs for seamless data exchange
    Integration of third-party APIs to extend functionality and enhance user experience
    API documentation and versioning to ensure scalability and maintainability</p>

<p>Database Design and Optimization:
    Expertise in database design and modeling to create efficient data structures
    Optimization of queries and database performance tuning for improved responsiveness
    Implementation of data caching and indexing strategies for faster data retrieval</p>

<p>E-commerce Solutions:
    Development of secure and scalable e-commerce platforms
    Integration of payment gateways and shopping cart functionality
    Customization and extension of popular e-commerce frameworks like Shopify or WooCommerce</p>
          
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
