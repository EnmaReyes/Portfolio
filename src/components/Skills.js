import css from "../assets/img/svg-tecnologies/filetype-css.svg";
import html from "../assets/img/svg-tecnologies/filetype-html.svg";
import js from "../assets/img/svg-tecnologies/filetype-js.svg";
import jsx from "../assets/img/svg-tecnologies/filetype-jsx.svg";
import scss from "../assets/img/svg-tecnologies/filetype-scss.svg";
import sql from "../assets/img/svg-tecnologies/filetype-sql.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                The projects I have created and the technologies I have
                implemented have allowed me to grow both professionally and
                personally<br></br> while enhancing my skills and expanding my
                knowledge.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={html} alt="Image" />
                  <h5>Html</h5>
                </div>
                <div className="item">
                  <img src={css} alt="Image" />
                  <h5>Css</h5>
                </div>
                <div className="item">
                  <img src={scss} alt="Image" />
                  <h5>Scss</h5>
                </div>
                <div className="item">
                  <img src={js} alt="Image" />
                  <h5>Java Script</h5>
                </div>
                <div className="item">
                  <img src={jsx} alt="Image" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={sql} alt="Image" />
                  <h5>Data Base</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
