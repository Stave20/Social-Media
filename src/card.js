import React from "react"
import './card.css'


function Card({ username, followers, todayfollowers, icon, name }) {
  const cardClass = `card ${name}`
    return (
      <article className={cardClass}>
        <p className="card-title">
           <img src={icon} alt="" />
            {username}
        </p>
        <p  className="card-followers">
           <span className="card-followers-number">{followers}</span>
            <span className="card-followers-title">Followers</span>
        </p>
        <p className="card-today">
           <img src="/images/icon.png" alt=""/>
            {todayfollowers} Today
        </p>
      </article>
    )
}

export default Card