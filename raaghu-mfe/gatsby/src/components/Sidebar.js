import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import elements from "../images/logo/element-icon1.svg";
import components from "../images/logo/comp-icon.svg";
import pages from "../images/logo/page.svg";

import { useEffect } from 'react';

const Sidebar = (activeData) => {
  let ChartExpanded = false;
  let pageExpanded = false;
  let componentExpanded = false;
  let elementExpanded = true;
  let path = '';
  let type = ''
  if (activeData && activeData.activeData) {
    let _activeData = activeData.activeData;
    if (_activeData.markdownRemark && _activeData.markdownRemark.frontmatter) {
      if (_activeData.markdownRemark.frontmatter.title) {
        type = _activeData.markdownRemark.frontmatter.title.split(' >')[0];
      }
      if (_activeData.markdownRemark.frontmatter.slug) {
        path = _activeData.markdownRemark.frontmatter.slug.split('/')[1].toLowerCase();
      }
      if (type === 'Charts') {
        ChartExpanded = true;
        elementExpanded = false;
        pageExpanded = false;
        componentExpanded = false;
      } else if (type === 'Elements') {
        ChartExpanded = false;
        elementExpanded = true;
        pageExpanded = false;
        componentExpanded = false;
      } else if (type === 'Components') {
        ChartExpanded = false;
        elementExpanded = false;
        pageExpanded = false;
        componentExpanded = true;
      } else if (type === 'Pages') {
        ChartExpanded = false;
        elementExpanded = false;
        pageExpanded = true;
        componentExpanded = false;

      }

    }

  }
  useEffect(() => {
    if (path) {
      let activatedElement = document.getElementById(path);
      if (activatedElement) {
        activatedElement.scrollIntoView({ block: "center", inline: "nearest" });
      }
    }


  });

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
  let chartList = [];
  elementsList.forEach((item) => {
    if (item.name.includes("rds-chart")) {
      const _item = {
        name: item.name,
        url: item.name.substring(4),
        displayName: item.name.substring(4).replace(/-/g, " "),
      };
      chartList.push(_item);

    }
  });


  const componentsList = [];
  const componentsExcludesList = ["-shimmer", "nents", "client-basics", "demoui", "other-settings","edition-table","dynamic-enity-properties","tenant-basic-profile-right","tenant-features","user-basic-profile-right"];
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

  var elementsLists = [];
  var elementsExcludesList = ["elements", "calendar", "rds-page-", "edition", "cookieconsent"]
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
    "demo-ui","careers","contact-us" ,"forgot-password","frequently-asked-questions","login","member-activity",
    "monthly-summary","order-details","order-summary","page-not-found","product","product-details","profile-settings",
    "subscription","tenant-new","store-front"
  ];
  elementsList.forEach((item) => {
    if (
      item.name.includes("rds-page-") &&
      !pageexcludesList.some((element) => item.name.includes(element))) {
      const _item = {
        name: item.name,
        url: item.name.substring(4),
        displayName: item.name.substring(8).replace(/-/g, " "),
      };
      pageLists.push(_item);
    }
  });


  pageLists.sort((a, b) => {
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return -1;
    }
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return 1;
    }
    return 0;
  });
  function onToggle(type) {
    var btnelement = document.getElementById('element-toggle');
    var elementCollapse = document.getElementById('element-collapse');
    var chartBtnelement = document.getElementById('chart-toggle');
    var chartCollapse = document.getElementById('chart-collapse');
    var pageBtnelement = document.getElementById('page-toggle');
    var pageCollapse = document.getElementById('pages-collapse');
    var componentBtnelement = document.getElementById('component-toggle');
    var componentCollapse = document.getElementById('component-collapse');
    let activatedPath = '';
    let activatedElement = '';
    let itemType = '';
    if (activeData && activeData.activeData && activeData.activeData.markdownRemark && activeData.activeData.markdownRemark.frontmatter) {
      if (activeData.activeData.markdownRemark.frontmatter.slug) {
        activatedPath = activeData.activeData.markdownRemark.frontmatter.slug.split('/')[1].toLowerCase();
      }
      if (activeData.activeData.markdownRemark.frontmatter.title) {
        itemType = activeData.activeData.markdownRemark.frontmatter.title.split(' >')[0];
      }
      activatedElement = document.getElementById(activatedPath);
    }
      if (type === 'elements') {
        elementExpanded = !elementExpanded
        ChartExpanded = false;
        componentExpanded = false;
        pageExpanded = false;

        if (chartCollapse) {
          chartCollapse.classList.remove('show');
          chartCollapse.classList.add('hide');
        }
        if (componentCollapse) {
          componentCollapse.classList.remove('show');
          componentCollapse.classList.add('hide');
        }
        if (pageCollapse) {
          pageCollapse.classList.remove('show');
          pageCollapse.classList.add('hide');
        }

        if (elementCollapse) {
          if (elementExpanded) {
            elementCollapse.classList.add('show');
            elementCollapse.classList.remove('hide');
            if (activatedElement && itemType === "Elements") {
              activatedElement.scrollIntoView({ block: "center", inline: "nearest" });
            }
          } else {
            elementCollapse.classList.remove('show');
            elementCollapse.classList.add('hide');
          }
        }
      } else if (type === 'components') {
        elementExpanded = false
        ChartExpanded = false;
        componentExpanded = !componentExpanded;
        pageExpanded = false;

        if (chartCollapse) {
          chartCollapse.classList.remove('show');
          chartCollapse.classList.add('hide');
        }
        if (componentCollapse) {
          if (componentExpanded) {
            componentCollapse.classList.add('show');
            componentCollapse.classList.remove('hide');
            if (activatedElement && itemType === "Components") {
              activatedElement.scrollIntoView({ block: "center", inline: "nearest" });
            }

          } else {
            componentCollapse.classList.remove('show');
            componentCollapse.classList.add('hide');
          }
        }
        if (pageCollapse) {
          pageCollapse.classList.remove('show');
          pageCollapse.classList.add('hide');
        }

        if (elementCollapse) {
          elementCollapse.classList.remove('show');
          elementCollapse.classList.add('hide');
        }
      } else if (type === 'charts') {
        elementExpanded = false
        ChartExpanded = !ChartExpanded;
        componentExpanded = false;
        pageExpanded = false;

        if (chartCollapse) {
          if (ChartExpanded) {
            chartCollapse.classList.add('show');
            chartCollapse.classList.remove('hide');
            if (activatedElement && itemType === "Charts") {
              activatedElement.scrollIntoView({ block: "center", inline: "nearest" });
            }
          } else {
            chartCollapse.classList.remove('show');
            chartCollapse.classList.add('hide');
          }
        }
        if (componentCollapse) {
          componentCollapse.classList.remove('show');
          componentCollapse.classList.add('hide');
        }
        if (pageCollapse) {
          pageCollapse.classList.remove('show');
          pageCollapse.classList.add('hide');
        }

        if (elementCollapse) {
          elementCollapse.classList.remove('show');
          elementCollapse.classList.add('hide');
        }
      } else if (type === 'pages') {
        elementExpanded = false
        ChartExpanded = false;
        componentExpanded = false;
        pageExpanded = !pageExpanded;
        if (chartCollapse) {
          chartCollapse.classList.remove('show');
          chartCollapse.classList.add('hide');
        }
        if (componentCollapse) {
          componentCollapse.classList.remove('show');
          componentCollapse.classList.add('hide');
        }
        if (pageCollapse) {
          if (pageExpanded) {
            pageCollapse.classList.add('show');
            pageCollapse.classList.remove('hide');
            if (activatedElement && itemType === "Pages") {
              activatedElement.scrollIntoView({ block: "center", inline: "nearest" });
            }
          } else {
            pageCollapse.classList.remove('show');
            pageCollapse.classList.add('hide');
          }
        }
        if (elementCollapse) {
          elementCollapse.classList.remove('show');
          elementCollapse.classList.add('hide');
        }
      }
      btnelement.setAttribute('aria-expanded', elementExpanded);
      chartBtnelement.setAttribute('aria-expanded', ChartExpanded);
      pageBtnelement.setAttribute('aria-expanded', pageExpanded);
      componentBtnelement.setAttribute('aria-expanded', componentExpanded);



  }
  return (
    <div className="mt-3 ">
      <div className="position-sticky sidebar-sticky">
        <ul id="nav-bar" className="nav flex-column px-1 my-3 me-2">
          <li className="nav-item mb-2">
            <button type="button" onClick={() => onToggle('elements')} className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed w-100 position-relative ps-0 fw-semibold" data-bs-toggle="collapse" id="element-toggle" aria-expanded={elementExpanded}>
              <img
                src={elements}
                className="img-fluid"
                width="20px"
                alt="elements"
              /><span className="px-3"> Elements</span>
            </button>
            <div className={`collapse ${elementExpanded ? 'show' : 'hide'}`} id="element-collapse" >
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 text-capitalize">
                {elementsLists.map((node, index) => (
                  <li key={node.url + index} className={path === node.url ? 'active' : ''} id={node.url}>
                    <Link className="nav-link rounded" href={node.url}>{node.displayName}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li className="nav-item mb-2">
            <button id="chart-toggle" className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed w-100 position-relative ps-0 fw-semibold" data-bs-toggle="collapse" onClick={() => onToggle('charts')} aria-expanded={ChartExpanded}>
              <img
                src={pages}
                className="img-fluid"
                width="20px"
                alt="elements"
              /><span className="px-3"> Charts </span>
            </button>
            <div className={`collapse ${ChartExpanded ? 'show' : 'hide'}`} id="chart-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 text-capitalize">
                {chartList.map((node) => (
                  <li key={node.url} className={path === node.url ? 'active' : ''} id={node.url}>
                    <Link className="nav-link rounded" activeClassName="active" href={node.url}>{node.displayName}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li className="nav-item mb-2">
            <button id="component-toggle" className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed w-100 position-relative ps-0 fw-semibold" onClick={() => onToggle('components')} data-bs-toggle="collapse" aria-expanded={componentExpanded}>
              <img
                src={components}
                className="img-fluid"
                width="20px"
                alt="elements"
              /><span className="px-3"> Components </span>
            </button>

            <div className={`collapse ${componentExpanded ? 'show' : 'hide'}`} id="component-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 text-capitalize">
                {componentsList.map((node) => (
                  <li key={node.url} className={path === node.url ? 'active' : ''} id={node.url} >
                    <Link className="nav-link rounded" href={node.url} >{node.displayName}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li className="nav-item mb-2">
            <button id="page-toggle" className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed w-100 position-relative ps-0 fw-semibold" data-bs-toggle="collapse" onClick={() => onToggle('pages')} aria-expanded={pageExpanded}>
              <img
                src={pages}
                className="img-fluid"
                width="20px"
                alt="elements"
              /><span className="px-3"> Pages </span>
            </button>
            <div className={`collapse ${pageExpanded ? 'show' : 'hide'}`} id="pages-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 text-capitalize">
                {pageLists.map((node) => (
                  <li key={node.url} className={path === node.url ? 'active' : ''} id={node.url}>
                    <Link className="nav-link rounded" href={node.url} >{node.displayName}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>

      </div>
    </div>
  );
};
export default Sidebar;
