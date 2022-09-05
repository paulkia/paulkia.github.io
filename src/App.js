import React, { useEffect, useState } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Tabs, Tab, ListGroup, Image, Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { Logo, Link } from './Link'
import email from './data/atsmall.png'
import puffin from './data/puffin.jpg'
import uw from './data/uw.png'
import bablusar from './data/bablusar.jpg'
import spaceship from './data/spaceship.png'

const age = new Date(new Date() - new Date(2000, 9, 27)).getFullYear() - 1970

const links = {
  birdboozled: 'https://www.instagram.com/birdboozled/',
  fakeymon: 'https://github.com/paulkia/Fakeymon2',
  kernelFilm: 'https://www.instagram.com/kernelfilm/',
  maxime: 'https://github.com/MaxDahan',
  paulGithub: 'https://www.github.com/paulkia/',
  paulLinkedIn: 'https://www.linkedin.com/in/paulkia/',
  puffin: 'https://ebird.org/species/atlpuf',
  spaceship: 'https://github.com/MaxDahan/Spaceship',
  reactBootstrap: 'https://react-bootstrap.github.io/',
}

function Projects() {
  return (
    <Tabs className="mb-3" transition={false}>
      <Tab eventKey='fakeymon' title='Fakeymon'>
        <Logo address={links['fakeymon']} type='github' /> A simple text-based RPG in the command-line resembling Pokemon.
        It spans 8 classes, over 1,000 lines of code, and is 100% written in Java.
        <Col className='col-4 mt-3 container'>
          <Image src={bablusar} fluid thumbnail />
        </Col>
      </Tab>
      <Tab eventKey='portfolio' title='This Website'>
        I wanted to build something simplistic and flexible to all devices and screens.
        It's very bare-bones, only relying
        on <Link address={links['reactBootstrap']} text='React-Bootstrap' /> for
        formatting.
      </Tab>
      <Tab eventKey='spaceship' title='Spaceship'>
        <Logo address={links['spaceship']} type='github' /> An asteroids-like videogame
        written completely from scratch using nothing but Java and the JFrame library.
        Please note that <Link address={links['maxime']} text='Maxime'/> was the
        software engineer behind the project, while I primarily assisted with artwork
        and sound.
        <Col className='col-5 mt-3 container'>
          <Image src={spaceship} fluid thumbnail />
        </Col>
      </Tab>
    </Tabs>
  )
}

function PreviousRoles() {
  return (
    <Tabs className='mb-3' transition={false}>
      <Tab eventKey='google' title='Google'>
        September 2022 - Present
      </Tab>
      <Tab eventKey='allen' title='Teaching @ UW'>
        Winter 2021, Spring 2021, Winter 2022 (30 weeks total) <BR />
        I was teacher assistant for computer science courses at the University of
        Washington (Paul G. Allen School of Computer Science and Engineering, what
        a mouthful) for 3 separate quarters.
        <ul>
          <li>CSE 373 (Winter 2021): Data Structures and Algorithms</li>
          <li>CSE 413 (Spring 2021): Programming Languages and Implementation</li>
          <li>CSE 312 (Winter 2022): Foundations of Computing II</li>
        </ul>
        Each time, the job demanded several responsibilities, including scheduling
        1-1 meetings with students, presenting to classrooms, grading, assigning and
        recommending a variety of lessons, coordinating and meeting with other
        teacher-assistants and professors, etc. I had an amazing time as a teacher
        assistant at the Allen school and built numerous impactful friendships and
        connections here. In my opinion, it is very difficult to make the most of
        the University's computer science program without teaching at least once.
      </Tab>
      <Tab eventKey='amazon' title='Amazon'>
        June 2021 - September 2021 (12 weeks) <BR />
        At Amazon, I engineered a user-friendly application consolidating API calls
        and database accesses into a tool. This was a sort of debugging tool, which
        was used to speed up software engineer's work as well as that of
        "personalization strategists" at Amazon. <BR />
        When I mention that I worked at Amazon, many people tell me they've heard
        negative things about work-life-balance, benefits, salary, and the company
        culture. From my extremely limited view of the company, I only have positive
        things to say. My manager seemed to do a great job making all team members
        feel comfortable and included, and many co-workers were good friends. People
        organized after work water-skiing and BBQ during my internship. 10/10
      </Tab>
      <Tab eventKey='jonckers' title='Jonckers'>
        January 2020 - July 2020 (7 months) <BR />
        I got to where I am thanks to Jonckers. It's really hard to get your foot in
        the door in STEM, even being in a prestigious computer science school. It's
        certainly thanks to them giving me a chance that I was able to get started
        on building a decent resume. <BR />
        That being said, I would not have recommended a remote internship with
        Jonckers at the time. My manager and mentor were both on a different continent
        and I received very little guidance during the role. I was eventually able to
        complete my project but it didn't feel organized and I did not feel as though
        my work was important. At the same time, this was at the beginning of the
        pandemic so remote work was less familiar to everyone, and all my teammates
        were very nice and hardworking people.
      </Tab>
    </Tabs>
  )
}

