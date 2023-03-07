import React from "react";
import "./Card.css";
import { data } from "./cardData";

const Card = () => {
  return ( 
    
    <div className="main">
      {data.map((item, i) => {
        return (            
          <div className="training-items" key={i}>
            <img className="main-image" src={item.img} alt="pic" />
            <div className="card-body">
              <img className="star-image" src={item.star} alt="pic" />
              <span> {item.rating}</span>
              <span>{item.number} . </span>
              <span>{item.location}</span>
              <p className="para-text1">Life Lessons with Katie Zaferes </p>
              <p>
                <span className="amount">From $136</span> / person
              </p>
            </div>          
          </div>        
        );
      })}
    </div>
  );
};

export default Card;
