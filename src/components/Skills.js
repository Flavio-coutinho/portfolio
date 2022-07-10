import { Container, Row, Col} from "react-bootstrap";
import net from "../assets/img/dotnet.svg";
import github from "../assets/img/github.svg";
import graphql from "../assets/img/graphql.svg";
import css from "../assets/img/css.svg";
import git from "../assets/img/git.svg";
import nextjs from "../assets/img/nextjs.svg";
import react from "../assets/img/react.svg";
import typescript from "../assets/img/typescript.svg";
import nodejs from "../assets/img/nodejs.svg";
import docker from "../assets/img/docker.svg";
import html from "../assets/img/html.svg";
import npm from "../assets/img/npm.svg";



export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br></br> Ipsa temporibus porro blanditiis libero assumenda sapiente quo cumque optio adipisci aliquam, est rem repellat officiis facilis, delectus tenetur facere deserunt dolorum.</p>
                            <Container responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={net} alt="Img" />
                                    <h5>.NET</h5>
                                </div>
                                <div className="item">
                                    <img src={typescript} alt="Img" />
                                    <h5>TypeScript</h5>
                                </div>
                                <div className="item">
                                    <img src={nodejs} alt="Img" />
                                    <h5>Node.js</h5>
                                </div> 
                                <div className="item">
                                    <img src={react} alt="Img" />
                                    <h5>React</h5>
                                </div>
                                <div className="item">
                                    <img src={nextjs} alt="Img" />
                                    <h5>Next.js</h5>
                                </div>
                                <div className="item">
                                    <img src={css} alt="Img" />
                                    <h5>CSS3</h5>
                                </div>
                                <div className="item">
                                    <img src={html} alt="Img" />
                                    <h5>HTML5</h5>
                                </div>
                                <div className="item">
                                    <img src={git} alt="Img" />
                                    <h5>Git</h5>
                                </div>
                                <div className="item">
                                    <img src={github} alt="Img" />
                                    <h5>Github</h5>
                                </div>
                                <div className="item">
                                    <img src={docker} alt="Img" />
                                    <h5>Docker</h5>
                                </div>
                                <div className="item">
                                    <img src={graphql} alt="Img" />
                                    <h5>GraphQL</h5>
                                </div>
                                <div className="item">
                                    <img src={npm} alt="Img" />
                                    <h5>Npm</h5>
                                </div>
                            </Container>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}