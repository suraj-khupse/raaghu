import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
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

  }
});


  const componentsList = [];
  const componentsExcludesList = ["-shimmer", "nents","client-basics","demoui"];
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

  var elementsExcludesList=["elements","calendar","rds-page-","edition","cookieconsent"]
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

  function onLinkSelect(array, node) {
    const isBrowser = typeof window !== "undefined";
    if (!isBrowser) { return; }
    let pathSplitted = window.location.pathname.split('/');
    let path = pathSplitted[pathSplitted.length - 1];
    if (path) {
      array.forEach((item) => {
        if (item.url === path) {
          console.log(path, item.url);

          console.log(true);
          item.isActive = true;
        } else {
          item.isActive = false;

        }
      })
    }
;
  }

// pages
  const pageLists = [];
  // find out pages names.
  const pageexcludesList = [
    "demo-ui",    
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
    <div className="mt-3 ">
      <div className="position-sticky sidebar-sticky">
        <ul defaultActiveKey={query} className="nav flex-column px-1 my-3 me-2">
          <li eventKey="0" className="nav-item mb-2">
            <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed w-100 position-relative ps-0 fw-semibold" data-bs-toggle="collapse" data-bs-target="#element-collapse" aria-expanded="true">
              <img
                src={elements}
                className="img-fluid"
                width="20px"
                alt="elements"
              /><span className="px-3"> Elements </span>
            </button>
            <div class="collapse show" id="element-collapse">
              <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 text-capitalize">
                {elementsLists.map((node) => (
                  <li key={node.url} className={node.isActive ? 'active' : ''}>
                    <Link class="nav-link rounded" click={onLinkSelect(elementsLists, node)} href={node.url + "?eventkey=0"}>{node.displayName}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li eventKey="1" class="nav-item mb-2">
            <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed w-100 position-relative ps-0 fw-semibold" data-bs-toggle="collapse" data-bs-target="#chart-collapse" aria-expanded="false">
              <img
                src={pages}
                className="img-fluid"
                width="20px"
                alt="elements"
              /><span className="px-3"> Charts </span>
            </button>
            <div class="collapse" id="chart-collapse">
              <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 text-capitalize">
                {chartList.map((node) => (
                  <li key={node.url} className={node.isActive ? 'active' : ''}>
                    <Link class="nav-link rounded" activeClassName="active" click={onLinkSelect(chartList, node)} href={node.url + "?eventkey=1"}>{node.displayName}</Link>
                  </li>
                ))}
              </ul>
            </div>                        
          </li>
          <li eventKey="2" class="nav-item mb-2">
            <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed w-100 position-relative ps-0 fw-semibold" data-bs-toggle="collapse" data-bs-target="#component-collapse" aria-expanded="false">
              <img
                src={components}
                className="img-fluid"
                width="20px"
                alt="elements"
              /><span className="px-3"> Components </span>
            </button>
             
            <div class="collapse" id="component-collapse">
              <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 text-capitalize">
                {componentsList.map((node) => (
                  <li key={node.url} className={node.isActive ? 'active' : ''} >
                    <Link className="nav-link rounded" href={node.url + "?eventkey=2"} click={onLinkSelect(componentsList, node)}>{node.displayName}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li eventKey="3" class="nav-item mb-2">
            <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed w-100 position-relative ps-0 fw-semibold" data-bs-toggle="collapse" data-bs-target="#pages-collapse" aria-expanded="false">
              <img
                src={pages}
                className="img-fluid"
                width="20px"
                alt="elements"
              /><span className="px-3"> Pages </span>
            </button>
            <div class="collapse" id="pages-collapse">
              <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 text-capitalize">
                {pageLists.map((node) => (
                  <li key={node.url} className={node.isActive ? 'active' : ''}>
                    <Link class="nav-link rounded" href={node.url + "?eventkey=3"} click={onLinkSelect(pageLists, node)}>{node.displayName}</Link>
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
