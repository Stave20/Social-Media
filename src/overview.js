import React from "react"
import CardSmall from "./card-small"
import './overview.css'

const cardSmallList = [
    {
        icon: '/images/facebook.png',
        pageViews: '87',
        growth: 3,
        key:1,
    },
    {
        icon: '/images/icons8-instagram-32.png',
        pageViews: '52',
        growth: 1452,
        key:2,
    },
    {
        icon: '/images/icons8-twitter-32.png',
        pageViews: '256',
        growth: 203,
        key:3,
    },
    {
        icon: '/images/icons8-youtube-play-48.png',
        pageViews: '20k',
        growth: 19,
        key:4,
    },
]

function Overview() {
    return (
    <section className="overview">
      <div className="wrapper">
        <h2>Overview - Today</h2>
        <div className="grid">
            <CardSmall />
            {
                cardSmallList.map(({ icon, pageViews, growth, key }) =>
                 (<CardSmall
                  icon={icon}
                  key={key}
                  pageViews={pageViews}
                  growth={growth}
                  />
                  ))
            }
       
    
     {/*<div class="card-small">
        <p class="card-small-views">Likes</p>
        <p class="card-small-icon">
            <img src="/images/facebook.png" alt="" />
        </p>
        <p class="card-small-number">52</p>
       
            <p class="card-small-percentage is-danger">
                -2%
            </p>
       
    </div>
   <div class="card-small">
        <p class="card-small-views">Likes</p>
        <p class="card-small-icon">
            <img src="/images/icons8-instagram-32.png" alt="">
        </p>
        <p class="card-small-number">256</p>
        
            <p class="card-small-percentage">
                1452%
            </p>
        
    </div>
    <div class="card-small">
        <p class="card-small-views">Profile views</p>
        <p class="card-small-icon">
            <img src="/images/icons8-instagram-32.png" alt="">
        </p>
        <p class="card-small-number">20k</p>
        
            <p class="card-small-percentage">
                545%
            </p>
        
    </div>
    <div class="card-small">
        <p class="card-small-views">Retweets</p>
        <p class="card-small-icon">
            <img src="/images/icons8-twitter-32.png" alt="">
        </p>
        <p class="card-small-number">117</p>
      
            <p class="card-small-percentage">
                203%
            </p>
        
    </div>
    <div class="card-small">
        <p class="card-small-views">Likes</p>
        <p class="card-small-icon">
            <img src="/images/icons8-twitter-32.png" alt="">
        </p>
        <p class="card-small-number">450</p>

            <p class="card-small-percentage">
                453%
            </p>
    </div>
    <div class="card-small">
        <p class="card-small-views">Likes</p>
        <p class="card-small-icon">
            <img src="/images/icons8-youtube-play-48.png" alt="">
        </p>
        <p class="card-small-number">105</p>
            <p class="card-small-percentage is-danger">
                19%
            </p>
    </div>
    <div class="card-small">
        <p class="card-small-views">Total Views</p>
        <p class="card-small-icon">
            <img src="/images/icons8-youtube-play-48.png" alt="">
        </p>
        <p class="card-small-number">1207</p>
        <p class="card-small-percentage is-danger">12%</p>
        
    </div> */}
    </div>
           
  </div>
</section>
 )
}

export default Overview
