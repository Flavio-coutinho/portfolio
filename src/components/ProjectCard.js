/* eslint-disable jsx-a11y/alt-text */
import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl}) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imbox">
                <img src={ imgUrl }/>
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}