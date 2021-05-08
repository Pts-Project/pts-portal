import React from "react";
import "./events.css";
let url = window.location.pathname;

let formurl = url.split("/event/")[1];
console.log(formurl);
let cleardata = () => {
  if (url !== url) {
    url = "";
    formurl = "";
  }
};

console.log(formurl);

export default function eventreg(props) {
  return (
    <div className="eventreg">
      <h2>Event Registration</h2>
      {console.log(formurl)}
      {
        <iframe
          src={formurl}
          width="80%"
          height="1499"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      }
      {cleardata()}
    </div>
  );
}
