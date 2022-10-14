import React from "react";
import { graphql, navigate } from "gatsby";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Template({
  data,// this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;

  // Accissing element list here
  const elementsList = JSON.parse(JSON.stringify(data.allDirectory.nodes)); 

  const componentsList = [];
  const componentsExcludesList = ["-shimmer", "nents","client-basics"];

  const elementsLists = [];

  const elementsExcludesList=["elements","calendar"]
  elementsList.forEach((item) => {
    if (
      item.name.includes("rds-") &&
      !componentsExcludesList.some((element) => item.name.includes(element)) &&
      !componentsList.find((x) => x.name === item.name) &&
      !elementsExcludesList.some((element) => item.name.includes(element))
    ) {
      const _item = {
        name: item.name,
        url: item.name.substring(4),
        displayName: item.name.substring(4).replace(/-/g, " "),
      };
      elementsLists.push(_item);
    }
  });
  
  elementsLists.sort((a, b) => {
    let fa = a.displayName.toLowerCase(),
      fb = b.displayName.toLowerCase();
    if (fa < fb) {
      return -1;
    }
    if (fa > fb) {
      return 1;
    }
    return 0;
  });

  // Adding comp list in markdown file

  // const componentsList = [];
  // const componentsExcludesList = ["-shimmer", "nents","client-basics"];
  elementsList.forEach((item) => {
    if (
      item.name.includes("rds-comp") &&
      !componentsExcludesList.some((element) => item.name.includes(element))
    ) {
      const _item = {
        name: item.name,
        url: item.name.substring(9),
        displayName: item.name.substring(9).replace(/-/g, " "),
      };
      componentsList.push(_item);
    }
  });

  componentsList.sort((a, b) => {
    let fa = a.displayName.toLowerCase(),
      fb = b.displayName.toLowerCase();
    if (fa < fb) {
      return -1;
    }
    if (fa > fb) {
      return 1;
    }
    return 0;
  });

  // page level access data
  const pageLists = [];
  // find out pages names.
  const pageexcludesList = [
    "rds-",
    "src",
    "lib",
    "app",
    "assets",
    "environments",
    "root",
    "e2e",
    "accordion-item",
    "scrollspy-item",
    "projects",
    "shared",
    "data",
    "styles",
    "state",
    "multiple-mfe",
    "projects",
    ".storybook",
    "modals",
    "sidenav",
    "selected-product",
    "ele-preview",
    "shimmer",
    "cookieconsent",
    "ele-preview",
    "webhooks-subscription-shimmer",
    "cookieconsent",
    "utils",
    "util",
    "-shimmer",
    "rdc-comp-api-scope-basic",
    "rdc-comp-api-scope-resource",
    "test",
    "testing",
    "mla",
    "date-fns",
    "day",
    "model",
    "moment",
    "ng-add",
    "themes",
    "event",
    "home",
    "date-adapters",
    "date-adapter",
    "basicresource",
    "common",
    "host",
    "modules",
    "month",
    "i18n",
    "service",
    "DownloadData",
    "product-list",
    "products",
    "api-claims",
    "api-properties",
    "api-basics",
    "api-secrets",
    "authority-delegations",
    "claim-types",
    "claims",
    "edit-language-text",
    "language-storybook",
    "login-attempts",
    "manage-linked-accounts",
    "modal",
    "my-settings",
    "schematics",
    "visual-settings",    
  ];
  elementsList.forEach((item, index, self) => {
    if (
      !pageexcludesList.some((element) => item.name.includes(element)) &&
      index === self.findIndex((t) => t.name === item.name)
    ) {
      const _item = {
        name: item.name,
        url: item.name,
        displayName: item.name.replace(/-/g, " "),
      };
      pageLists.push(_item);
    }
  });


  pageLists.sort((a, b) => {
    // let fa = a.name.toLowerCase(),
    //   fb = b.name.toLowerCase();
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return -1;
    }
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return 1;
    }
    return 0;
  });




  // function for Next and previous button

  function backToPrev(){
   let data=[];
   let type=frontmatter.title.split('>')[0].trim();

  switch(type){
    case "Components":
      data=componentsList;
      break;
      case "Elements":
        data=elementsLists;
        break;
        case "Pages":
          data=pageLists;
          break;
  }
    const index=data.findIndex((x)=>x.url.toLowerCase()===(frontmatter.slug.split('/')[1]).toLowerCase());
    if(index>0){
      navigate('/'+data[index-1].url)
    }
    console.log(index);


  }
  function goToNext(){

    let data=[];
   let type=frontmatter.title.split('>')[0].trim();

  switch(type){
    case "Components":
      data=componentsList;
      break;
      case "Elements":
        data=elementsLists;
        break;
        case "Pages":
          data=pageLists;
          break;
  }
   

    const index=data.findIndex((x)=>x.url.toLowerCase()===(frontmatter.slug.split('/')[1]).toLowerCase());
    if(index<data.length-1){
      navigate('/'+data[index+1].url)
    }
    console.log(data,frontmatter);

  }
  return (
    <div>
      <Navbar />
      <div className="container-fluid mt-5 ">
        <div className="row g-0">
          <div className="col-md-2 ">
            <Sidebar />
          </div>
          <div className="col-md-8 m-lg-5 ">
            <div className="blog-post-container">
              <div className="blog-post ">
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
                          {frontmatter.title.split(">")[0]}{" "}
                        </a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        {" "}
                        {frontmatter.title.split(">")[1]}{" "}
                      </li>
                    </ol>
                  </nav>
                </div>

                <div className="blog-post-content mt-4"
                  dangerouslySetInnerHTML={{ __html: html }}>

                  </div>
              </div>
            </div>
            
          </div>
        </div>
        </div>
        <div className="row">
          <div className="col-md-8 offset-2 justify-content-between bg-white">
              <div>
                <div className="bg-white bottom-0 d-flex justify-content-between page-navigation position-fixed py-4 px-4 footerbutton">
                  <a onClick={backToPrev} className="text-decoration-none">
                    <ul className="d-flex align-items-center">
                      <li>
                        <img src="images/prev-arrow.png"  alt="next-arrow" className="" width="40px" />
                      </li>
                      <li>
                        <nav className="pt-3 px-4">
                          <div>
                            <small className="text-uppercase" onClick={backToPrev}>Back to</small>
                          </div>
                          <ol className="breadcrumb">               
                              <li className="breadcrumb-item">
                              {frontmatter.data}
                            </li> 
                          </ol>
                        </nav>
                      </li>
                    </ul>
                  </a>
                  <div>
                    <a  onClick={goToNext} className="text-decoration-none">
                      <ul className="d-flex align-items-center">
                        <li>
                          <nav className="pt-3 px-4">
                            <div>
                              <small className="text-uppercase">
                                Next Element
                              </small>
                            </div>
                            <ol className="breadcrumb">
                              <li className="breadcrumb-item">
                              {frontmatter.data}

                              </li>
                            </ol>
                          </nav>
                        </li>
                        <li>
                        <img src="images/next-arrow.png"  alt="next-arrow" className="" width="40px" />
                        </li>
                      </ul>
                    </a>
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

    allDirectory(skip: 4) {
      nodes {
        name
      }
    }
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
