import { React, useEffect, useState } from "react";
import "./events.css";
import Cookies from 'universal-cookie';
const cookies = new Cookies();
let url = window.location.pathname;
// { console.log('cookie', cookies.get('eventlist')) }
// console.log('cookie', cookies.get('event'))
let eventlist = cookies.get('eventlist');
let eventid = cookies.get('event');
// let eventslist = JSON.parse(eventlist);
// console.log('eventlist', eventslist);
// const { formurl } = this.state
// let formurl = "";


// const formrlink = async () => {

//   eventlist.forEach(list => {
//     // console.log(eventlist)
//     if (list._id === eventid) {
//       formurl = list.formurl
//     }
//   });
// }

// console.log(eventlist[0]._id)


// console.log(formurl)
// let formurl = url.split("/event/")[1];

// let cleardata = () => {
//   if (formurl !== url) {
//     url = "";
//     formurl = "";
//   }
// };



const Eventreg = (props) => {

  let [formurl, setformurl] = useState("");

  useEffect(() => {

    if (!formurl) {
      getformurl();
    }
  }, []);

  const getformurl = async () => {


    await eventlist.forEach(list => {
      // console.log(eventlist)
      if (list._id === eventid) {
        formurl = list.formurl
      }
    });

    setformurl(formurl);
  };





  return (
    <div className="eventreg">
      <h2>Events Registration</h2>
      {console.log(formurl)}

      {
        <iframe
          src={formurl}
          width="80%"
          height="700"
          frameborder="1"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>

      }


    </div>
  );

}


export default Eventreg