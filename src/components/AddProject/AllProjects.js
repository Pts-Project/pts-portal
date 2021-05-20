import React, { useState } from "react";
// import Alluser from '../adminpanel/AllUser/Alluser'
import axios from "axios";
import Card from "./AllprojectsCard";

function AllProjects() {
  const details = JSON.parse(localStorage.getItem("user"));
  const [AllProjects, setAllProjects] = useState([]);
  const [NewMail, setNewMail] = useState([]);
  const newmail = [];
  axios
    .get(
      "https://peaceful-temple-16111.herokuapp.com/https://pussgrc.herokuapp.com/allprojects"
    )
    .then((res) => {
      setAllProjects(res.data.users);
      
        AllProjects.map((mail) => {
          if (details.email === mail.email) {
            newmail.push(mail);
          }
       
        })
 
        setNewMail(newmail);
        //  console.log("fkdfdkfjk",AllProjects)
      // console.log(newmail)
    }
    );
  

  return (
    <div>
      <div>
        <div
          style={{
            fontSize: "3rem",
            marginTop: "20px",
            color: "#fff",
          }}
        >
 
        </div>
      
        <div className="row">
          {" "}
     
          {NewMail.map((pro) => (
            <div className="bot" key={pro.email}>

              <Card
                name={pro.name}
                email={pro.email}
                description={pro.description}
                link={pro.link}
              />
            </div>
          ))}{" "}
        </div>
      </div>{" "}
    </div>
  );
}

export default AllProjects;
