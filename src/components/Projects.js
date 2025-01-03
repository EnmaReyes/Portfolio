import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard, ProjectCardCourse } from "./ProjectCard";
import projAR from "../assets/img/project-AR.png";
import projARLog from "../assets/img/project-AR-login.png";
import projARReg from "../assets/img/project-AR-register.png";
import projByGio from "../assets/img/project-bygio.png";
import projByGioLogin from "../assets/img/project-bygio-login.png";
import projByGioReg from "../assets/img/project-bygio-register.png";
import RyM from "../assets/img/RyM.png";
import RaveM from "../assets/img/ravemotion.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Adorando al rey",
      description: "Design & Development",
      imgUrl: projAR,
      href: "https://adorandoalrey.com",
    },
    {
      title: "Adorando al rey Login",
      description: "Design & Development",
      imgUrl: projARLog,
      href: "https://adorandoalrey.com/login",
    },
    {
      title: "Adorando al rey Register",
      description: "Design & Development",
      imgUrl: projARReg,
      href: "https://adorandoalrey.com/register",
    },
    {
      title: "ByGio",
      description: "Design & Development",
      imgUrl: projByGio,
      href: "https://bygio.onrender.com",
    },
    {
      title: "ByGio Login",
      description: "Design & Development",
      imgUrl: projByGioLogin,
      href: "https://bygio.onrender.com",
    },
    {
      title: "ByGio Register",
      description: "Design & Development",
      imgUrl: projByGioReg,
      href: "https://bygio.onrender.com/register",
    },
  ];
  const courseProjects = [
    {
      title: "Rick and Morty",
      description: "Design & Development",
      imgUrl: RyM,
    },
    {
      title: "Rave Motion",
      description: "Design & Development",
      imgUrl: RaveM,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <p>Featured projects as a freelancer</p>
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>projects carried out in web development courses</p>
                        <Row>
                          {courseProjects.map((project, index) => {
                            return (
                              <ProjectCardCourse key={index} {...project} />
                            );
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          I continue developing projects to enrich my knowledge
                          and experience as a web developer
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
