import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/ss1.png";
import projImg2 from "../assets/img/ss2.png";
import projImg3 from "../assets/img/ss3.png";
import projImg4 from "../assets/img/ss4.png";
import projImg5 from "../assets/img/ss5.png";
import projImg6 from "../assets/img/ss6.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  // const link =https://github.com/pranjalihajare

  const projects = [
    {
      title: "JobProtal",
      description: "A full-stack website enabling users to search and apply for jobs and employers to post listings, with MERN stack.",
      imgUrl: projImg1,
      // link:https://github.com/pranjalihajare/JobPortal,
    },
    {
      title: "Event Planner",
      description: "A modern, responsive single-page Group Event Planner app built with Next.js, TypeScript, and Tailwind CSS that lets users suggest events, track RSVPs, and view shared calendars with real-time updates.",
     imgUrl: projImg2,
    },
    {
      title: " Restauran App",
      description: "A visually appealing, fully responsive restaurant app built with Next.js and TypeScript, featuring dynamic menus, image galleries, and seamless user interactions.",
      imgUrl: projImg3,
    },
    {
      title: "Chatgpt",
      description: "Chatgpt is an AI-powered conversational assistant developed by OpenAI that can understand and generate human-like text responses for a wide range of tasks.",
      imgUrl: projImg4,
    },
    {
      title: "FakeStore API",
      description: "A dynamic shopping website built with React.js that uses the Fake Store API to display products, manage cart functionality, and handle user authentication with a responsive design.",
      imgUrl: projImg5,
    },
    {
      title: "User Profile Analyzer",
      description: "A GitHub User Profile Analyzer built with React and TypeScript that fetches and visualizes user data, repositories, and activity insights using interactive charts.",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
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
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                        <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                      {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p> */}
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                        <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                      {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p> */}
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
