import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const Banners = () => {
/* 
 function redirectLink(){
    windows.location.href="https://www.google.com/"
 } */

  return (
    <div id="banner_wrapper">

      <div className="bg-vector">
        {/* <img src={ circles_light } className="img-fluid" /> */}
        <StaticImage
          src="../images/logo/circles-lightblue.png"
          alt="circles-lightblue"
          className="img-fluid"
        ></StaticImage>
      </div>
      <div className="dot-pattern">
        {/* <img src= { dot_pattern_white } className="img-fluid" /> */}
        <StaticImage
          src="../images/logo/dot-pattern-white.png"
          alt="dot_pattern_white"
          className="img-fluid"
        ></StaticImage>
      </div>

      <div className="container-fluid py-5">
        <div className="contents">
          <div className="row">
            <div className="col-md-4">
              {/* <img src={ image_components } className="img-fluid" /> */}
              <StaticImage
                src="../images/logo/image-components.png"
                alt="image_components"
                className="img-fluid"
              ></StaticImage>
            </div>
            <div className="col-md-7 center d-flex align-items-center">
              <div className="px-4">
                <div className="suheading">Micro Front-End Design System</div>
                <div className="heading">Elements &amp; Components</div>
                <div className="content">
                  <p>
                    Introducing library of expertly crafted elements &amp;
                    component. Raaghu is the collection of professionally
                    designed, pre-built, fully responsive elements &amp;
                    components you can drop into your projects.
                  </p>
                  <div >
                    <div className="d-flex">
                        <div className="mx-5">
                        <a href="https://github.com/Wai-Technologies/raaghu-angular/tree/main/static/xd" target="_blank" rel="noopener noreferrer"> DOWNLOAD XD KIT</a>
                        </div>
                        
                        <div >
      
                        <Link to="/" className="pr-4">

                          DOWNLOAD FIGMA KIT {"(Coming Soon)"}
                        </Link>
                      </div>
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banners;
