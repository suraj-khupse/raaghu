import React from "react";
import { graphql } from "gatsby";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;

console.log(markdownRemark);

  return (
    <div>
      <Navbar />
      <div className="container-fluid mt-5">
        <div className="row g-0">
          <div className="col-md-2">
            <Sidebar />
          </div>
          <div className="col-md-8 m-lg-5">
            <div className="blog-post-container">
              <div className="blog-post">
                {/* <h1>{frontmatter.title}</h1>
                 <h2>{frontmatter.date}</h2> */}
                <div className="d-flex">
                <a href="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="img-fluid"
                    width="20"
                    height="20"
                    viewBox="0 0 32 32"
                  >
                    <g
                      id="Component_128_1"
                      data-name="Component 128 – 1"
                      transform="translate(1 1)"
                    >
                      <line
                        id="Line_88743"
                        data-name="Line 88743"
                        x2="11.826"
                        transform="translate(9.088 15)"
                        fill="none"
                        stroke="#0900ff"
                        // stroke-linecap="round"
                        // stroke-linejoin="round"
                        // stroke-width="2"
                      />
                      <path
                        id="Path_129678"
                        data-name="Path 129678"
                        d="M18.054,24.287,13.127,19.36l4.927-4.927"
                        transform="translate(-4.41 -4.36)"
                        fill="none"
                        stroke="#0900ff"
                        // stroke-linecap="round"
                        // stroke-linejoin="round"
                        // stroke-width="2"
                      />
                      <circle
                        id="Ellipse_8253"
                        data-name="Ellipse 8253"
                        cx="15"
                        cy="15"
                        r="15"
                        fill="none"
                        stroke="#0900ff"
                        // stroke-linecap="round"
                        // stroke-linejoin="round"
                        // stroke-width="2"
                      />
                    </g>
                  </svg>
                 </a>
                  <nav aria-label="breadcrumb" className="px-3">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                         <a href="/" className="link">
                           {" "}
                          {frontmatter.title.split('>')[0]}{" "}
                        </a> 
                       
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        {" "}
                        {frontmatter.title.split('>')[1]}{" "}
                      </li>
                    </ol>
                  </nav>
                </div>

                <div
                  className="blog-post-content mt-4"
                  dangerouslySetInnerHTML={{ __html: html }}
                />
              </div>
            </div>
            <div className="page-navigation">
              <div className="row">
                <div className="col-6">
                  <a href="/">
                    <ul>
                      <li>
                        <img src="https://portal.raaghu.io/images/components/common/prev-arrow.svg" alt="prev-arrow" className="img-fluid" width="40px" />
                      </li>
                      <li>
                        <nav className="pt-3 px-4">
                          <div>
                            <small className="text-uppercase">
                              Back to
                            </small>
                          </div>
                          <ol className="breadcrumb">
                            <li className="breadcrumb-item"><h6> {frontmatter.title } </h6></li>
                          </ol>
                        </nav>
                      </li>
                    </ul>
                  </a>
                </div>
                <div className="col-6 text-right">
                  <a href="_alert.html">
                    <ul>
                      <li>
                        <nav className="pt-3 px-4">
                          <div>
                            <small className="text-uppercase">
                              Next Element
                            </small>
                          </div>
                          <ol className="breadcrumb">
                            <li className="breadcrumb-item"><h6> Alert </h6> </li>
                          </ol>
                        </nav>
                      </li>
                      <li>
                        <img src="https://portal.raaghu.io/images/components/common/next-arrow.svg"  alt="next-arrow" className="img-fluid" width="40px" />
                      </li>
                    </ul>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`;
