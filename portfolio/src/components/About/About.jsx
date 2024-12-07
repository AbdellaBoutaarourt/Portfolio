import "./about.css";
import Abdel from "../../files/me.jpg";
import ScrollAnimation from "react-animate-on-scroll";
import htmlIcon from "../../files/html-icon.svg";
import cssIcon from "../../files/css-icon.svg";
import jsIcon from "../../files/js-icon.svg";
import nodeIcon from "../../files/node-icon.svg";
import LaravelIcon from "../../files/laravel-svgrepo-com.svg";
import SpringIcon from "../../files/spring-svgrepo-com.svg";
import TailwindIcon from "../../files/tailwind-svgrepo-com.svg";
import reactIcon from "../../files/react-icon.svg";
import vueIcon from "../../files/vue-icon.svg";
import boostrapIcon from "../../files/bootstrap-icon.svg";
import djangoIcon from "../../files/django-svgrepo-com.svg";
import nextIcon from "../../files/next-js-svgrepo-com.svg";
import dockerIcon from "../../files/docker2-svgrepo-com.svg";
import mongoIcon from "../../files/mongo-svgrepo-com.svg";
import mysqlIcon from "../../files/mysql-svgrepo-com.svg";
import postgresIcon from "../../files/postgresql-svgrepo-com.svg";
import kotlinIcon from "../../files/kotlin-svgrepo-com.svg";

export function About() {
  return (
    <div id="about" className="container">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            I'm full-stack developer passionate about building innovative web
            solutions. With expertise in a variety of technologies and
            frameworks. I'm equipped to tackle diverse challenges. Let's
            collaborate and turn your ideas into reality!
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInLeft"
          delay={0.2 * 1000}
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        >
          <p>
            So if you're in need of a new website or just looking to revamp your
            current online presence, I'd love to chat and see how I can help.
            Let's bring your website dreams to reality together!
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp skill" delay={0.13 * 1000}>
              <img src={reactIcon} alt="React" />
              <div>React</div>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp skill" delay={0.15 * 1000}>
              <img src={vueIcon} alt="Vue" />
              <div>Vue</div>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp skill" delay={0.16 * 1000}>
              <img src={nodeIcon} alt="Node" />
              <div>Node</div>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp skill" delay={0.16 * 1000}>
              <img src={LaravelIcon} alt="laravel" />
              <div>Laravel</div>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp skill" delay={0.16 * 1000}>
              <img src={SpringIcon} alt="Spring Boot" />
              <div>Spring Boot</div>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp skill" delay={0.16 * 1000}>
              <img src={djangoIcon} alt="DJANGO" />
              <div>Django</div>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp skill" delay={0.17 * 1000}>
              <img src={htmlIcon} alt="Html" />
              <div>HTML</div>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp skill" delay={0.18 * 1000}>
              <img src={cssIcon} alt="Css" />
              <div>CSS</div>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp skill" delay={0.16 * 1000}>
              <img src={TailwindIcon} alt="Tailwind" />
              <div>Tailwind</div>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp skill" delay={0.19 * 1000}>
              <img src={boostrapIcon} alt="bootstrap" />
              <div>Bootstap</div>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp skill" delay={0.19 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
              <div>JavaScript</div>
            </ScrollAnimation>
          </div>
          <br />
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp skill" delay={0.19 * 1000}>
              <img src={nextIcon} alt="Next" />
              <div>NextJS</div>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp skill" delay={0.19 * 1000}>
              <img src={kotlinIcon} alt="Kotlin" />
              <div>Kotlin</div>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp skill" delay={0.19 * 1000}>
              <img src={mysqlIcon} alt="sql" />
              <div>MySQL</div>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp skill" delay={0.19 * 1000}>
              <img src={mongoIcon} alt="mongo" />
              <div>MongoDB</div>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp skill" delay={0.19 * 1000}>
              <img src={dockerIcon} alt="docker" />
              <div>Docker</div>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp skill" delay={0.19 * 1000}>
              <img src={postgresIcon} alt="post" />
              <div>PostgreSQL</div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.2 * 1000}>
          <img src={Abdel} alt="abdel" />
        </ScrollAnimation>
      </div>
    </div>
  );
}
