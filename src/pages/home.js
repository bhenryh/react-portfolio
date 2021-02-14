import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import profilePic from "../images/BHH 20.JPG"

function Home() {
  return (
    <div>
      <Container>
        <Row className="home">
          <div class="col-md-12">
            <h1>Meet Bruce Hayes</h1>
          </div>
          <div className="col-md-4">
            <img className="img img-thumbnail" src={profilePic} />
          </div>
          <div className="col-md-6">
            <p className="aboutMe">Bruce is a musician and music instructor based out of Orlando, Florida. Although he is most proficient
            playing the electric guitar, he also sings and dabbles in electric bass and drum kit. He is currently taking a
            forced break from gigging due to the worldwide COVID-19 pandemic, and using his extra time to pursue his
          longtime interest in computer programming through the University of Central Florida.</p>
          </div>
        </Row>
      </Container>
    </div>
  );
}
export default Home;
