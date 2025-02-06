import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Image, Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Logo, Link } from "./Link";
import puffin from "./data/puffin.jpg";
import uw from "./data/uw.png";
import bablusar from "./data/bablusar.jpg";
import snowball from "./data/snowball.jpg";
import spaceship from "./data/spaceship.png";

export function FakeymonDesc() {
  return (
    <span>
      <Logo address={links["fakeymon"]} type="github" /> A simple text-based RPG
      in the command-line resembling Pokemon. It spans 8 classes, over 1,000
      lines of code, and is 100% written in Java.
      <Col className="col-lg-5 col-md-5 mt-3 container">
        <Image src={bablusar} fluid thumbnail />
      </Col>
    </span>
  );
}
export function SnowballDesc() {
  return (
    <span>
      <Logo address={links["snowball"]} type="github" /> My first complete unity
      project. A two player game, with WASD and arrow-keys as controls. Players
      can customize their color scheme, run around to collect snow, throw snow
      at each other, and try to stay warm. The first player to get cold loses!{" "}
      <BR />
      Snowball spans over 10 classes, over 500 lines of code, and is 100%
      written in C#.
      <Col className="col-lg-5 col-md-5 mt-3 container">
        <Image src={snowball} fluid thumbnail />
      </Col>
    </span>
  );
}
export function PortfolioDesc() {
  return (
    <span>
      <Logo address={links["portfolio"]} type="github" /> I wanted to build
      something simplistic and flexible to all devices and screens. It's very
      bare-bones, only relying on{" "}
      <Link address={links["reactBootstrap"]} text="React-Bootstrap" /> for
      formatting.
    </span>
  );
}

export function SpaceshipDesc() {
  return (
    <span>
      <Logo address={links["spaceship"]} type="github" /> An asteroids-like
      videogame written completely from scratch using nothing but Java and the
      JFrame library. Please note that{" "}
      <Link address={links["maxime"]} text="Maxime" /> was the main software
      engineer behind the project, while I primarily assisted with artwork and
      sound.
      <Col className="col-lg-6 col-md-6 mt-3 container">
        <Image src={spaceship} fluid thumbnail />
      </Col>
    </span>
  );
}

export function CppDesc() {
  return (
    <span>
      I used C++ on a daily basis during my 2.25 year tenure at Google. I
      achieved Google C++ readability, certifying my ability to use it with best
      practices, and that I could provide C++ mentorship to other professionals.{" "}
      <BR />
      In my experience, because C++ does not check for null pointers, out of
      bounds errors, or memory management built-in, it is not really suitable
      for humans. I usually don't put much stock in debates on whether this or
      that language is best. However, for large systems at large companies, I've
      been convinced that Java is probably more appropriate. <BR />
      In C++'s defense, it's extremely efficient and low-energy.{" "}
      <Link
        address={links["thenewstack"]}
        text="See this page by thenewstack.io"
      />{" "}
      on energy consumption of languages. C is fairly limited and Rust isn't
      currently supported by many systems (as of 2022), so C++ is my favorite of
      the top 3 performers. Energy consumption is a big thing in my opinion,
      since{" "}
      <Link
        address={links["grcooling"]}
        text="3% of electricity is sapped by data centers"
      />{" "}
      and{" "}
      <Link
        address={links["climatechange"]}
        text="climate change may be the greatest existential threat"
      />{" "}
      to humans.
    </span>
  );
}

export function JavaDesc() {
  return (
    <span>
      I've written a few thousand lines of Java code, most notably in my{" "}
      <Link address={links["fakeymon"]} text="Fakeymon" /> projects. The
      majority of code I wrote in college was written in Java, and I am quite
      well-versed with using it for practical applications. I have fairly
      thorough knowledge of the logic behind common Java data structures and
      their time complexities. I've transitioned to Python for interview
      problems, but Java is likely my favorite language to code in.
    </span>
  );
}

