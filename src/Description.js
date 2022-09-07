import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Image, Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { Logo, Link } from './Link'
import puffin from './data/puffin.jpg'
import uw from './data/uw.png'
import bablusar from './data/bablusar.jpg'
import spaceship from './data/spaceship.png'

export function FakeymonDesc() {
    return (
        <span>
            <Logo address={links['fakeymon']} type='github' /> A simple text-based RPG in the command-line resembling Pokemon.
            It spans 8 classes, over 1,000 lines of code, and is 100% written in Java.
            <Col className='col-lg-5 col-md-5 mt-3 container'>
                <Image src={bablusar} fluid thumbnail />
            </Col>
        </span>
    )
}

export function PortfolioDesc() {
    return (
        <span>
            <Logo address={links['portfolio']} type='github' /> I wanted to build something
            simplistic and flexible to all devices and screens. It's very bare-bones, only
            relying on <Link address={links['reactBootstrap']} text='React-Bootstrap' /> for
            formatting.
        </span>
    )
}

export function SpaceshipDesc() {
    return (
        <span>
            <Logo address={links['spaceship']} type='github' /> An asteroids-like videogame
            written completely from scratch using nothing but Java and the JFrame library.
            Please note that <Link address={links['maxime']} text='Maxime' /> was the main
            software engineer behind the project, while I primarily assisted with artwork
            and sound.
            <Col className='col-lg-6 col-md-6 mt-3 container'>
                <Image src={spaceship} fluid thumbnail />
            </Col>
        </span>
    )
}

export function JavaCppDesc() {
    return (
        <span>
            I've written a few thousand lines of Java code, most notably in
            my <Link address={links['fakeymon']} text='Fakeymon' /> projects.
            The majority of code I wrote in college was written in Java, and I am quite
            well-versed with using it for practical applications. I have fairly
            thorough knowledge of the logic behind common Java data structures and
            their time complexities. When solving interview problems, Java is always
            my language of choice, and I would be very comfortable with using it
            in a professional setting. <BR />
            In my experience, C++ in a practical setting is quite similar to Java aside from
            syntax differences, garbage collection and header files. I've written at
            least 500 lines of code in C++ and would be comfortable using it in a
            professional setting as well. I am also (slightly less) proficient in C.
        </span>
    )
}

export function JSDesc() {
    return (
        <span>
            I'm comfortable working with Javascript, Typescript, React, HTML + CSS when
            working on my own projects. But front-end in general is
            such a frankenstein of languages and often requires lots of messy CSS,
            so I find it a bit frustrating to work on. I've been tasked with writing
            front-end applications in prior internships and thus I'm more interested
            in working on backend applications professionally.
        </span>
    )
}

export function OtherDesc() {
    return (
        <span>
            I've used the following languages before, from 10 to 500 lines of code in
            each, but I have not used them on a large-scale project or professionally.
            While I'm familiar with them, it would take a while for me to get back
            up-to-speed and become effective programming with them:
            <ul>
                <li>Assembly</li>
                <li>C# (though it's very similar to Java, from my experience)</li>
                <li>Datalog/prolog</li>
                <li>Julia</li>
                <li>Matlab</li>
                <li>Python, Python3</li>
                <li>SML (Standard Meta-Language)</li>
                <li>SQL/SQLite</li>
                <li>Racket/DrRacket</li>
                <li>Ruby</li>
                <li>Rust</li>
            </ul>
        </span>
    )
}

export function GoogleDesc() {
    return (
        <span>
            September 2022 - Present
        </span>
    )
}

export function TeachingDesc() {
    return (
        <span>
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
            assistant at the Allen School and built numerous impactful friendships and
            connections here. In my opinion, it is very difficult to make the most of
            the University's computer science program without teaching at least once.
        </span>
    )
}

export function AmazonDesc() {
    return (
        <span>
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
            organized after work water-skiing and BBQ during my internship. <BR />
            That being said, I did not accept the return offer. While
            my teammates were fantastic and worked on interesting projects, Amazon's
            offer was non-negotiable and less competitive than others.
        </span>
    )
}

export function JonckersDesc() {
    return (
        <span>
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
        </span>
    )
}

