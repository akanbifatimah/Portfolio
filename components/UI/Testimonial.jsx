import React from "react";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import SectionSubtitle from "./SectionSubtitle";
import network from "../../public/images/Connected world.png";
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
                    src="/images/avatar.jpg"
                    width="50"
                    height="50"
                    className=" rounded-2"
                  />

                  <div>
                    <h6>Pius Henry</h6>
                    <h6>Digital Marketting Expert</h6>
                  </div>
                </div>

                <p>
                  Fatimah Akanbi is an exceptional front-end developer. She has
                  a strong background in JavaScript, and she also has a deep
                  understanding of CSS and HTML. She's been working with React
                  for the past year, and she recently completed an intensive
                  course on it at The Bulb Africa. Fatimah is always looking for
                  ways to improve her skills, so she will make sure that you are
                  constantly learning new things in your work with her. She is
                  also very organized, which makes her a great person to work
                  with. If you are looking for a front-end developer who is
                  detail-oriented, organized, and motivated to learn new things,
                  then Fatimah is the right person for you!
                </p>
              </div>

              <div className={`${classes.testimonial__item}`}>
                <div className={`${classes.testimonial__client}`}>
                  <Image
                    alt="client-img"
                    src="/images/avatar.jpg"
                    width="50"
                    height="50"
                    className=" rounded-2"
                  />

                  <div>
                    <h6>Simon Dave</h6>
                    <h6>Project Manager</h6>
                  </div>
                </div>

                <p>
                  Fatimah Akanbi is Godsend. She knows her way about things and
                  has a great and rich mind. She provided solutions to my tech
                  needs which I applied and my business has been doing great
                  today. My knowledge has increased while working with her. I
                  would recommend Fatimah Akanbi to anyone with a desire to
                  explore the amazing world of coding, App and web development
                  and UI/UX designs. These are necessary for many brands to
                  thrive. She's a lady per excellence.For her, the sky is just
                  the starting point.
                </p>
              </div>

              <div className={`${classes.testimonial__item}`}>
                <div className={`${classes.testimonial__client}`}>
                  <Image
                    alt="client-img"
                    src="/images/avatar.jpg"
                    width="50"
                    height="50"
                    className=" rounded-2"
                  />

                  <div>
                    <h6>AbdulGaniyu Adeniran </h6>
                    <h6>CEO Alfa Trust Limited</h6>
                  </div>
                </div>
                <p>
                  Fatimah is dedicated to providing quality work. She checks and
                  rechecks her software before turning it in for presentation to
                  the client. She strives to make her programs as user friendly
                  as possible understanding that not everyone is an expert
                  programmer. She is detail oriented and rarely has any bugs in
                  her finished product.
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