export function JSDesc() {
  return (
    <span>
      I'm comfortable working with Javascript, Typescript, React, HTML + CSS
      when working on my own projects. But front-end in general is such a
      frankenstein of languages and often requires lots of messy CSS, so I find
      it a bit frustrating to work on. I just about refuse to take on front-end
      projects whenever given the choice. This website is the exception.
    </span>
  );
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
        <li>Datalog/prolog</li>
        <li>Julia</li>
        <li>Matlab</li>
        <li>SML (Standard Meta-Language)</li>
        <li>SQL/SQLite</li>
        <li>Racket/DrRacket</li>
        <li>Ruby</li>
        <li>Rust</li>
      </ul>
    </span>
  );
}

export function GoogleDesc() {
  return (
    <span>
      September 2022 - January 2025 (2 years, 3 months) <BR />
      At Google, I worked in the ProfileService team on profile photos. I
      primarily did backend engineering work near the storage layer. The core
      work was designing and implementing API calls as we built an entirely new
      image storing, processing, and serving stack. The old monolithic stack had
      been built in 2007 during the creation of Gmail, and was significantly
      complicated by the advent of Google+ which has been deprecated for a few
      years. <BR />
      Google hired me to help them build and migrate services to comply with
      European Union laws. There are multiple acts (DMA, DSA) related to
      protecting European consumers which require significant work for these
      large tech companies.
      <BR />
      <OverlayTrigger
        placement="top"
        overlay={
          <Tooltip>
            <div className="code">Facebook, Amazon, Apple, Netflix, Google</div>
          </Tooltip>
        }
      >
        <span style={{ color: "var(--col)" }}>FAANGs</span>
      </OverlayTrigger>{" "}
      have a plethora of benefits, generally well-maintained code-bases, and
      robust, tested tools and infrastructure. However, they have many internal
      tools, so engineers spend a lot of time developing some skills that don't
      translate to many other places.
      <BR />
      Google culture in general seems to be more laid-back and low-stress than
      the other FAANGs. My team's culture in particular was fantastic. Feedback
      is constructive and people are friendly. Engineers are also brilliant and
      held me and themselves to a very high standard.
      <BR />
      Before joining Google, I used{" "}
      <Link address={links["levels"]} text="levels.fyi" /> to get an idea of
      total compensation awarded to Google employees. I was an L3, but
      compensation for L3s now is a decent bit more now than it was when I
      joined.
    </span>
  );
}

export function AmazonDesc() {
  return (
    <span>
      June 2021 - September 2021 (12 weeks) <BR />
      At Amazon, I engineered a user-friendly application consolidating API
      calls and database accesses into a tool. This was a sort of debugging
      tool, which was used to speed up software engineer's work as well as that
      of 'personalization strategists' at Amazon. <BR />
      When I mention that I worked at Amazon, many people tell me they've heard
      negative things about work-life-balance, benefits, salary, and the company
      culture. From my extremely limited view of the company, I only have
      positive things to say. My manager seemed to do a great job making all
      team members feel comfortable and included, and many co-workers were good
      friends. People organized after work water-skiing and BBQ during my
      internship. <BR />
      That being said, I did not accept the return offer. While my teammates
      were fantastic and worked on interesting projects, Amazon's offer was
      non-negotiable and less competitive than others.
    </span>
  );
}

export function TeachingDesc() {
  return (
    <span>
      Winter 2021, Spring 2021, Winter 2022 (30 weeks total) <BR />I was teacher
      assistant for computer science courses at the University of Washington
      (Paul G. Allen School of Computer Science and Engineering, what a
      mouthful) for 3 separate quarters.
      <ul>
        <li>CSE 373 (Winter 2021): Data Structures and Algorithms</li>
        <li>CSE 413 (Spring 2021): Programming Languages and Implementation</li>
        <li>CSE 312 (Winter 2022): Foundations of Computing II</li>
      </ul>
      Each time, the job demanded several responsibilities, including scheduling
      1-1 meetings with students, presenting to classrooms, grading, assigning
      and recommending a variety of lessons, coordinating and meeting with other
      teacher-assistants and professors, etc. I had an amazing time as a teacher
      assistant at the Allen School and built numerous impactful friendships and
      connections here. In my opinion, it is very difficult to make the most of
      the University's computer science program without teaching at least once.
    </span>
  );
}

