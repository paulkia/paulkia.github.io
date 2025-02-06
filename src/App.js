import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Tabs, Tab, ListGroup, Image, Row, Col } from "react-bootstrap";
import { Logo } from "./Link";
import email from "./data/atsmall.png";
import {
  links,
  FakeymonDesc,
  PortfolioDesc,
  SpaceshipDesc,
  JavaDesc,
  CppDesc,
  JSDesc,
  OtherDesc,
  GoogleDesc,
  TeachingDesc,
  AmazonDesc,
  JonckersDesc,
  TravelPhotographyDesc,
  PuffinDesc,
  OtherHobbiesDesc,
  EducationDesc,
  SnowballDesc,
} from "./Description";

function Projects() {
  return (
    <Tabs className="mb-3" transition={false}>
      <Tab eventKey="fakeymon" title="Fakeymon">
        <FakeymonDesc />
      </Tab>
      <Tab eventKey="snowball" title="Snowball">
        <SnowballDesc />
      </Tab>
      <Tab eventKey="portfolio" title="This Website">
        <PortfolioDesc />
      </Tab>
      <Tab eventKey="spaceship" title="Spaceship">
        <SpaceshipDesc />
      </Tab>
    </Tabs>
  );
}

function Skills() {
  return (
    <Tabs className="mb-3" transition={false}>
      <Tab eventKey="cpp" title="C++">
        <CppDesc />
      </Tab>
      <Tab eventKey="java" title="Java">
        <JavaDesc />
      </Tab>
      <Tab eventKey="javascript" title="Javascript">
        <JSDesc />
      </Tab>
      <Tab eventKey="other" title="Other">
        <OtherDesc />
      </Tab>
    </Tabs>
  );
}

function Experience() {
  return (
    <Tabs className="mb-3" transition={false}>
      <Tab eventKey="google" title="Google">
        <GoogleDesc />
      </Tab>
      <Tab eventKey="amazon" title="Amazon">
        <AmazonDesc />
      </Tab>
      <Tab eventKey="allen" title="Teaching @ UW">
        <TeachingDesc />
      </Tab>
      <Tab eventKey="jonckers" title="Jonckers">
        <JonckersDesc />
      </Tab>
    </Tabs>
  );
}

function Hobbies() {
  return (
    <div>
      <TravelPhotographyDesc />
      <PuffinDesc />
      <OtherHobbiesDesc />
    </div>
  );
}

function Education() {
  return <EducationDesc />;
}

function About() {
  const [key, setKey] = useState("#experience");
  const sel = {
    background: "var(--darkCol)",
    borderColor: "var(--darkCol)",
    color: "white",
  };
  const pages = {
    Experience: <Experience />,
    Projects: <Projects />,
    Skills: <Skills />,
    Hobbies: <Hobbies />,
    Education: <Education />,
  };

  let [listGroupItems, tabPanes] = [[], []];
  Object.keys(pages).forEach((page) => {
    const id = page.toLocaleLowerCase();
    listGroupItems.push(
      <ListGroup.Item
        key={`${id}`}
        style={key === `#${id}` ? sel : {}}
        action
        href={`#${id}`}
      >
        {page}
      </ListGroup.Item>
    );
    tabPanes.push(
      <Tab.Pane key={page} eventKey={`#${id}`}>
        {pages[page]}
      </Tab.Pane>
    );
  });
  return (
    <div>
      Paul Karmel ({age}) / Software Engineer{" "}
      <Logo address={links["paulGithub"]} type="github" />{" "}
      <Logo address={links["paulLinkedIn"]} type="linkedin" />
      <Tab.Container
        transition={false}
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Row className="mt-3">
          <Col md="2">
            <ListGroup key="lg">{listGroupItems}</ListGroup>
          </Col>
          <Col>
            <Tab.Content className="mt-lg-0 mt-md-0 mt-3">
              {tabPanes}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}

function Contact() {
  return <Image src={email}></Image>;
}

function App() {
  return (
    <div className="p-lg-5 p-md-5 p-3">
      <Tabs className="mb-3" transition={false}>
        <Tab eventKey="about" title="About">
          <About />
        </Tab>
        <Tab eventKey="contact" title="Contact">
          <Contact />
        </Tab>
      </Tabs>
    </div>
  );
}

/* UTIL */

const age = new Date(new Date() - new Date(2000, 8, 27)).getFullYear() - 1970;

export default App;
