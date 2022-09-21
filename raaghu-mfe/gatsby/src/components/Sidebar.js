import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Accordion from "react-bootstrap/Accordion";
import elements from "../images/logo/element-icon1.svg";
import components from "../images/logo/comp-icon.svg";
import pages from "../images/logo/page.svg";

const Sidebar = () => {
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

  const componentsList = [];
  const componentsExcludesList = ["-shimmer", "nents","client-basics"];
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

  // var componentName=JSON.parse(JSON.stringify(componentsList).replace(/-/g,' '));

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

  var elementsExcludesList=["elements","calendar"]
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

  // elementsList.forEach((item) => {
  //   if( (item, index, self) => !pageexcludesList.some((element) => item.name.includes(element)) && index === self.findIndex((t) => t.name === item.name)){
  //     const _item={
  //       name:item.name,
  //       url :item.name,
  //       displayName: item.name.replace(/-/g,' ')
  //     }
  //     pageLists.push(_item);
  //   }

  // });

  pageLists.sort((a, b) => {
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

  return (
    <div className=" cust-scroll">
      <div className="menu-list p-0 mt-4">
        <Accordion
          defaultActiveKey="0"
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
                      <Link href={node.url}>{node.displayName}</Link>
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
                    <Link href={node.url}>{node.displayName}</Link>
                  </li>
                ))}
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
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
                    <Link href={node.url}>{node.displayName}</Link>
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