export function JonckersDesc() {
  return (
    <span>
      January 2020 - July 2020 (7 months) <BR />
      I got to where I am thanks to Jonckers. It's really hard to get your foot
      in the door in STEM, even being in a prestigious computer science school.
      It's certainly thanks to them giving me a chance that I was able to get
      started on building a decent resume. <BR />
      That being said, I would not have recommended a remote internship with
      Jonckers at the time. My manager and mentor were both on a different
      continent and I received very little guidance during the role. I was
      eventually able to complete my project but it didn't feel organized and I
      did not feel as though my work was important. At the same time, this was
      at the beginning of the pandemic so remote work was less familiar to
      everyone, and all my teammates were very nice and hardworking people.
    </span>
  );
}

export function EducationDesc() {
  return (
    <div>
      <Col className="col-lg-2 col-md-2 col-4 mb-3 container">
        <Image src={uw} fluid />
      </Col>
      Fall 2018 - Spring 2022 (4 years) <BR />
      I studied computer science at the University of Washington (UW) Seattle
      campus, Paul G. Allen School of Computer Science and Engineering. I
      tackled the standard 12 quarters (12 x 10 = 120 weeks, plus final exams)
      at the UW from Fall 2018 to Spring 2022, in total earning a final GPA of
      3.64 (A- range). After 7 quarters with the declared pre-science major, I
      was given general admission to the school of computer science. Had I not
      been admitted, I would most likely have studied the math major.
      <BR />
      Many people I've talked to sour at the idea that I was admitted to this
      relatively cutthroat program despite having earned a 2.5 (C letter grade)
      in the intro course CSE 143, and a 2.6 (C letter grade) in the intro math
      course Math 124. And for good reason. Many more-than-qualified candidates
      are rejected from the school with better grades than mine, despite being
      outstanding, well-rounded, hardworking students with bright futures. I
      went from mediocre grades in my first quarter to stellar grades over my
      entire second year, and had plenty of extracurriculars, but some students
      had great grades throughout their academic experience.
      <BR />
      My opinion of UW is bittersweet: on one hand, I made amazing friendships
      and connections, grew a lot, and secured a software engineering position
      at a great company. On the other hand, thousands of applications (and
      hundreds of great ones) are rejected every year because there aren't
      enough spots in the program. This system causes a lot of stress for
      students struggling for acceptance into any capacity-constrained major. If
      the admissions system were more fair and lenient in accepting students
      with good academic standing and a passion for computing, it would be a
      much better school for most prospective computer scientists or engineers.
      <BR />
      The competitive system is in part due to the fact that UW has a shortage
      of professors to teach computer science. It makes sense. Most people
      coming out of college with a computing degree can make more than twice
      what a professor makes after a few years in the industry.
      <BR />
      Unfortunately, some UW professors don't do a great job of fostering a
      supportive and inclusive atmosphere. One professor claims that "20 percent
      women in tech is probably the best we are likely to achieve" in their{" "}
      <Link address={links["quilette"]} text="Quilette" /> article, and decided
      to include in their course syllabus that "by the labor theory of property
      the Coast Salish people can claim ownership of almost none of the land
      currently occupied by [UW]" (
      <Link address={links["thedaily"]} text="The Daily" />
      ), which feels like a conscious decision to alienate a minority. Every
      student who takes their course is expected to see the statement.
      Professors are not required to write any acknowledgement.
      <BR />
      Another UW professor tweeted that "half of the female STEM faculty in the
      U.S. were hired over more qualified men" (
      <Link address={links["geekwire"]} text="Geekwire" />) without any
      citation. The problem extends far beyond UW, but it's safe to say that the
      school does not do a perfect job of fostering an inclusive environment for
      students.
    </div>
  );
}