function Hobbies() {
  return (
    <div>
      I enjoy traveling and photography. I've visited around 20 countries over
      North + South America, Europe and Asia. 
      <ul>
        <li> <Logo address={links['birdboozled']} type='instagram' /> I shoot wildlife
        images with a Canon R5 + Sigma 150-600mm lens</li>
        <li> <Logo address={links['kernelFilm']} type='instagram' /> And use a
        Hasselblad 501C + Zeiss Planar 80mm CT* for everything else</li>
      </ul>
      <div className='m-3'>
        <Row>
          <Col className='col-5 container'>
            <Image src={puffin} fluid thumbnail/>
          </Col>
        </Row>
        <Row className='m-2'>
          <Col md='auto' className='container'>
              A beautiful <Link address={links['puffin']} text='Atlantic Puffin' /> shot
              on my trip to Iceland in July 2022. <OverlayTrigger
                placement='top'
                overlay={
                  <Tooltip>
                    <div className='code'>
                      Downscaled from 31.5mp. <br />
                      600mm f/6.3 ISO2000 1/1600
                    </div>
                  </Tooltip>
                }
              >
              <span className={"bi bi-info-circle-fill"}></span>
              </OverlayTrigger>
          </Col>
        </Row>
      </div>
      Unlike some peers, I do not build keyboards, I'm not handy, and I'm not a
      rock-climber!
    </div>
  )
}

function Education() {
  return (
    <div>
      <Col className='col-1 mb-3 container'>
        <Image src={uw} fluid />
      </Col>
      I studied computer science at the University of Washington (UW) Seattle campus,
      Paul G. Allen School of Computer Science and Engineering. I tackled the standard
      12 quarters (12 x 10 = 120 weeks, plus final exams) at the UW from Fall 2018 to
      Spring 2022, in total earning a final GPA of 3.64 (B+ or A- range). After 7
      quarters with the declared pre-science major, I was given general admission to
      the school of computer science. Had I not been admitted, I would most likely
      have studied the math major. <BR />
      Many people I've talked to sour at the idea that I was admitted to this relatively
      cutthroat program despite having earned a 2.5 (C letter grade) in the intro course
      CSE 143, and a 2.6 (C letter grade) in the intro math course Math 124. And for good
      reason. Many more-than-qualified candidates are rejected from the school with
      better grades than mine, despite being outstanding, well-rounded, hardworking
      students with bright futures.<BR />
      My memory of UW is very bittersweet: on one hand,
      I made amazing friendships and connections, and secured a software engineering
      position at a FAANG company. On the other hand, thousands of applications
      (and hundreds of good ones) are rejected every year with the excuse that there
      "aren't enough spots" and this system causes a lot of stress for students
      struggling for acceptance into any capacity-constrained major. <BR />
      To be fair, the supply of professors is low
      due to the nature of the industry (therefore the university is not entirely at
      fault), and hardworking students can aim for the Info, Applied Math, regular Math,
      and other STEM-related majors and succeed with enough luck and hard work. It is
      still very difficult for students to enter any capacity-constrained major due
      to "weed-out" courses, and the barrier for entry into STEM majors at UW Seattle
      during my time there was unreasonably high.
    </div>
  )
}

function About() {
  return (
    <div>
      Paul Karmel ({age}) / Software Engineer @ Google since September
      2022 <Logo address={links['paulGithub']} type='github' /> <Logo
      address={links['paulLinkedIn']} type='linkedin' />
      <Tab.Container transition={false}>
        <Row>
          <Col md='auto' className='mt-2'>
            <ListGroup>
              <ListGroup.Item action href="#projects">
                Projects
              </ListGroup.Item>
              <ListGroup.Item action href="#prev-roles">
                Previous Roles
              </ListGroup.Item>
              <ListGroup.Item action href="#hobbies">
                Hobbies
              </ListGroup.Item>
              <ListGroup.Item action href='#educ'>
                Education
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col className='mt-2'>
            <Tab.Content>
              <Tab.Pane eventKey="#projects">
                <Projects />
              </Tab.Pane>
              <Tab.Pane eventKey="#prev-roles">
                <PreviousRoles />
              </Tab.Pane>
              <Tab.Pane eventKey="#hobbies">
                <Hobbies />
              </Tab.Pane>
              <Tab.Pane eventKey='#educ'>
                <Education />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  )
}

function Contact() {
  return (
    <div>
      <Image src={email}></Image>
    </div>
  )
}

function App() {
  return (
    <div className='p-5 code'>
      <Tabs
      className="mb-3"
      transition={false}
    >
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
function BR() {
  return (
    <div>
      <br />
    </div>
  )
}

export default App;
