/* eslint-disable jsx-a11y/alt-text */
import { Col, Container, Tab, Row, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png"
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";


export const Projects = () => {
    
    const projects = [
        {
            title: "CleanArchitecture-DDD",
            description: "Clean architecture",
            imgUrl: projImg1,
        },
        {
            title: "CleanArchitecture-DDD",
            description: "Clean architecture",
            imgUrl: projImg2,
        },
        {
            title: "CleanArchitecture-DDD",
            description: "Clean architecture",
            imgUrl: projImg3,
        },
        {
            title: "CleanArchitecture-DDD",
            description: "Clean architecture",
            imgUrl: projImg1,
        },
        {
            title: "CleanArchitecture-DDD",
            description: "Clean architecture",
            imgUrl: projImg2,
        },
        {
            title: "CleanArchitecture-DDD",
            description: "Clean architecture",
            imgUrl: projImg3,
        },
    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projetos</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat consequatur quis impedit adipisci quia ducimus quam expedita laborum voluptates. Libero, temporibus maxime! Odit mollitia adipisci est saepe aperiam sequi soluta.</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab one</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab two</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third" >Tab three</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
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
                                <Tab.Pane eventKey="second">Lorem</Tab.Pane>
                                <Tab.Pane eventKey="third">Lorem</Tab.Pane>

                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} ></img>
        </section>
    )
}