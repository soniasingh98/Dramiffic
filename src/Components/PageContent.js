import React, { useState } from "react";

const PageContent = (props) => {
  const { image, title, summary, premiered } = props;
  const [toggle, settoggle] = useState(false);
  const toggleHandler = () => {
    settoggle(!toggle);
  };
  return (
    <>
      <div className="card">
        <h5 style={{ display: "flex", justifyContent: "flex-end" }}>
          <span class="badge text-bg-danger"> {title}</span>
        </h5>
        <h5 className="card-title text-center">{premiered}</h5>
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <p
            style={toggle ? { height: "150px" } : { height: "0px" }}
            className="card-text"
          >
            {toggle ? summary.slice(0, 247) : ""}
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <a
              href={props.url}
              rel="noreferrer"
              target="_blank"
              className="btn "
            >
              Read More...
            </a>
            <hr />
            <button onClick={toggleHandler} className="btn">
              {!toggle ? "View Summary..." : "Close Summary"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageContent;
