/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

 const Card = ({crdTitle="default card title",crdTxt="default card txt",imgLink="https://images.unsplash.com/photo-1528543606781-2f6e6857f318?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"}) => {
    return(
        <div class="col-md-4 mt-4">
        <div class="card profile-card-5">
            <div class="card-img-block">
                <img class="card-img-top" src={imgLink} alt="Card image cap"/>
            </div>
            <div class="card-body pt-0">
            <h5 class="card-title">{crdTitle}</h5>
            <p class="card-text">{crdTxt}</p>
            
            <button type="button" className="btn btn-primary">Book Now</button>
        

          </div>
        </div>
        {/* <p class="mt-3 w-100 float-left text-center"><strong>Card with Floting Picture</strong></p> */}
    </div>
    )
 }

 export default Card;