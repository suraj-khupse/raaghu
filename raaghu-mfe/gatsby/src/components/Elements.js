import * as React from "react";
import Element from "../assets/data/elements.json";

const Elements = () => {
  // const cardInfo = [
  //   {
  //     image: "../images/Elements/buttons.png",
  //     title: "Buttons",
  //     text: " Buttons with predefined styles (warning, info, danger) for  multiple button types.",
  //   },
  //   {
  //     image: "../images/Elements/card-bg-dark.png",
  //     title: "Buttons Group",
  //     text: " Buttons with predefined styles (warning, info, danger) for  multiple button types.",
  //   },
  //   {
  //     image: "../images/Elements/collapse-button.png",
  //     title: "Collapse Button",
  //     text: " Buttons with predefined styles (warning, info, danger) for  multiple button types.",
  //   },
  //   {
  //     image: "../images/Elements/card-bg-dark.png",
  //     title: "Links ",
  //     text: " Buttons with predefined styles (warning, info, danger) for  multiple button types.",
  //   },
  //   {
  //     image: "../images/Elements/button-dropdown.png",
  //     title: "Button Dropdown",
  //     text: " Buttons with predefined styles (warning, info, danger) for  multiple button types.",
  //   },
  // ];

  const renderMain = (main) => {
    return (
      // Action strips

      <div className="row" id="action-components">
        <h3>
          <div className="row">
            <div className="col-12">
            <img src={main.image} class="img-fluid" width="30px" alt="main" />
            <span class="px-2">
            {main.name}
                              </span>
              </div>
          </div>
        </h3>
        <p className="border-bottom pb-2">{main.description}</p>
        {main.submenu.map((sub) => (
          <>
            <h4 className="mt-5 heading-border-left">
              <div className="position-relative d-flex align-middle">
                {sub.name}
              </div>
            </h4>
            <div className="row" id="action-components">
              {sub.children.map((child) => (
                <div className="col-4 col-md-4 mb-5 mt-5">
                  <a href={child?.link || "/button"}>
                    <div
                      className="card hover-shadow cursor-pointer"
                      aria-hidden="true"
                    >
                      <img src={child.image} className="img-fluid" alt="child" />
                      <div className="card-body">
                        <div className="h6 card-title placeholder-glow">
                          <div className="row">
                            <div className="col-8"> {child.title} </div>
                            <div className="col-4 text-center"></div>
                          </div>
                        </div>
                        <p className="card-text placeholder-glow sentence-overflow">
                          {child.text}
                        </p>
                        <div class="read-div">
                          <a href={child?.link || "/button"} class="component-read-more">
                            Read More →
                          </a>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </>
        ))}
      </div>
    );
  };

  return (
    <div className="row mt-5" id="action-components">
      {Element.map(renderMain)}
    </div>
  );
};

export default Elements;