export function EducationDesc() {
    return (
        <div>
            <Col className='col-lg-2 col-md-2 col-4 mb-3 container'>
                <Image src={uw} fluid />
            </Col>
            I studied computer science at the University of Washington (UW) Seattle campus,
            Paul G. Allen School of Computer Science and Engineering. I tackled the standard
            12 quarters (12 x 10 = 120 weeks, plus final exams) at the UW from Fall 2018 to
            Spring 2022, in total earning a final GPA of 3.64 (A- range). After 7
            quarters with the declared pre-science major, I was given general admission to
            the school of computer science. Had I not been admitted, I would most likely
            have studied the math major. <BR />
            Many people I've talked to sour at the idea that I was admitted to this relatively
            cutthroat program despite having earned a 2.5 (C letter grade) in the intro course
            CSE 143, and a 2.6 (C letter grade) in the intro math course Math 124. And for good
            reason. Many more-than-qualified candidates are rejected from the school with
            better grades than mine, despite being outstanding, well-rounded, hardworking
            students with bright futures. I went from mediocre grades in my first quarter to
            stellar grades over my entire second year, and had plenty of extracurriculars,
            but some students had great grades throughout their academic experience.<BR />
            My opinion of UW is bittersweet: on one hand,
            I made amazing friendships and connections, grew a lot,
            and secured a software engineering position at a great company. On the other hand,
            thousands of applications (and hundreds of good ones) are rejected every year
            because there aren't enough spots in the program.
            This system causes a lot of stress for students
            struggling for acceptance into any capacity-constrained major. If the admissions system
            were more fair and lenient in accepting students with good academic standing and a
            passion for computing, it
            would be just about the perfect school for any prospective computer scientist or engineer.
        </div>
    )
}

export function TravelPhotographyDesc() {
    return (
        <span>
            I enjoy traveling and photography. I've visited around 20 countries over
            North + South America, Europe and Asia.
            <ul>
                <li> <Logo address={links['birdboozled']} type='instagram' /> I shoot wildlife
                    images with a Canon R5 + Sigma 150-600mm lens</li>
                <li> <Logo address={links['kernelFilm']} type='instagram' /> And use a
                    Hasselblad 501C + Zeiss Planar 80mm CT* for everything else</li>
            </ul>
        </span>
    )
}

export function PuffinDesc() {
    return (
        <span>
            <Row>
                <Col className='col-lg-5 col-md-5 container'>
                    <Image src={puffin} fluid thumbnail />
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
        </span>
    )
}

export function OtherHobbiesDesc() {
    return (
        <span>
            Other random things: I'm a huge
            Pokemon <Link address={links['emerald']} text='Emerald' />
            , <Link address={links['pearl']} text='Pearl' />,
            and <Link address={links['sky']} text='Ex of Sky' /> fan,
            I love all the <Link address={links['ghibli']} text='Ghibli' /> movies,
            I read lots of <Link address={links['webtoon']} text='WebToons' />,
            and am a proud owner of a
            lovely <Link address={links['appartamento']} text='Rocket Appartamento' /> machine.
        </span>
    )
}

/* UTIL */

export const links = {
    appartamento: 'https://rocket-espresso.com/appartamento.html',
    birdboozled: 'https://www.instagram.com/birdboozled/',
    emerald: 'https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Emerald_Version',
    fakeymon: 'https://github.com/paulkia/Fakeymon2',
    kernelFilm: 'https://www.instagram.com/kernelfilm/',
    ghibli: 'https://en.wikipedia.org/wiki/Studio_Ghibli',
    maxime: 'https://github.com/MaxDahan',
    paulGithub: 'https://www.github.com/paulkia/',
    paulLinkedIn: 'https://www.linkedin.com/in/paulkia/',
    pearl: 'https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Diamond_and_Pearl_Versions',
    portfolio: 'https://github.com/paulkia/paulkia.github.io',
    puffin: 'https://ebird.org/species/atlpuf',
    sky: 'https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Mystery_Dungeon:_Explorers_of_Sky',
    spaceship: 'https://github.com/MaxDahan/Spaceship',
    reactBootstrap: 'https://react-bootstrap.github.io/',
    webtoon: 'https://www.webtoons.com/en/',
}

function BR() {
    return (
        <span>
            <br />
            <br />
        </span>
    )
}