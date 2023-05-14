import React, { useEffect, useState } from "react";
import Card from "../card/card"
import './categories.css'; 

function Categories() {
  
  const [balloons, setBalloons] = useState();
  const getBalloons = async () => {
    let response = await fetch(
      "https://kikimoraballoon.ru/api/balloons/?format=json",)
      .then((response) => response.json());
    setBalloons(response);
  };
  useEffect(() => {
    getBalloons();
  }, []);

  return (
    <div className="Categories">
              <div class="Card_big _container">
              Категория
              {balloons && 
                      balloons.map((balloon) => (

                        <><a href={'/product/' + balloon.id}><Card /></a></>
                        

                      ))}

              </div>





    </div>
  );
}

export default Categories;