export function TravelPhotographyDesc() {
  return (
    <span>
      I enjoy traveling and photography. I've visited around 20 countries over
      North + South America, Europe and Asia.
      <ul>
        <li>
          {" "}
          <Logo address={links["birdboozled"]} type="instagram" /> I shoot
          wildlife images with a Canon R5 + Sigma 150-600mm lens
        </li>
        <li>
          {" "}
          <Logo address={links["kernelFilm"]} type="instagram" /> And use a
          Hasselblad 501C + Zeiss Planar 80mm CT* for everything else
        </li>
      </ul>
    </span>
  );
}

export function PuffinDesc() {
  return (
    <span>
      <Row>
        <Col className="col-lg-5 col-md-5 container">
          <Image src={puffin} fluid thumbnail />
        </Col>
      </Row>
      <Row className="m-2">
        <Col md="auto" className="container">
          An <Link address={links["puffin"]} text="Atlantic Puffin" /> shot on
          my trip to Iceland in July 2022.{" "}
          <OverlayTrigger
            placement="top"
            overlay={
              <Tooltip>
                <div className="code">
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
  );
}

export function OtherHobbiesDesc() {
  return (
    <span>
      Other random things: I'm a huge Pokémon{" "}
      <Link address={links["emerald"]} text="Emerald" />,{" "}
      <Link address={links["pearl"]} text="Pearl" />, and{" "}
      <Link address={links["sky"]} text="Ex of Sky" /> fan, I love all the{" "}
      <Link address={links["ghibli"]} text="Ghibli" /> movies, I read lots of{" "}
      <Link address={links["webtoon"]} text="WebToons" />, I play tennis, and I
      constantly pick up random hobbies. The latest has been repairing and
      modding my childhood game consoles.
    </span>
  );
}
/* UTIL */

export const links = {
  birdboozled: "https://www.instagram.com/birdboozled/",
  climatechange:
    "https://www.ohchr.org/en/press-releases/2022/10/climate-change-greatest-threat-world-has-ever-faced-un-expert-warns",
  emerald:
    "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Emerald_Version",
  fakeymon: "https://github.com/paulkia/Fakeymon2",
  kernelFilm: "https://www.instagram.com/kernelfilm/",
  geekwire:
    "https://www.geekwire.com/2022/uw-computer-science-department-denounces-retired-professors-tweet-on-women-hires/",
  ghibli: "https://en.wikipedia.org/wiki/Studio_Ghibli",
  grcooling:
    "https://www.grcooling.com/blog/the-effects-of-data-centers-on-the-environment/",
  levels:
    "https://www.levels.fyi/companies/google/salaries/software-engineer/levels/l3",
  maxime: "https://github.com/MaxDahan",
  paulGithub: "https://www.github.com/paulkia/",
  paulLinkedIn: "https://www.linkedin.com/in/paulkia/",
  pearl:
    "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Diamond_and_Pearl_Versions",
  portfolio: "https://github.com/paulkia/paulkia.github.io",
  puffin: "https://ebird.org/species/atlpuf",
  quilette:
    "https://www.cs.ucdavis.edu/~koehl/Teaching/ECS188/PDF_files/Reges_WomendontCode.pdf",
  sky: "https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Mystery_Dungeon:_Explorers_of_Sky",
  snowball: "https://github.com/paulkia/Snowball",
  spaceship: "https://github.com/MaxDahan/Spaceship",
  thedaily:
    "https://www.dailyuw.com/opinion/the-logical-fallacies-within-stuart-reges-take-on-land-acknowledgement/article_f20d0c86-079f-11ed-9f86-a35174578ea5.html",
  thenewstack:
    "https://thenewstack.io/which-programming-languages-use-the-least-electricity/",
  reactBootstrap: "https://react-bootstrap.github.io/",
  webtoon: "https://www.webtoons.com/en/",
};

function BR() {
  return (
    <span>
      <br />
      <br />
    </span>
  );
}
