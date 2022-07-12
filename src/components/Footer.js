import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailChimpForm";


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={3} className="text-center text-sm-end">
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
