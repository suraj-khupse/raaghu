import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Accordion from "react-bootstrap/Accordion";
import elements from "../images/logo/element-icon1.svg";
import components from "../images/logo/comp-icon.svg";
import pages from "../images/logo/page.svg";
// import { useLocation } from "react-router-dom";


function useQuery(){
  const isBrowser = typeof window !== "undefined";

  if (!isBrowser) { return; }
  let eventkey = new URLSearchParams(window.location.search).get('eventkey');
  if(eventkey){
    localStorage.setItem('eventKey',eventkey);
    window.history.pushState({},document.title,window.location.origin + window.location.pathname);
    return eventkey;
  }

  const key = localStorage.getItem('eventKey');
  return key;
}


const Sidebar = () => {
  let query = useQuery();
  const data = useStaticQuery(graphql`
    query MyQuery {
      allDirectory(skip: 4) {
        nodes {
          name
        }
      }
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);


  const elementsList = JSON.parse(JSON.stringify(data.allDirectory.nodes)); 
  
  // const componentsExcludesList = ['-shimmer',"nents"];

  // const componentsList = elementsList.filter((item) =>
  //   item.name.includes("rds-comp")
  // );

  // chart elements
let chartList = [];

elementsList.forEach((item) => {
  if (item.name.includes("rds-chart") ) {
    const _item = {
      name: item.name,
      url: item.name.substring(4),
      displayName: item.name.substring(4).replace(/-/g, " "),
    };
    chartList.push(_item);
    console.log(chartList);

  }
});


  const componentsList = [];
  const componentsExcludesList = ["-shimmer", "nents","client-basics"];
  elementsList.forEach((item) => {
    if (
      item.name.includes("rds-comp") &&
      !componentsExcludesList.some((element) => item.name.includes(element))
    ) {
      const _item = {
        name: item.name,
        url: item.name.substring(4),
        displayName: item.name.substring(9).replace(/-/g, " "),
      };
      componentsList.push(_item);
    }
  });

  componentsList.sort((a, b) => {
    let fa = a.name.toLowerCase(),
      fb = b.name.toLowerCase();
    if (fa < fb) {
      return -1;
    }
    if (fa > fb) {
      return 1;
    }
    return 0;
  });

  // const rdsElementList = elementsList.filter(
  //   (item) =>
  //     item.name.includes("rds-") && !componentsList.find((x) => x === item)
  // );

  // var elementName=JSON.parse(JSON.stringify(rdsElementList).replace(/-/g,' '));
  var elementsLists = [];

  var elementsExcludesList=["elements","calendar",'rds-page-']
  elementsList.forEach((item) => {
    if (
      item.name.includes("rds-") &&
      !componentsExcludesList.some((element) => item.name.includes(element)) &&
      !componentsList.find((x) => x.name === item.name) &&
      !elementsExcludesList.some((element) => item.name.includes(element)) &&
      !chartList.find((x) => x.name === item.name)
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


// pages
  const pageLists = [];
  // find out pages names.
  const pageexcludesList = [
    "demo-ui"
    ,    
  ];

  elementsList.forEach((item) => {
    if (
      item.name.includes("rds-page-") &&
      !pageexcludesList.some((element) => item.name.includes(element)))
      {
        const _item = {
          name: item.name,
          url: item.name.substring(4),
          displayName: item.name.substring(8).replace(/-/g, " "),
        };
        pageLists.push(_item);
      }
    });
  
    // elementsList.forEach((item, index, self) => {
  //   if (
  //     item.name.includes("rds-page-") &&
  //     !pageexcludesList.some((element) => item.name.includes(element)) &&
  //     index === self.findIndex((t) => t.name === item.name)
  //   ) {
  //     const _item = {
  //       name: item.name,
  //       url: item.name,
  //       displayName: item.name.replace(/-/g, " "),
  //     };
  //     pageLists.push(_item);
  //   }
  // });

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

  return (
    <div className=" cust-scroll">
      <div className="menu-list p-0 mt-4">
        <Accordion
                  defaultActiveKey={query}
          className="accordion accordion-flush px-2"
        >
          <Accordion.Item eventKey="0" className="accordion-item">
            <Accordion.Header className="accordion-header">
              <div className="suheading pb-2 align-middle">
                <img
                  src={elements}
                  className="img-fluid"
                  width="20px"
                  alt="elements"
                />
                <span className="px-3"> Elements </span>
                {/* <h5>{data.allDirectory.nodes.name}</h5> */}
              </div>
            </Accordion.Header>
            <Accordion.Body>
              <div className="mb-4">
                <ul className="">
                  {elementsLists.map((node) => (
                    <li key={node.url}>
                      <Link href={node.url + "?eventkey=0"}>{node.displayName}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <div className="suheading pb-2">
                <img
                  src={pages}
                  className="img-fluid"
                  width="20px"
                  alt="pages"
                />
                <span className="px-3"> Charts </span>
              </div>
            </Accordion.Header>
            <Accordion.Body>
              <ul className="">
                {chartList.map((node) => (
                  <li key={node.url}>
                    <Link href={node.url + "?eventkey=1" }>{node.displayName}</Link>
                  </li>
                ))}
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <div className="suheading pb-2">
                <img
                  src={components}
                  className="img-fluid"
                  width="20px"
                  alt="components"
                />
                <span className="px-3"> Components </span>
              </div>
            </Accordion.Header>
            <Accordion.Body>
              <ul className="">
                {componentsList.map((node) => (
                  <li key={node.url}>
                    <Link href={node.url + "?eventkey=2"}>{node.displayName}</Link>
                  </li>
                ))}
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              <div className="suheading pb-2">
                <img
                  src={pages}
                  className="img-fluid"
                  width="20px"
                  alt="pages"
                />
                <span className="px-3"> Pages </span>
              </div>
            </Accordion.Header>
            <Accordion.Body>
              <ul className="">
                {pageLists.map((node) => (
                  <li key={node.url}>
                    <Link href={node.url + "?eventkey=3" }>{node.displayName}</Link>
                  </li>
                ))}
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
       
      </div>
    </div>
  );
};

export default Sidebar;
