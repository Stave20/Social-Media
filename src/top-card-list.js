import React from "react"
import Card from "./card"
import './top-card-list.css'

const cardlistData = [
   {
    username: '@NataliaStave',
    id: 1,
    followers: '12k',
    todayfollowers: 12,
    icon:'/images/favicon.png'

   },

   {
    username: '@NataliaStave',
    id: 2,
    followers:'500k',
    todayfollowers: 20,
    icon: '/images/icons8-twitter-32.png'

   
   },
   {
    username: '@NataliaStave',
    id: 3,
    followers: '560k',
    todayfollowers: 30,
    icon:'/images/icons8-instagram-32.png'
   },
   {
    username: '@NataliaStave',
    id: 4,
    followers: '50k',
    todayfollowers: -50,
    icon:'/images/icons8-youtube-play-48.png'
   },
]

function TopCardlist() {
    return(
        <section className="top-cards">
        <div className="wraper">
            <div className="grid">
                {
                    cardlistData.map((cardData) => <Card key={cardData.id} {...cardData} />)
                }
                
        
         {/* <article className="card twitter">
            <p className="card-title">
                <img src="/images/icons8-twitter-32.png" alt=""/>
                @nataliastave
            </p>
            <p  className="card-followers">
                <span className="card-followers-number">500k</span>
                <span className="card-followers-title">Followers</span>
            </p>
            <p className="card-today">
                <img src="/images/icon.png" alt=""/>
                12 Today
            </p>
        </article>
        <article className="card instagram ">
            <p className="card-title">
                <img src="/images/icons8-instagram-32.png" alt=""/>
                @nataliastave
            </p>
            <p  className="card-followers">
                <span className="card-followers-number">560k</span>
                <span className="card-followers-title">Followers</span>
            </p>
            <p className="card-today">
                <img src="/images/icon.png" alt=""/>
                12 Today
            </p>
        </article>
        <article className="card youtube">
            <p className="card-title">
                <img src="/images/icons8-youtube-play-48.png" alt=""/>
                @nataliastave
            </p>
            <p  className="card-followers">
                <span className="card-followers-number">50k</span>
                <span className="card-followers-title">Followers</span>
            </p>
            <p className="card-today">
                <img src="/images/icon.png" alt=""/>
                12 Today
            </p>
        </article>
        */}
       </div>
    </div>
    </section>

    
    
    )
}


export default TopCardlist






