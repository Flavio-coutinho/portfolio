/* eslint-disable jsx-a11y/alt-text */
import { Col, Container, Tab, Row } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/projImg1.png";
import projImg2 from "../assets/img/projImg1.png";
import projImg3 from "../assets/img/projImg1.png";



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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, repellendus, corporis rem incidunt numquam dolore tenetur omnis fugiat accusantium minima quas. Ducimus dolorum excepturi hic! Qui nam earum delectus reprehenderit?</p>

                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
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
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}