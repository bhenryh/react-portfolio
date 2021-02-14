import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Contact() {
    return (
        <div>
            <Container fluid>
                <Col xs="auto">
                    Contact
        </Col>
                <Row>
                    <Col md={3}></Col>
                    <Col md={6}>
                        <h2 className="subtext justify-content-center">Thank you for visiting my webpage.<br>
                        </br>If you'd like to see more, please email me by clicking the link below. </h2>
                        <a href="mailto:brucehenryhayes@yahoo.com"
                            class="fa fa-address-book-o d-flex justify-content-center">brucehenryhayes@yahoo.com</a>
                    </Col>

                </Row>
            </Container>

        </div>
    );
}
export default Contact;
