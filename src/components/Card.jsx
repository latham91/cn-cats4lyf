import React, { useEffect, useState } from 'react'
import "Card.css"
const Card = () => {

  const [cats, setCats] = useState([]);



  const getCats = async () => {
    const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_WsdZaAcnisLiWqYkDONH329FCuNncM9Ghti7CBiUWgKGWW92FJN2rKOe4vFct8bw");
    const FinalData = await response.json();
    setCats(FinalData)
  }



  useEffect(() => {
    getCats();
  }, [])


  return (

    <div className="container">

      {
        users.map((curElem) => {
          return (

            <div className="card_item" key={curElem.id}>
              <div className="card_inner">
                <img src={curElem.avatar_url} alt="" />
                <div className="catName">{curElem.login}</div>
                <div className="catUrl">{curElem.url}</div>
                <div className="detail-box">

                  <div className="catDetail"><span>Name</span>{name}</div>
                  <div className="catDetail"><span>Gender</span>{gender}</div>
                  <div className="catDetail"><span>Price</span>{price}</div>
                </div>
                <button className="seeMore">See More</button>
              </div>

            </div>
          )
        })
      }

    </div>


  )
}

export default Card;