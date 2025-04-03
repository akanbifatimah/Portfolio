import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
import Image from "next/image";
import web from '../../public/images/web.jpg'
import styles from "../../styles/hero.module.css"


import classes from "../../styles/about.module.css";

const About = () => {
  return (
    <section id="about">
      <Container>
        <Row>
          <Col lg="6" className={`${classes.about__content}`}>
            <SectionSubtitle subtitle="About me" />
            <h3 className="mt-4">I&apos;m here</h3>
            <h3 className="mb-4">to help your next project</h3>
            <p>
              I am a programmer with a good knowledge of front-end web
              development. I have a strong curiosity to learn which is why I
              like working in a team because for me,it's a way of learning
              something new from other people. I understand being a programmer,
              you want to be alone for the most part just doing your thing, but
              that's the reverse for me, I love talking to people and I love to
              help others. Two years as an administrative officer before going
              into programming has greatly improved my people's skill. This has
              helped me relate and work better with other developers in a team.
              <br />
              <br /> I enjoy contributing to open source projects as I
              understand how impactful open-source projects are to the tech
              community.Also I get to learn more technologies and coding
              practices while contributing.
            </p>

            <div className=" d-flex align-items-center gap-5">
              <div>
                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Problem Solving
                </h6>

                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Responsive design
                </h6>
              </div>

              <div>
                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Creative Idea
                </h6>

                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  High Quality
                </h6>
              </div>
            </div>

            <div className="mt-5">
              <button className="primary__btn">
                <Link href="#portfolio">My Portfolio</Link>
              </button>

              <button className="secondary__btn">
                <Link href="https://drive.google.com/file/d/19WcYAUQfvHIUTOpf8hqcSDXhxQ0_LwCt/view?usp=sharing"
                    target="_blank">Download CV</Link>
              </button>
            </div>
          </Col>

          
          <Col lg="6" md="6" className="ml-5">
            <div className={`${styles.hero__img} text-end `}>
              <Image className="img-fluid" alt="hero-image" src={web} width="650" height="550" />
            </div>
          </Col>

            
          
        </Row>
      </Container>
    </section>
  );
};

export default About;
