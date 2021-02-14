import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function Portfolio() {
    return (
        <Container>

            <Col xs="auto">
                Portfolio
        </Col>
            <Row sm={12} md={6} xl={3}>
                <Card mb={3} m={10} style={{ width: "17rem" }}>
                    <div className="card-body shadow">
                        <Card.Title className="din card-title font-weight-bold">Dinner+Movie</Card.Title>
                        <Card.Text className="card-subtitle mb-2 text-muted">
                            HTML5, CSS3, Node.js, Express, Sequelize, Handlebars
            </Card.Text>
                        <Card.Img className="card-img-top centerImage img-thumbnail shadow img-thumbnail"
                            src="assets/images/dinner&Movie.png" alt="screenshot of dinner&Movie app" />
                        <br />

                        <p className="card-text scroll">
                            Search for movies by genre and get recipe ideas for dinner!
            </p>

                        <div>
                            <a href="https://bhenryh.github.io/Dinner_n_Movie/" target="_blank" className="card-link shadow font-weight-bold">Live link</a>
                            <a href="https://github.com/bhenryh/Dinner_n_Movie" target="_blank" className="card-link shadow font-weight-bold">GitHub</a>
                        </div>
                    </div>
                </Card>
                <Card mb={3} m={10} style={{ width: "17rem" }}>
                    <div className="card-body shadow">
                        <Card.Title className="din card-title font-weight-bold">Weather App</Card.Title>
                        <Card.Text className="card-subtitle mb-2 text-muted">
                            HTML5, CSS3, Node.js, Express, Sequelize, Handlebars
            </Card.Text>
                        <Card.Img className="card-img-top centerImage img-thumbnail shadow img-thumbnail"
                            src="assets/images/dinner&Movie.png" alt="screenshot of dinner&Movie app" />
                        <br />

                        <p className="card-text scroll">
                            Search by city for today's weather and a 5-day forecast.
                            </p>

                        <div>
                            <a href="https://bhenryh.github.io/weatherApp/" target="_blank" className="card-link shadow font-weight-bold">Live link</a>
                            <a href="https://github.com/bhenryh/weatherApp" target="_blank" className="card-link shadow font-weight-bold">GitHub</a>
                        </div>
                    </div>
                </Card>
                <Card mb={3} m={10} style={{ width: "17rem" }}>
                    <div className="card-body shadow">
                        <Card.Title className="din card-title font-weight-bold">Note Taker</Card.Title>
                        <Card.Text className="card-subtitle mb-2 text-muted">
                            HTML5, CSS3, Node.js, Express, Sequelize, Handlebars
            </Card.Text>
                        <Card.Img className="card-img-top centerImage img-thumbnail shadow img-thumbnail"
                            src="assets/images/dinner&Movie.png" alt="screenshot of dinner&Movie app" />
                        <br />

                        <p className="card-text scroll">
                            Use this app to take notes, store them, and delete them.
                            </p>

                        <div>
                            <a href="https://agile-brushlands-70619.herokuapp.com/" target="_blank" className="card-link shadow font-weight-bold">Live link</a>
                            <a href="https://github.com/bhenryh/noteTaker" target="_blank" className="card-link shadow font-weight-bold">GitHub</a>
                        </div>
                    </div>
                </Card>
                <Card mb={3} m={10} style={{ width: "17rem" }}>
                    <div className="card-body shadow">
                        <Card.Title className="din card-title font-weight-bold">Pokessist</Card.Title>
                        <Card.Text className="card-subtitle mb-2 text-muted">
                            HTML5, CSS3, Node.js, Express, Sequelize, Handlebars
            </Card.Text>
                        <Card.Img className="card-img-top centerImage img-thumbnail shadow img-thumbnail"
                            src="assets/images/dinner&Movie.png" alt="screenshot of dinner&Movie app" />
                        <br />

                        <p className="card-text scroll">
                            Search for individual Pokemon and receive type info and more.
                            </p>

                        <div>
                            <a href="https://pokessist-app.herokuapp.com/" target="_blank" className="card-link shadow font-weight-bold">Live link</a>
                            <a href="https://github.com/bhenryh/Pokessist" target="_blank" className="card-link shadow font-weight-bold">GitHub</a>
                        </div>
                    </div>
                </Card>
                <Card mb={3} m={10} style={{ width: "17rem" }}>
                    <div className="card-body shadow">
                        <Card.Title className="din card-title font-weight-bold">Note Taker</Card.Title>
                        <Card.Text className="card-subtitle mb-2 text-muted">
                            HTML5, CSS3, Node.js, Express, Sequelize, Handlebars
            </Card.Text>
                        <Card.Img className="card-img-top centerImage img-thumbnail shadow img-thumbnail"
                            src="assets/images/dinner&Movie.png" alt="screenshot of dinner&Movie app" />
                        <br />

                        <p className="card-text scroll">
                            Use this app to take notes, store them, and delete them.
                            </p>

                        <div>
                            <a href="https://agile-brushlands-70619.herokuapp.com/" target="_blank" className="card-link shadow font-weight-bold">Live link</a>
                            <a href="https://github.com/bhenryh/noteTaker" target="_blank" className="card-link shadow font-weight-bold">GitHub</a>
                        </div>
                    </div>
                </Card>
                <Card mb={3} m={10} style={{ width: "17rem" }}>
                    <div className="card-body shadow">
                        <Card.Title className="din card-title font-weight-bold">Pokessist</Card.Title>
                        <Card.Text className="card-subtitle mb-2 text-muted">
                            HTML5, CSS3, Node.js, Express, Sequelize, Handlebars
            </Card.Text>
                        <Card.Img className="card-img-top centerImage img-thumbnail shadow img-thumbnail"
                            src="assets/images/dinner&Movie.png" alt="screenshot of dinner&Movie app" />
                        <br />

                        <p className="card-text scroll">
                            Search for individual Pokemon and receive type info and more.
                            </p>

                        <div>
                            <a href="https://pokessist-app.herokuapp.com/" target="_blank" className="card-link shadow font-weight-bold">Live link</a>
                            <a href="https://github.com/bhenryh/Pokessist" target="_blank" className="card-link shadow font-weight-bold">GitHub</a>
                        </div>
                    </div>
                </Card>

            </Row>
        </Container >
    );
}
export default Portfolio;