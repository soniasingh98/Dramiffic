import React from "react";

const Summary = (props) => {
  return (
    <div className="card my-5">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={props.img} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
              {props.summary}
            </p>
            <p className="card-text">
              <small className="text-body-secondary">hey there...</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
