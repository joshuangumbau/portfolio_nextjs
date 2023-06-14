import React from "react";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import SectionSubtitle from "./SectionSubtitle";
import network from "../../public/images/Connected world.jpg";
import Slider from "react-slick";
import classes from "../../styles/testimonial.module.css";

const Testimonial = () => {
  const settings = {
    dots: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    infinite: true,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6" className={`${classes.testimonial__img}`}>
            <Image alt="network-img" src={network} width="400" height="400" />
          </Col>

          <Col lg="6" md="6">
            <SectionSubtitle subtitle="Testimonials" />
            <h4 className="mt-4 mb-5">What my client says</h4>

            <Slider {...settings}>
              <div className={`${classes.testimonial__item}`}>
                <div className={`${classes.testimonial__client}`}>
                  <Image
                    alt="client-img"
                    src="/images/img-01.jpg"
                    width="50"
                    height="50"
                    className=" rounded-2"
                  />

                  <div>
                    <h6>Elias Kemboy</h6>
                    <h6>Software Engineer</h6>
                  </div>
                </div>

                <p>
                "Working with Joshua Ngumbau was an absolute pleasure. His expertise as a full-stack developer was evident from the start. He not only had a deep understanding of both front-end and back-end technologies but also possessed exceptional problem-solving skills.
                 Joshua Ngumbau consistently delivered high-quality code and was able to effectively communicate complex technical concepts to our team. He played a crucial role in the success of our project, and I would highly recommend their services."
                </p>
              </div>

              <div className={`${classes.testimonial__item}`}>
                <div className={`${classes.testimonial__client}`}>
                  <Image
                    alt="client-img"
                    src="/images/img-03.jpg"
                    width="50"
                    height="50"
                    className=" rounded-2"
                  />

                  <div>
                    <h6>Collins Ayieko</h6>
                    <h6>Web Developer</h6>
                  </div>
                </div>

                <p>
                "Joshua Ngumbau is a true professional in the field of full-stack development. His ability to seamlessly switch between front-end and back-end tasks was impressive. He showed great attention to detail and always ensured that our website was visually appealing and functionally robust. Joshua Ngumbau also demonstrated excellent collaboration skills, working closely with our team to understand our requirements and provide innovative solutions. I would gladly work with Joshua Ngumbau again and recommend them to anyone seeking top-notch development expertise."
                </p>
              </div>

              <div className={`${classes.testimonial__item}`}>
                <div className={`${classes.testimonial__client}`}>
                  <Image
                    alt="client-img"
                    src="/images/img-02.jpg"
                    width="50"
                    height="50"
                    className=" rounded-2"
                  />

                  <div>
                    <h6>Sammy Mwangangi</h6>
                    <h6>Android developer</h6>
                  </div>
                </div>
                <p>
                "Having Joshua Ngumbau on our development team was a game-changer. His extensive knowledge of various programming languages and frameworks allowed us to tackle complex projects with ease. He consistently delivered clean, efficient code and brought a wealth of creative problem-solving skills to the table. Joshua Ngumbau was proactive in suggesting improvements and always strived for excellence. I highly recommend Joshua Ngumbau to anyone in need of a talented and reliable full-stack developer."
                </p>
              </div>
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonial;
