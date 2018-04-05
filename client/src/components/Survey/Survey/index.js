import React from 'react';

const Survey = ({ _id, title, body, yes, no, dateSent }) => (
  <div className="card darken-1" key={_id}>
    <div className="card-content">
      <span className="card-title">{title}</span>
      <p>{body}</p>
      <p className="right">
        Sent On: {new Date(dateSent).toLocaleDateString()}
      </p>
    </div>
    <div className="card-action">
      <a>Yes: {yes}</a>
      <a>No: {no}</a>
    </div>
  </div>
);

export default Survey;
