import React from "react";
import './card-small.css'

function CardSmall({growth, pageViews, icon}) {
 return (
    <div className="card-small">
    <p className="card-small-views">pages views</p>
    <p className="card-small-icon">
        <img src={icon} alt="" />
    </p>
    <p className="card-small-number">{pageViews}</p>
   
        <p className="card-small-percentage">
            {growth}%
        </p>
   
</div>
 )       
}
 
export default CardSmall